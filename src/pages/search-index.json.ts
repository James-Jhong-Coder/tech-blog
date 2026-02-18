import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const posts = await getCollection("posts", ({ data }) => !data.draft);

  const index = posts
    .sort(
      (a, b) =>
        new Date(b.data.createDate).getTime() -
        new Date(a.data.createDate).getTime(),
    )
    .map((post) => ({
      id: post.id,
      title: post.data.title,
      description: post.data.description ?? "",
      tags: post.data.tags,
      category: post.data.category,
      createDate: post.data.createDate.toISOString().slice(0, 10),
    }));

  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
};
