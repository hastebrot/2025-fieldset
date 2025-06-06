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

const blocksField = {
  type: z.literal("blocks"),
  name: z.string().optional(),
  label: z.string().optional(),
  isVirtual: z.boolean().optional(),
};

const blocksFieldFields = z.lazy(() => {
  return z.discriminatedUnion("type", [
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
  ]);
});

export const BlocksField = z.strictObject({
  ...blocksField,
  blocks: z.array(
    z.strictObject({
      slug: z.string(),
      get fields() {
        return z.array(blocksFieldFields);
      },
    }),
  ),
});
