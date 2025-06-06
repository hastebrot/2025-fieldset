import { z } from "zod/v4";

const referenceMultiField = {
  type: z.literal("reference-multi"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  slug: z.string(),
  isRequired: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
  allowsMultiple: z.boolean().optional(),
};

export const ReferenceMultiField = z.strictObject({
  ...referenceMultiField,
});
