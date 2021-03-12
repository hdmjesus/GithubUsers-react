import React, { useEffect, useState } from "react";

const Modal = ({ datos, closeModal }) => {
  // const {
  //   name,
  //   id,
  //   description,
  //   html_url,
  //   language,
  //   forks,
  //   stargazers_count,
  //   watchers_count,
  // } = props;
  console.log(datos);

  const handleCloseModal = () => {
    closeModal(false);
  };

  return (
    <article className="modal ">
      <div className="modal__main flex flex-col ">
        <div className="moda__description">
          {/* <h3 className="text-lg font-bold capitalize text-left pl-2 md:text-sm md:pl-0">
            {props.name}
          </h3>
          {!props.description && (
            <p className="text-sm">Description no disponible</p>
          )}
          <p className="text-xs text-center">{props.description}</p>
          <p className="flex justify-evenly mt-3 items-center">
            <span className="text-sm block">{props.language}</span>
            <span className="text-sm block">
              <span className="material-icons ">star_rate</span>
              <span className="">{props.stargazers_count} </span>
            </span>
          </p>
        </div>
        <div className="actions flex justify-evenly">
          <a
            className="className='py-2 px-3 flex items-center cursor-pointer bg-darkBlue text-white rounded mt-4 hover:bg-blue-400 "
            href={props.html_url}
            target="__blank"
          >
            Ir al Repo
          </a> */}
          <button
            className="bg-softRed py-2 px-3 text-white rounded cursor-pointer  mt-4 hover:bg-red-600"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </div>
    </article>
  );
};

export default Modal;
