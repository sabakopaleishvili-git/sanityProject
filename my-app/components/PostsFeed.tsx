"use client";
import { Post, Tag } from "@/types/types";

import PostCard from "./PostCard";
import { useMemo, useState } from "react";
import TagsList from "./TagsList";

interface IProps {
  posts: Post[];
  tags: Tag[];
}

const PostsFeed = ({ posts, tags }: IProps) => {
  const [selectedTagId, setSelectedTagId] = useState<string[]>([]);
  const filteredPosts = useMemo(() => {
    if (selectedTagId.length === 0) {
      return posts;
    }
    return posts.filter((post: Post) =>
      selectedTagId.includes(post.tags?._id || "")
    );
  }, [posts, selectedTagId]);

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Sanity Blog
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Latest Posts
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Browse articles by tag, discover new ideas, and keep up with our
            latest writing.
          </p>
        </div>
        <TagsList
          tags={tags}
          selectedTagId={selectedTagId}
          setSelectedTagId={setSelectedTagId}
        />

        {filteredPosts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900/40 p-10 text-center text-slate-300">
            No posts found for this tag yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <PostCard hasAuthor key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default PostsFeed;
