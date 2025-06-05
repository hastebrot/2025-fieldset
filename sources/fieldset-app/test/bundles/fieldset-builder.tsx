import { z } from "zod/v4";

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
    MultiSelectField,
    ReferenceField,
    MultiReferenceField,
    FileField,
    MultiFileField,

    // composed fields.
    TabsField,
    ListField,
    GroupField,
    ColumnsField,
    BlocksField,
    RichtextField,
  ]),
);

export const TextField = z.strictObject({
  type: z.literal("text"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  defaultValue: z.string().optional(),
  isRequired: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
});

export const TextareaField = z.strictObject({
  type: z.literal("textarea"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  defaultValue: z.string().optional(),
  isRequired: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
});

export const NumberField = z.strictObject({
  type: z.literal("number"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  defaultValue: z.number().optional(),
  isRequired: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
});

export const DateField = z.strictObject({
  type: z.literal("date"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  defaultValue: z.string().optional(),
  isRequired: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
});

export const CheckboxField = z.strictObject({
  type: z.literal("checkbox"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  options: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    }),
  ),
  defaultValue: z.string().optional(),
  isRequired: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
});

export const RadioField = z.strictObject({
  type: z.literal("radio"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  options: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    }),
  ),
  defaultValue: z.string().optional(),
  isRequired: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
});

export const SelectField = z.strictObject({
  type: z.literal("select"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  options: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    }),
  ),
  defaultValue: z.string().optional(),
  isRequired: z.boolean().optional(),
  allowsMultiple: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
});

export const MultiSelectField = z.strictObject({
  type: z.literal("multi-select"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  options: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    }),
  ),
  defaultValue: z.string().optional(),
  isRequired: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
});

export const ReferenceField = z.strictObject({
  type: z.literal("reference"),
  name: z.string(),
  label: z.string().optional(),
  slug: z.string(),
  isRequired: z.boolean().optional(),
  allowsMultiple: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
});

export const MultiReferenceField = z.strictObject({
  type: z.literal("multi-reference"),
  name: z.string(),
  label: z.string().optional(),
  slug: z.string(),
  isRequired: z.boolean().optional(),
  isTabular: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
});

export const FileField = z.strictObject({
  type: z.literal("file"),
  name: z.string(),
  label: z.string().optional(),
  slug: z.string(),
  isRequired: z.boolean().optional(),
  allowsMultiple: z.boolean().optional(),
  acceptedFileTypes: z.array(z.string()).optional(),
  isVirtual: z.boolean().optional(),
});

export const MultiFileField = z.strictObject({
  type: z.literal("multi-file"),
  name: z.string(),
  label: z.string().optional(),
  slug: z.string(),
  isRequired: z.boolean().optional(),
  acceptedFileTypes: z.array(z.string()).optional(),
  isVirtual: z.boolean().optional(),
});

export const TabsField = z.strictObject({
  type: z.literal("tabs"),
  name: z.string().optional(),
  label: z.string().optional(),
  get fields() {
    return z.array(TabsFieldFields);
  },
  isVirtual: z.boolean().optional(),
});

const TabsFieldFields = z.lazy(() =>
  z.discriminatedUnion("type", [
    // simple fields.
    TextField,
    TextareaField,
    NumberField,
    DateField,
    CheckboxField,
    RadioField,
    SelectField,
    MultiSelectField,
    ReferenceField,
    MultiReferenceField,
    FileField,
    MultiFileField,

    // composed fields.
    ListField,
    GroupField,
    ColumnsField,
    BlocksField,
    RichtextField,
  ]),
);

export const ListField = z.strictObject({
  type: z.literal("list"),
  name: z.string().optional(),
  label: z.string().optional(),
  get fields() {
    return z.array(ListFieldFields);
  },
  isCollapsible: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
});

const ListFieldFields = z.lazy(() =>
  z.discriminatedUnion("type", [
    // simple fields.
    TextField,
    TextareaField,
    NumberField,
    DateField,
    CheckboxField,
    RadioField,
    SelectField,
    MultiSelectField,
    ReferenceField,
    MultiReferenceField,
    FileField,
    MultiFileField,
  ]),
);

const GroupField = z.strictObject({
  type: z.literal("group"),
  name: z.string().optional(),
  label: z.string().optional(),
  get fields() {
    return z.array(GroupFieldFields);
  },
  isVirtual: z.boolean().optional(),
});

const GroupFieldFields = z.lazy(() =>
  z.discriminatedUnion("type", [
    // simple fields.
    TextField,
    TextareaField,
    NumberField,
    DateField,
    CheckboxField,
    RadioField,
    SelectField,
    MultiSelectField,
    ReferenceField,
    MultiReferenceField,
    FileField,
    MultiFileField,

    // composed fields.
    ListField,
    ColumnsField,
    BlocksField,
    RichtextField,
  ]),
);

const ColumnsField = z.strictObject({
  type: z.literal("columns"),
  name: z.string().optional(),
  label: z.string().optional(),
  get fields() {
    return z.array(ColumnsFieldFields);
  },
  isVirtual: z.boolean().optional(),
});

const ColumnsFieldFields = z.lazy(() =>
  z.discriminatedUnion("type", [
    // simple fields.
    TextField,
    TextareaField,
    NumberField,
    DateField,
    CheckboxField,
    RadioField,
    SelectField,
    MultiSelectField,
    ReferenceField,
    MultiReferenceField,
    FileField,
    MultiFileField,
  ]),
);

const BlocksField = z.strictObject({
  type: z.literal("blocks"),
  name: z.string().optional(),
  label: z.string().optional(),
  blocks: z.array(
    z.strictObject({
      slug: z.string(),
      get fields() {
        return z.array(BlocksFieldFields);
      },
    }),
  ),
  isVirtual: z.boolean().optional(),
});

const BlocksFieldFields = z.lazy(() =>
  z.discriminatedUnion("type", [
    // simple fields.
    TextField,
    TextareaField,
    NumberField,
    DateField,
    CheckboxField,
    RadioField,
    SelectField,
    MultiSelectField,
    ReferenceField,
    MultiReferenceField,
    FileField,
    MultiFileField,
  ]),
);

const RichtextField = z.strictObject({
  type: z.literal("richtext"),
  name: z.string(),
  label: z.string().optional(),
  defaultValue: z.string().optional(),
  editor: z
    .object({
      features: z
        .array(
          z.strictObject({
            name: z.string(),
            get fields() {
              return z.array(RichtextFieldFields).optional();
            },
          }),
        )
        .optional(),
    })
    .optional(),
  isVirtual: z.boolean().optional(),
});

const RichtextFieldFields = z.lazy(() =>
  z.discriminatedUnion("type", [
    // simple fields.
    TextField,
    TextareaField,
    NumberField,
    DateField,
    CheckboxField,
    RadioField,
    SelectField,
    MultiSelectField,
    ReferenceField,
    MultiReferenceField,
    FileField,
    MultiFileField,
  ]),
);
