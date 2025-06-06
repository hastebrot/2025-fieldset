import { z } from "zod/v4";

const selectField = {
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
  isVirtual: z.boolean().optional(),
  allowsMultiple: z.boolean().optional(),
};

export const SelectField = z.strictObject({
  ...selectField,
});
