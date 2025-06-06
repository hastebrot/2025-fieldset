import { z } from "zod/v4";
import { CheckboxField } from "./checkbox-field";
import { BlocksField } from "./composed/blocks-field";
import { ColumnsField } from "./composed/columns-field";
import { GroupField } from "./composed/group-field";
import { ListField } from "./composed/list-field";
import { RichtextField } from "./composed/richtext-field";
import { TabsField } from "./composed/tabs-field";
import { DateField } from "./date-field";
import { FileField } from "./file-field";
import { FileMultiField } from "./file-multi-field";
import { NumberField } from "./number-field";
import { RadioField } from "./radio-field";
import { ReferenceField } from "./reference-field";
import { ReferenceMultiField } from "./reference-multi-field";
import { SelectField } from "./select-field";
import { SelectMultiField } from "./select-multi-field";
import { TextField } from "./text-field";
import { TextareaField } from "./textarea-field";

export const buildFieldset = (value: z.infer<typeof Fieldset>) => {
  return Fieldset.parse(value);
};

export const Fieldset = z.strictObject({
  slug: z.string(),
  get fields(): z.ZodArray<typeof Field> {
    return z.array(Field);
  },
});

export const Field = z.lazy(() =>
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

    // composed fields.
    TabsField,
    ListField,
    GroupField,
    ColumnsField,
    BlocksField,
    RichtextField,
  ]),
);
