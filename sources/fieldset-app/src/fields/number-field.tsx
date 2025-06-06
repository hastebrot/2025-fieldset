import { z } from "zod/v4";

const numberField = {
  type: z.literal("number"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  defaultValue: z.number().optional(),
  isRequired: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
};

export const NumberField = z.strictObject({
  ...numberField,
});
