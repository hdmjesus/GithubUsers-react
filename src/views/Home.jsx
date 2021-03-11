import React from "react";
import UserList from "../componets/Home/UserList";
import UserCard from "../componets/Home/UserCard";
import Header from "../componets/Header/Header";

const Home = (props) => {
  return (
    <>
      <Header />
      <UserList>
        <UserCard />
      </UserList>
    </>
  );
};

export default Home;
