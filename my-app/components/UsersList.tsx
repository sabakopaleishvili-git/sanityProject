import { sanityClient } from "@/src/sanity/lib/client";
import { userQuery } from "@/src/sanity/querys/authors";
import Image from "next/image";

const UsersList = async () => {
  const users = await sanityClient.fetch(userQuery);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user: any) => (
        <div
          key={user._id}
          className="border border-gray-200 rounded-md p-4 shadow-md"
        >
          <div className="flex items-center gap-2">
            <Image
              src={user.image?.asset?.url || "/placeholder-avatar.png"}
              alt={user.name}
              width={100}
              height={100}
              className="w-10 h-10 rounded-full object-cover"
            />
            <h2>{user.name}</h2>
          </div>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
