import React, { useState } from "react";
import Modal from "../User/Modal";

const RepositoriesDetail = (props) => {
  const [ActivemModal, setActivemModal] = useState(false);

  const openModal = () => {
    setActivemModal(true);
    console.log(ActivemModal);
  };
  const closeModal = () => {
    setActivemModal(false);
  };

  const {
    name,
    id,
    description,
    html_url,
    language,
    forks,
    stargazers_count,
    watchers_count,
  } = props;

  return (
    <li
      className="bg-white rounded-xl p-4 mb-3 cursor-pointer md:w-44 md:mr-2"
      onClick={openModal}
    >
      <div>
        <h3 className="text-lg font-bold capitalize text-left pl-2 md:text-sm md:pl-0">
          {name}
        </h3>
        {!description && <p className="text-sm">Description no disponible</p>}
        <p className="text-xs text-center">{description}</p>
        <p className="flex justify-evenly mt-3 items-center">
          <span className="text-sm block">{language}</span>
          <span className="text-sm block">
            <span className="material-icons ">star_rate</span>
            <span className="">{stargazers_count}</span>
          </span>
        </p>
      </div>
      {ActivemModal === true && (
        <Modal {...props} closeModal={closeModal}></Modal>
      )}
    </li>
  );
};

export default RepositoriesDetail;
