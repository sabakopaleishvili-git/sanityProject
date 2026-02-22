import { groq } from "next-sanity";

export const tagQuery = groq`*[_type == "tags"]{
    _id,
    title
}`;
