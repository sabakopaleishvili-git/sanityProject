export type Author = {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  role: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
};

export type SingleAuthor = Author & {
  posts: Array<Post>;
};

export type Tag = {
  _id: string;
  title: string;
};

export type Post = {
  _id: string;
  title: string;
  body?: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
  publishedAt: string;
  author?: Author;
  tags?: Tag;
};
