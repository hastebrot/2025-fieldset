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
import { GroupField } from "./groupField";
import { ListField } from "./listField";
import { RichtextField } from "./richtextField";

const tabsField = {
  type: z.literal("tabs"),
  name: z.string().optional(),
  label: z.string().optional(),
  isVirtual: z.boolean().optional(),
};

const tabsFieldFields = z.lazy(() =>
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
    ListField,
    GroupField,
    ColumnsField,
    BlocksField,
    RichtextField,
  ]),
);

export const TabsField = z.strictObject({
  ...tabsField,
  get fields() {
    return z.array(tabsFieldFields);
  },
});
