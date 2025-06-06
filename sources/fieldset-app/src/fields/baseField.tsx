import { z } from "zod/v4";
import { CheckboxField } from "./checkboxField";
import { BlocksField } from "./composed/blocksField";
import { ColumnsField } from "./composed/columnsField";
import { GroupField } from "./composed/groupField";
import { ListField } from "./composed/listField";
import { RichtextField } from "./composed/richtextField";
import { TabsField } from "./composed/tabsField";
import { DateField } from "./dateField";
import { FileField } from "./fileField";
import { FileMultiField } from "./fileMultiField";
import { NumberField } from "./numberField";
import { RadioField } from "./radioField";
import { ReferenceField } from "./referenceField";
import { ReferenceMultiField } from "./referenceMultiField";
import { SelectField } from "./selectField";
import { SelectMultiField } from "./selectMultiField";
import { TextareaField } from "./textareaField";
import { TextField } from "./textField";

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
