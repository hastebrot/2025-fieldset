import { z } from "zod/v4";

const selectMultiField = {
  type: z.literal("select-multi"),
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
  allowsMultiple: z.boolean().optional(),
};

export const SelectMultiField = z.strictObject({
  ...selectMultiField,
});
