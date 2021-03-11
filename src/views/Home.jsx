import React, { useState, useEffect } from "react";
import UserList from "../componets/Home/UserList";
import UserCard from "../componets/Home/UserCard";
import Header from "../componets/Header/Header";

const Home = (props) => {
  const [state, setstate] = useState(initialState);

  useEffect(() => {}, []);
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
