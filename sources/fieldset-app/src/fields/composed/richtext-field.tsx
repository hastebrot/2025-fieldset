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

const richtextField = {
  type: z.literal("richtext"),
  name: z.string().optional(),
  label: z.string().optional(),
  isVirtual: z.boolean().optional(),
};

const richtextFieldFields = z.lazy(() =>
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

export const RichtextField = z.strictObject({
  ...richtextField,
  editor: z
    .object({
      features: z
        .array(
          z.strictObject({
            name: z.string(),
            get fields() {
              return z.array(richtextFieldFields).optional();
            },
          }),
        )
        .optional(),
    })
    .optional(),
});
