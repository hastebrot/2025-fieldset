import { Kysely } from "kysely";
import { expect, describe as suite, test } from "vitest";
import { z } from "zod/v4";
import { autoCreateTable, debugSql } from "../../src/helpers/config";
import { createDatabaseWithSqlocal } from "../../src/helpers/sqlocal";

export type Fieldset<Shape extends z.core.$ZodShape, Migration, Client> = {
  slug: string;
  schema: z.ZodObject<Shape, z.core.$strict>;
  migration: Migration;
  client: Client;
};

export const buildFieldset = <Shape extends z.core.$ZodShape, Migration, Client>(
  fieldset: Fieldset<Shape, Migration, Client>,
) => fieldset;

export const Post = buildFieldset({
  slug: "post",

  get schema() {
    return z.strictObject({
      id: z.number().optional().meta({
        primaryKey: true,
        autoIncrement: true,
      }),
      title: z.string(),
      body: z.string(),
    });
  },

  get migration() {
    return {
      async createPosts<T>(db: Kysely<T>) {
        const q = autoCreateTable(Post.slug, Post.schema)(db);
        return await q.$call(debugSql).execute();
      },
    };
  },

  get client() {
    const WritePost = {
      Params: z.object({
        post: Post.schema.array(),
      }),
      Returns: z.object({}),
    };
    const ReadPost = {
      Params: z.object({
        limit: z.number().optional(),
      }),
      Returns: z.object({
        post: Post.schema.array(),
      }),
    };
    type Post = z.infer<typeof Post.schema>;
    type WritePost = {
      Params: z.infer<typeof WritePost.Params>;
      Returns: z.infer<typeof WritePost.Returns>;
    };
    type ReadPost = {
      Params: z.infer<typeof ReadPost.Params>;
      Returns: z.infer<typeof ReadPost.Returns>;
    };
    return {
      async writePost(
        db: Kysely<{ post: Post }>,
        params: WritePost["Params"],
      ): Promise<WritePost["Returns"]> {
        const post = Post.schema.array().parse(params.post);
        const q = db
          .insertInto("post")
          .values(post)
          .onConflict((it) => it.column("id").doUpdateSet(post));
        await q.$call(debugSql).execute();
        return {};
      },

      async readPost(
        db: Kysely<{ post: Post }>,
        params: ReadPost["Params"],
      ): Promise<ReadPost["Returns"]> {
        const q = db
          .selectFrom("post")
          .select(["id", "title", "body"])
          .$call((it) => (params.limit ? it.limit(params.limit) : it));
        const r = await q.$call(debugSql).execute();
        const post = Post.schema.array().parse(r);
        return { post };
      },
    };
  },
});

export const createDatabase = async <T>() => {
  const { db } = createDatabaseWithSqlocal<T>({
    databasePath: process.env.NODE_ENV === "test" ? ":memory:" : ":localStorage:",
  });
  return db;
};

const db = await createDatabase<{ post: z.infer<typeof Post.schema> }>();

suite("config", () => {
  test("build fieldset", async () => {
    // create table.
    await Post.migration.createPosts(db);

    // insert into table.
    const entry = Post.schema.parse({ title: "title", body: "body" });
    await Post.client.writePost(db, { post: [entry] });

    // select from table.
    const entries = await Post.client.readPost(db, { limit: 1 });
    expect(entries.post).toMatchObject([entry]);
  });
});
