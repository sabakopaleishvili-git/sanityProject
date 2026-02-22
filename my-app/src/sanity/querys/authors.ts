import groq from "groq";

export const singleUserQuery = groq`*[_type == "authors" && _id == $id][0]{
    _id,
    name,
    lastName,
    email,
    role,
    image{
      asset->{
        url
      }
    }
    ,
    "posts": *[_type == "post" && author._ref == ^._id]{
      _id,
      title,
      body,
      publishedAt,
      image{
        asset->{
          url
        }
      },
      tags->{
        _id,
        title
      }
    }
  }`;
