import type { ColumnDataType, Compilable, Kysely } from "kysely";
import { z } from "zod/v4";
import { throwError } from "./error";

export type Config = {
  meta?: {
    title?: string;
    description?: string;
  };
  fieldsets?: Fieldset[];
};

export const buildConfig = (config: Config) => config;

export type Fieldset<
  Shape extends z.core.$ZodShape = z.core.$ZodShape,
  Migration = {},
  Client = {},
> = {
  slug: string;
  schema: z.ZodObject<Shape, z.core.$strict>;
  migration: Migration;
  client: Client;
};

export const buildFieldset = <Shape extends z.core.$ZodShape, Migration, Client>(
  fieldset: Fieldset<Shape, Migration, Client>,
) => {
  return {
    ...fieldset,
    schema: fieldset.schema.meta({
      ...fieldset.schema.meta,
      title: fieldset.slug,
    }),
  };
};

export const debugSql = <T extends Compilable>(it: T): T => (console.debug(it.compile().sql), it);

export const autoCreateTable = (name: string, schema: z.ZodObject) => {
  type SqlTypes = {
    [key: string]: ColumnDataType;
  };
  const sqlTypes: SqlTypes = {
    string: "text",
    number: "integer",
    boolean: "boolean",
  };
  type TableModel = {
    name: string;
    columns: {
      [key: string]: {
        columnName: string;
        dataType: ColumnDataType;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        notNull?: boolean;
      };
    };
  };
  const jsonSchema = z.toJSONSchema(schema) as z.core.JSONSchema.ObjectSchema;
  const tableModel: TableModel = {
    name,
    columns: {},
  };
  for (const key in jsonSchema.properties) {
    const value = jsonSchema.properties[key];
    const type = value.type ?? throwError(`type not found: "${key}"`);
    const dataType = sqlTypes[type] ?? throwError(`type mapping not found: "${type}"`);
    const primaryKey = value.primaryKey === true;
    const autoIncrement = value.autoIncrement === true;
    const notNull = jsonSchema.required?.includes(key);
    tableModel.columns[key] = { columnName: key, dataType };
    primaryKey && (tableModel.columns[key].primaryKey = primaryKey);
    autoIncrement && (tableModel.columns[key].autoIncrement = autoIncrement);
    notNull && (tableModel.columns[key].notNull = notNull);
  }
  return <T>(db: Kysely<T>) => {
    let q = db.schema.createTable(tableModel.name);
    for (const column of Object.values(tableModel.columns)) {
      q = q.addColumn(column.columnName, column.dataType, (qc) => {
        qc = column.primaryKey ? qc.primaryKey() : qc;
        qc = column.autoIncrement ? qc.autoIncrement() : qc;
        qc = column.notNull ? qc.notNull() : qc;
        return qc;
      });
    }
    return q;
  };
};
