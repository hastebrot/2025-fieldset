import { cleanup, queryHelpers, render, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Kysely } from "kysely";
import { action, observable } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { beforeEach, expect, describe as suite, test } from "vitest";
import { z } from "zod/v4";
import { createDatabaseWithSqlocal } from "../../src/helpers/sqlocal";
import { registerGlobals } from "../registerGlobals";
import { registerMatchers } from "../registerMatchers";

export const setupDatabase = async <T extends any = any>() => {
  return createDatabaseWithSqlocal<T>({
    databasePath: process.env.NODE_ENV === "test" ? ":memory:" : ":localStorage:",
  });
};

type inferSchema<T extends { [key: string]: z.ZodTypeAny }> = {
  [key in keyof T]: z.infer<T[key]>;
};

// type PostSchema = { [key in keyof typeof Post.schema]: z.infer<(typeof Post.schema)[key]> };
// type Post = PostSchema["post"];

// const schema = <Name extends string, Shape extends z.core.$ZodShape>(
//   name: Name,
//   schema: () => z.ZodObject<Shape, z.core.$strict>,
// ) => {
//   return { [name]: schema() } as {
//     [key in Name]: z.ZodObject<Shape, z.core.$strict>;
//   };
// };

const Post = {
  schema: {
    post: z
      .strictObject({
        id: z.number().optional().meta({
          primaryKey: true,
          autoIncrement: true,
        }),
        title: z.string(),
        body: z.string(),
      })
      .meta({ title: "post" }),
  },

  get jsonSchema() {
    return {
      post: z.toJSONSchema(Post.schema.post) as z.core.JSONSchema.ObjectSchema,
    };
  },

  get faker() {
    return {
      post() {
        return {
          title: "title",
          body: "body",
        };
      },
    };
  },

  get migration() {
    type Post = inferSchema<typeof Post.schema>;
    return {
      async createPosts(db: Kysely<Post>) {
        return await db.schema
          .createTable("post")
          .addColumn("id", "integer", (it) => it.primaryKey().autoIncrement())
          .addColumn("title", "text", (it) => it.notNull())
          .addColumn("body", "text", (it) => it.notNull())
          .execute();
      },
    };
  },

  get client() {
    type Post = inferSchema<typeof Post.schema>;
    type WritePostParams = { post: Post["post"] };
    type ReadPostParams = { postId: number };
    type ReadPostsParams = { limit?: number };
    return {
      async writePost(db: Kysely<Post>, params: WritePostParams) {
        const post = Post.schema.post.parse(params.post);
        await db
          .insertInto("post")
          .values(post)
          .onConflict((it) => it.column("id").doUpdateSet(post))
          .execute();
        return {};
      },
      async readPost(db: Kysely<Post>, params: ReadPostParams) {
        const r = await db
          .selectFrom("post")
          .where("id", "=", params.postId)
          .select(["id", "title", "body"])
          .limit(1)
          .executeTakeFirstOrThrow();
        const post = Post.schema.post.parse(r);
        return { post };
      },
      async readPosts(db: Kysely<Post>, params: ReadPostsParams) {
        const r = await db
          .selectFrom("post")
          .select(["id", "title", "body"])
          .$call((it) => (params.limit !== undefined ? it.limit(params.limit) : it))
          .execute();
        const posts = Post.schema.post.array().parse(r);
        return { posts };
      },
    };
  },

  get admin() {
    type Post = inferSchema<typeof Post.schema>;
    type PostListTableProps = { posts: Post["post"][] };
    type PostFormProps = { post: Post["post"] };
    return {
      PostListTable: (props: PostListTableProps) => {
        const [posts, setPosts] = useState<Post["post"][]>([]);
        useEffect(() => {
          setPosts(props.posts);
        }, [props.posts]);
        return (
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>body</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td aria-label="post[id]">{post.id}</td>
                  <td aria-label="post[title]">{post.title}</td>
                  <td aria-label="post[body]">{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      },
      PostForm: observer((props: PostFormProps) => {
        const [form] = useState(() =>
          observable({
            post: Post.faker.post(),
            setPost(post: Post["post"]) {
              this.post = post;
            },
          }),
        );
        useEffect(() => {
          form.setPost(props.post);
        }, [props.post]);
        return (
          <form role="form">
            <input
              aria-label="post[title]"
              value={form.post.title}
              onChange={action((event) => (form.post.title = event.target.value))}
              required
            />
            <input
              aria-label="post[body]"
              value={form.post.body}
              onChange={action((event) => (form.post.body = event.target.value))}
              required
            />
          </form>
        );
      }),
    };
  },
};

const { db, deleteDatabaseFile } = await setupDatabase<inferSchema<typeof Post.schema>>();
beforeEach(deleteDatabaseFile);
registerGlobals();
registerMatchers();

suite("schema", () => {
  test("post schema", async () => {
    await Post.migration.createPosts(db);
    await Post.client.writePost(db, {
      post: Post.schema.post.parse(Post.faker.post()),
    });
    await Post.client.writePost(db, {
      post: Post.schema.post.parse(Post.faker.post()),
    });
    const post = await Post.client.readPost(db, { postId: 1 });
    expect(post).toMatchObject({
      post: {
        id: 1,
        title: "title",
        body: "body",
      },
    });
    const posts = await Post.client.readPosts(db, { limit: 2 });
    expect(posts).toMatchObject({
      posts: [
        {
          id: 1,
          title: "title",
          body: "body",
        },
        {
          id: 2,
          title: "title",
          body: "body",
        },
      ],
    });
    expect(Post.jsonSchema.post).toMatchObject({
      title: "post",
      type: "object",
      properties: {
        id: { type: "number" },
        title: { type: "string" },
        body: { type: "string" },
      },
    });
    {
      cleanup();
      const post = await Post.client.readPost(db, { postId: 1 });
      const screen = render(<Post.admin.PostForm post={post.post} />);
      const postForm = screen.getByRole("form");
      await waitFor(() => postForm);
      const postTitle = screen.getByRole("textbox", { name: "post[title]" });
      const postBody = screen.getByRole("textbox", { name: "post[body]" });
      expect(postTitle).toHaveValue("title");
      expect(postBody).toHaveValue("body");
      const user = userEvent.setup({ document: global.document });
      await user.click(postTitle);
      await user.clear(postTitle);
      await user.type(postTitle, "new title");
      expect(postTitle).toHaveValue("new title");
      await user.click(postBody);
      await user.clear(postBody);
      await user.type(postBody, "new body");
      expect(postBody).toHaveValue("new body");
    }
    {
      cleanup();
      const posts = await Post.client.readPosts(db, { limit: 2 });
      const screen = render(<Post.admin.PostListTable posts={posts.posts} />);
      const postTable = screen.getByRole("table");
      await waitFor(() => postTable);
      expect(screen.getByRole("columnheader", { name: "id" })).toBeInTheDocument();
      expect(screen.getByRole("columnheader", { name: "title" })).toBeInTheDocument();
      expect(screen.getByRole("columnheader", { name: "body" })).toBeInTheDocument();
      const postTableRows = screen.getAllByRole("row");
      expect(postTableRows).toHaveLength(3);
      expect(
        queryHelpers.queryByAttribute("aria-label", postTableRows[1], "post[id]"),
      ).toHaveTextContent("1");
      expect(
        queryHelpers.queryByAttribute("aria-label", postTableRows[1], "post[title]"),
      ).toHaveTextContent("title");
      expect(
        queryHelpers.queryByAttribute("aria-label", postTableRows[1], "post[body]"),
      ).toHaveTextContent("body");
    }
  });
});
