export const userQuery = `*[_type == "user"]{
    _id,
    name,
    email,
    role,
    image{
      asset->{
        url
      }
    }
  }`;
