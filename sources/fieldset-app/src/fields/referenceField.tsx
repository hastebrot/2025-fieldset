import { z } from "zod/v4";

const referenceField = {
  type: z.literal("reference"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  slug: z.string(),
  isRequired: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
  allowsMultiple: z.boolean().optional(),
};

export const ReferenceField = z.strictObject({
  ...referenceField,
});
