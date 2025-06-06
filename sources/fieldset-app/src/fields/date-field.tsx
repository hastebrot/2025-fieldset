import { z } from "zod/v4";

const dateField = {
  type: z.literal("date"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  defaultValue: z.string().optional(),
  isRequired: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
};

export const DateField = z.strictObject({
  ...dateField,
});
