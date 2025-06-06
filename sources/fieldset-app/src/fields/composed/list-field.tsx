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

const listField = {
  type: z.literal("list"),
  name: z.string().optional(),
  label: z.string().optional(),
  isVirtual: z.boolean().optional(),
};

const listFieldFields = z.lazy(() =>
  z.discriminatedUnion("type", [
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
  ]),
);

export const ListField = z.strictObject({
  ...listField,
  get fields() {
    return z.array(listFieldFields);
  },
});
