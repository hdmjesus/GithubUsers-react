import React, { useState, useEffect } from "react";
import FIlterCategory from "./FIlterCategory";
import UserCard from "./UserCard";
import usersGithub from "../../Hooks/useGlobalData";

const UserList = () => {
  const [users, setUsers] = useState(null);
  const API = usersGithub();

  useEffect(() => {
    setUsers(API);
    console.log(users);
  }, [users, API]);
  return (
    <section className="ListUsers flex flex-col  items-center w-full mb-10">
      <FIlterCategory />
      <article className="ListUsers__list mt-5 flex flex-col items-center md:flex-row flex-wrap md:m-auto w-4/5 md:w-11/12 md:justify-center ">
        {users && users.map((data) => <UserCard key={data.id} data={data} />)}
      </article>
    </section>
  );
};

export default UserList;
