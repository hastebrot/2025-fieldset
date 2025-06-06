import { z } from "zod/v4";
import { CheckboxField } from "../checkbox-field";
import { DateField } from "../date-field";
import { FileField } from "../file-field";
import { FileMultiField } from "../file-multi-field";
import { NumberField } from "../number-field";
import { RadioField } from "../radio-field";
import { ReferenceField } from "../reference-field";
import { ReferenceMultiField } from "../reference-multi-field";
import { SelectField } from "../select-field";
import { SelectMultiField } from "../select-multi-field";
import { TextField } from "../text-field";
import { TextareaField } from "../textarea-field";
import { BlocksField } from "./blocks-field";
import { ColumnsField } from "./columns-field";
import { ListField } from "./list-field";
import { RichtextField } from "./richtext-field";

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
