import React from "react";
import { Link } from "react-router-dom";
const UserCard = ({ data }) => {
  const { login, id, avatar_url } = data;

  return (
    <Link
      to={`/user/${id}`}
      className="ListUsers__card bg-white mt-5   rounded-md h-60 min-w-200 w-full md:w-40 max-w-xs md:mr-4"
    >
      <div>
        <figure className="w-full cursor-pointer ">
          <img
            className="rounded-full w-2/5 my-6 mx-auto "
            src={avatar_url}
            alt={login}
          />
        </figure>
        <p className="text-center capitalize mt-10 text-lg  ">{login}</p>
      </div>
    </Link>
  );
};

export default UserCard;
