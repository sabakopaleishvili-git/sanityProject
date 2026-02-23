import groq from "groq";

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    description,
    image{
        asset->{
            url
        }
    },
    publishedAt,
    author->{
      _id,
      name,
      lastName,
      role,
      image{
        asset->{
          url
        }
      }
    },
    tags->{
      _id,
      title
    }
}`;

export const singlePostQuery = groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    description,
    slug,
    image{
        asset->{
            url
        }
    },
    publishedAt,
    author->{
        _id,
        name,
        lastName,
        role,
        image{
            asset->{
                url
            }
        }
    },
    tags->{
        _id,
        title
    }
}`;
