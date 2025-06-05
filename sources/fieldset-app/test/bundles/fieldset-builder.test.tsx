import { expect, describe as suite, test } from "vitest";
import { z } from "zod/v4";
import { buildFieldset, Fieldset } from "./fieldset-builder";

suite("fieldset builder", () => {
  test("schema", () => {
    // const json = (value: any) => JSON.stringify(value, null, 2);
    const jsonSchema = z.toJSONSchema(Fieldset);
    expect(jsonSchema).toMatchObject({
      type: "object",
      properties: {
        slug: {
          type: "string",
        },
        fields: {
          type: "array",
        },
      },
      required: ["slug", "fields"],
    });
  });

  test("config", () => {
    const f = buildFieldset({
      slug: "slug",
      fields: [],
    });
    expect(f).toMatchObject({ fields: [] });
  });

  test("config type", () => {
    const f = buildFieldset({
      slug: "slug",
      fields: [
        {
          type: "text",
          name: "text",
        },
        {
          type: "radio",
          name: "radio",
          options: [
            {
              value: "value",
              label: "label",
            },
          ],
        },
        {
          type: "list",
          name: "list",
          fields: [],
        },
      ],
    });
    expect(f).toMatchObject({
      fields: [
        {
          type: "text",
          name: "text",
        },
        {
          type: "radio",
          name: "radio",
        },
        {
          type: "list",
          name: "list",
        },
      ],
    });
  });
});
