import UsersList from "@/components/UsersList";
import { Suspense } from "react";

const UsersPage = () => {
  return (
    <div>
      <h1>Users</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersList />
      </Suspense>
    </div>
  );
};

export default UsersPage;
