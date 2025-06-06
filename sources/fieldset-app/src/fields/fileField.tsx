import { z } from "zod/v4";

const fileField = {
  type: z.literal("file"),
  name: z.string(),
  label: z.string().optional(),
  placeholder: z.string().optional(),
  slug: z.string(),
  isRequired: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
  allowsMultiple: z.boolean().optional(),
  acceptedFileTypes: z.array(z.string()).optional(),
};

export const FileField = z.strictObject({
  ...fileField,
});
