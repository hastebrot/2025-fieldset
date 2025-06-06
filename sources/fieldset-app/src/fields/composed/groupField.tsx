import { z } from "zod/v4";
import { CheckboxField } from "../checkboxField";
import { DateField } from "../dateField";
import { FileField } from "../fileField";
import { FileMultiField } from "../fileMultiField";
import { NumberField } from "../numberField";
import { RadioField } from "../radioField";
import { ReferenceField } from "../referenceField";
import { ReferenceMultiField } from "../referenceMultiField";
import { SelectField } from "../selectField";
import { SelectMultiField } from "../selectMultiField";
import { TextField } from "../textField";
import { TextareaField } from "../textareaField";
import { BlocksField } from "./blocksField";
import { ColumnsField } from "./columnsField";
import { ListField } from "./listField";
import { RichtextField } from "./richtextField";

const groupField = {
  type: z.literal("group"),
  name: z.string().optional(),
  label: z.string().optional(),
  isVirtual: z.boolean().optional(),
};

const groupFieldFields = z.discriminatedUnion("type", [
  // simple fields.
  TextField,
  TextareaField,
  NumberField,
  DateField,
  CheckboxField,
  RadioField,
  SelectField,
  SelectMultiField,
  ReferenceField,
  ReferenceMultiField,
  FileField,
  FileMultiField,

  // composed fields.
  ListField,
  ColumnsField,
  BlocksField,
  RichtextField,
]);

export const GroupField = z.strictObject({
  ...groupField,
  get fields() {
    return z.array(z.union([GroupField_1, groupFieldFields]));
  },
});

const GroupField_1 = z.strictObject({
  ...groupField,
  get fields() {
    return z.array(z.union([GroupField_2, groupFieldFields]));
  },
});

const GroupField_2 = z.strictObject({
  ...groupField,
  get fields() {
    return z.array(z.union([GroupField_3, groupFieldFields]));
  },
});

const GroupField_3 = z.strictObject({
  ...groupField,
  get fields() {
    return z.array(groupFieldFields);
  },
});
