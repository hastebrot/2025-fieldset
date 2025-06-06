import { z } from "zod/v4";

const checkboxField = {
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
};

export const CheckboxField = z.strictObject({
  ...checkboxField,
});
