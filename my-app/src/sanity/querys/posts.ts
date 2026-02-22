import groq from "groq";

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    body,
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

export const singlePostQuery = groq`*[_type == "post" && _id == $id][0]{
    _id,
    title,
    body,
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
