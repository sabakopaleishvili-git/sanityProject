import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityClient } from "@/src/sanity/lib/client";
import { singlePostQuery } from "@/src/sanity/querys/posts";
import { Post } from "@/types/types";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const PostPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const post = await sanityClient.fetch<Post | null>(singlePostQuery, {
    id,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-10 text-slate-100">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-6 inline-flex sticky top-4 z-10 bg-slate-950/50 backdrop-blur-sm items-center rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500"
        >
          ← Back to posts
        </Link>

        <header className="mb-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <div className="relative h-72 w-full md:h-96">
            <Image
              src={post.image?.asset?.url || "/placeholder-avatar.png"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-4 p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-cyan-300">
              Blog Post
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span>{formatDate(post.publishedAt)}</span>
              {post.tags?.title ? (
                <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-100">
                  {post.tags.title}
                </span>
              ) : null}
            </div>
          </div>
        </header>

        <section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8">
          <div className="prose prose-invert prose-slate max-w-none">
            <p>{post.body}</p>
          </div>
        </section>
        <Link href={`/users/${post.author?._id}`}>
          <footer className="rounded-2xl border border-slate-800 bg-slate-900 p-6 cursor-pointer hover:bg-slate-900/80 transition-colors duration-300 hover:border-slate-600">
            <div className="flex items-center gap-4">
              <Image
                src={
                  post.author?.image?.asset?.url || "/placeholder-avatar.png"
                }
                alt={post.author?.name || "Author"}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-slate-400">Written by</p>
                <p className="text-lg font-semibold text-white">
                  {post.author
                    ? `${post.author.name} ${post.author.lastName}`
                    : "Unknown Author"}
                </p>
                <p className="text-sm text-slate-300">
                  {post.author?.role || "Writer"}
                </p>
              </div>
            </div>
          </footer>
        </Link>
      </article>
    </main>
  );
};

export default PostPage;
