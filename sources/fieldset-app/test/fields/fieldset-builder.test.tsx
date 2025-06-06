import { expect, describe as suite, test } from "vitest";
import { z } from "zod/v4";
import { buildFieldset, Fieldset } from "../../src/fields/base-field";

suite("fieldset builder", () => {
  test("schema", () => {
    const jsonSchema = z.toJSONSchema(Fieldset, {
      cycles: "ref",
      io: "output",
      override(ctx) {
        // no-op.
        ctx.zodSchema._zod.id, ctx.jsonSchema.type;
      },
    });
    const json = (value: any) => JSON.stringify(value, null, 2);
    expect(json(jsonSchema).split("\n").length).toBe(26_775);
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
                {
                  type: "number",
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
