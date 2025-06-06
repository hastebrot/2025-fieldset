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
