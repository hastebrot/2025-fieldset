import { z } from "zod/v4";

export const buildFieldset = (value: z.infer<typeof Fieldset>) => {
  return Fieldset.parse(value);
};

export const Fieldset = z.strictObject({
  slug: z.string(),
  get fields() {
    return z.array(Field);
  },
});

export const Field = z.discriminatedUnion("type", [
  // simple fields.

  z.strictObject({
    type: z.literal("text"),
    name: z.string(),
    label: z.string().optional(),
    placeholder: z.string().optional(),
    defaultValue: z.string().optional(),
    isRequired: z.boolean().optional(),
  }),

  z.strictObject({
    type: z.literal("textarea"),
    name: z.string(),
    label: z.string().optional(),
    placeholder: z.string().optional(),
    defaultValue: z.string().optional(),
    isRequired: z.boolean().optional(),
  }),

  z.strictObject({
    type: z.literal("number"),
    name: z.string(),
    label: z.string().optional(),
    placeholder: z.string().optional(),
    defaultValue: z.number().optional(),
    isRequired: z.boolean().optional(),
  }),

  z.strictObject({
    type: z.literal("date"),
    name: z.string(),
    label: z.string().optional(),
    placeholder: z.string().optional(),
    defaultValue: z.string().optional(),
    isRequired: z.boolean().optional(),
  }),

  z.strictObject({
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
  }),

  z.strictObject({
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
  }),

  z.strictObject({
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
  }),

  z.strictObject({
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
  }),

  z.strictObject({
    type: z.literal("reference"),
    name: z.string(),
    label: z.string().optional(),
    slug: z.string(),
    isRequired: z.boolean().optional(),
    allowsMultiple: z.boolean().optional(),
  }),

  z.strictObject({
    type: z.literal("multi-reference"),
    name: z.string(),
    label: z.string().optional(),
    slug: z.string(),
    isRequired: z.boolean().optional(),
  }),

  z.strictObject({
    type: z.literal("file"),
    name: z.string(),
    label: z.string().optional(),
    slug: z.string(),
    isRequired: z.boolean().optional(),
    allowsMultiple: z.boolean().optional(),
    acceptedFileTypes: z.array(z.string()).optional(),
  }),

  z.strictObject({
    type: z.literal("multi-file"),
    name: z.string(),
    label: z.string().optional(),
    slug: z.string(),
    isRequired: z.boolean().optional(),
    acceptedFileTypes: z.array(z.string()).optional(),
  }),

  // composed fields.

  z.strictObject({
    type: z.literal("tabs"),
    name: z.string().optional(),
    label: z.string().optional(),
    get fields() {
      return z.array(Field);
    },
    isNested: z.boolean().optional(),
  }),

  z.strictObject({
    type: z.literal("list"),
    name: z.string().optional(),
    label: z.string().optional(),
    get fields() {
      return z.array(Field);
    },
    isCollapsible: z.boolean().optional(),
  }),

  z.strictObject({
    type: z.literal("group"),
    name: z.string().optional(),
    label: z.string().optional(),
    get fields() {
      return z.array(Field);
    },
    isNested: z.boolean().optional(),
  }),

  z.strictObject({
    type: z.literal("columns"),
    name: z.string().optional(),
    label: z.string().optional(),
    get fields() {
      return z.array(Field);
    },
  }),

  z.strictObject({
    type: z.literal("blocks"),
    name: z.string().optional(),
    label: z.string().optional(),
    blocks: z.array(
      z.strictObject({
        slug: z.string(),
        get fields() {
          return z.array(Field);
        },
      }),
    ),
  }),
]);
