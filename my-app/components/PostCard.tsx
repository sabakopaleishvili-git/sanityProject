import { Post } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

interface IProps {
  post: Post;
  hasAuthor?: boolean;
}

const PostCard = ({ post, hasAuthor = false }: IProps) => {
  return (
    <Link
      href={`/posts/${post._id}`}
      className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg shadow-slate-950/40 transition hover:-translate-y-1 hover:border-slate-600"
    >
      <div className="relative h-52 w-full">
        <Image
          src={post.image?.asset?.url || "/placeholder-avatar.png"}
          alt={post.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{formatDate(post.publishedAt)}</span>
          {post.tags?.title ? (
            <span className="rounded-full border border-slate-700 px-2 py-1 text-slate-200">
              {post.tags.title}
            </span>
          ) : null}
        </div>

        <h2 className="line-clamp-2 text-xl font-semibold text-white">
          {post.title}
        </h2>
        <p className="line-clamp-3 text-sm text-slate-300">{post.body}</p>

        {hasAuthor && (
          <div className="flex items-center gap-3 border-t border-slate-800 pt-4">
            <Image
              src={post.author?.image?.asset?.url || "/placeholder-avatar.png"}
              alt={post.author?.name || "Author"}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-slate-100">
                {post.author
                  ? `${post.author.name} ${post.author.lastName}`
                  : "Unknown Author"}
              </p>
              <p className="text-xs text-slate-400">
                {post.author?.role || "Writer"}
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default PostCard;
