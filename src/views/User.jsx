import React, { useState, useEffect } from "react";
import UserDetail from "../componets/User/UserDetail";
import Header from "../componets/Header/Header";
import { getUsuariosIds } from "../services/getUsers/getUsers";
import Contexto from "../context/StaticContext";
const User = (props) => {
  const id = props.match.params.id;
  const [user, setUser] = useState();
  const { Provider } = Contexto;
  useEffect(() => {
    getUsuariosIds(id).then((value) => value.map((user) => setUser(user)));
  }, [id]);
  return (
    <>
      <Header />
      <Provider>
        <UserDetail {...user} />
      </Provider>
    </>
  );
};

export default User;
