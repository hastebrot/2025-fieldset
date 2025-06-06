import { z } from "zod/v4";

const textField = {
  type: z.literal("text"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  defaultValue: z.string().optional(),
  isRequired: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
};

export const TextField = z.strictObject({
  ...textField,
});
