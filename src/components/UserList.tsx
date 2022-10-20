import React, { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";

interface userListProps {
  users: IUser[];
}

const UserList: FC<userListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
