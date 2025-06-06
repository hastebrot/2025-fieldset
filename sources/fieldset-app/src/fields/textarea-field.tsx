import { z } from "zod/v4";

const textareaField = {
  type: z.literal("textarea"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  defaultValue: z.string().optional(),
  isRequired: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
};

export const TextareaField = z.strictObject({
  ...textareaField,
});
