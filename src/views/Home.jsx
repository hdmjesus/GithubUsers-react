import React, { useState, useEffect } from "react";
import UserList from "../componets/Home/UserList";
import UserCard from "../componets/Home/UserCard";
import Header from "../componets/Header/Header";
import usersGithub from "../Hooks/useGlobalData";

const Home = () => {
  const [users, setUsers] = useState(null);
  const API = usersGithub();

  useEffect(() => {
    setUsers(API);
  }, [users, API]);
  return (
    <>
      <Header />
      <UserList></UserList>
    </>
  );
};

export default Home;
