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
