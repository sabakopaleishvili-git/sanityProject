import Image from "next/image";
import Link from "next/link";

import { sanityClient } from "@/src/sanity/lib/client";
import { singleUserQuery } from "@/src/sanity/querys/authors";
import { SingleAuthor } from "@/types/types";
import PostCard from "@/components/PostCard";

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const user = await sanityClient.fetch<SingleAuthor>(singleUserQuery, { id });

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-6 sticky top-4 z-10 inline-flex items-center rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500"
        >
          ← Back to Posts
        </Link>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl shadow-slate-950/30">
          <div className="h-28 bg-linear-to-r from-cyan-500/30 via-fuchsia-500/20 to-violet-500/30" />

          <div className="px-6 pb-8">
            <div className="-mt-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="flex items-end gap-4">
                <Image
                  src={user.image?.asset?.url || "/placeholder-avatar.png"}
                  alt={user.name}
                  width={112}
                  height={112}
                  className="h-28 w-28 rounded-2xl border-4 border-slate-900 object-cover shadow-lg shadow-slate-950/60"
                />
                <div className="pb-2">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                    Author Profile
                  </p>
                  <h1 className="text-3xl font-bold text-white md:text-4xl">
                    {user.name}
                  </h1>
                </div>
              </div>

              <span className="inline-flex w-fit rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-2 text-sm font-medium text-fuchsia-200">
                {user.role || "Contributor"}
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                  Email
                </p>
                <p className="mt-2 text-base text-slate-100">
                  {user.email || "No email set"}
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                  Role
                </p>
                <p className="mt-2 text-base text-slate-100">
                  {user.role || "Writer"}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/40 p-5">
              <h2 className="text-lg font-semibold text-white">
                About this author
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {user.name} contributes articles to our blog and helps keep our
                content useful, practical, and easy to follow.
              </p>
            </div>
          </div>

          <div className="px-6 pb-8">
            <div className="mt-2 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 p-5">
              <h2 className="text-lg font-semibold text-white">
                Posts by this author
              </h2>
              <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                {user.posts.length} post{user.posts.length === 1 ? "" : "s"}
              </span>
            </div>

            {user.posts.length === 0 ? (
              <div className="mt-5 rounded-xl border border-dashed border-slate-700 bg-slate-950/30 p-8 text-center text-slate-300">
                No posts published by this author yet.
              </div>
            ) : (
              <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {user.posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserPage;
