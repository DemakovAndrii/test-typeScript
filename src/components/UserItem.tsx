import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemsProps {
  user: IUser;
}

const UserItem: FC<UserItemsProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: "1px solid red" }}>
      {user.id} - {user.name} живет в {user.address.city} на улице{" "}
      {user.address.street}
    </div>
  );
};

export default UserItem;
