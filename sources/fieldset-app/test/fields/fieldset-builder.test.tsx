import { expect, describe as suite, test } from "vitest";
import { z } from "zod/v4";
import { buildFieldset, Fieldset } from "../../src/fields/baseField";

suite("fieldset builder", () => {
  test("schema", () => {
    const json = (value: any) => JSON.stringify(value, null, 2);
    const jsonSchema = z.toJSONSchema(Fieldset);
    expect(json(jsonSchema).length).toBe(1_656_663);
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

  test("slug", () => {
    const f = buildFieldset({
      slug: "slug",
      fields: [],
    });
    expect(f).toMatchObject({ fields: [] });
  });

  test("simple fields", () => {
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

  test("composed fields", () => {
    buildFieldset({
      slug: "slug",
      fields: [
        {
          type: "text",
          name: "name",
        },
        {
          type: "tabs",
          fields: [
            {
              type: "group",
              fields: [
                {
                  type: "text",
                  name: "name",
                },
              ],
            },
          ],
        },
      ],
    });
  });

  test("groups", () => {
    buildFieldset({
      slug: "slug",
      fields: [
        {
          type: "group",
          fields: [
            {
              type: "group",
              fields: [
                {
                  type: "group",
                  fields: [
                    {
                      type: "text",
                      name: "name",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  });
});
