import React, { useState, useEffect, useRef } from "react";
import FIlterCategory from "./FIlterCategory";
import UserCard from "./UserCard";
import useNearScreen from "../../Hooks/useNearScreen";
import debounce from "just-debounce-it";
import {
  getUsuariosFilter,
  getUsuariosPage,
} from "../../services/getUsers/getUsers";

const INITIAL_PAGE = 0;
const UserList = () => {
  const [users, setUsers] = useState();
  const [cantidad, setCantidad] = useState(0);
  const [page, setPage] = useState(INITIAL_PAGE);
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({ externalRef, once: false });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    getUsuariosFilter(cantidad).then((data) => setUsers(data));
  }, [cantidad]);

  useEffect(() => {
    getUsuariosPage(page).then((data) =>
      setUsers((prevData) => prevData.concat(data))
    );
  }, [page]);

  useEffect(() => {
    if (isNearScreen) {
      handleNextPage();
      alert(isNearScreen);
    }
  }, [isNearScreen]);

  return (
    <section className="ListUsers flex flex-col  items-center w-full mb-10">
      <FIlterCategory filtrarCantidad={(value) => setCantidad(value)} />
      <article className="ListUsers__list h-screen mt-5 flex flex-col items-center md:flex-row flex-wrap md:m-auto w-4/5 m-auto md:w-11/12 md:justify-center ">
        {users && users.map((data) => <UserCard key={data.id} data={data} />)}
      </article>

      <div id="visor" ref={externalRef}></div>

      {/* Paginacion manual  */}
      {/* <button
        className="mb-7 mt-10 w-20 p-3 bg-softRed rounded-sm mx-2 text-white"
        onClick={handleNextPage}
      >
        Next
      </button> */}
    </section>
  );
};
export default UserList;
