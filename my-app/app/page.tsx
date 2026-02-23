import PostsFeed from "@/components/PostsFeed";
import { sanityClient } from "@/src/sanity/lib/client";
import { tagQuery } from "@/src/sanity/querys/tags";
import { postsQuery } from "@/src/sanity/querys/posts";
import { Post, Tag } from "@/types/types";

export const revalidate = 60;

export default async function Home() {
  const posts = await sanityClient.fetch<Post[]>(postsQuery, { tagId: null });
  const tags = await sanityClient.fetch<Tag[]>(tagQuery);

  return <PostsFeed posts={posts} tags={tags} />;
}
