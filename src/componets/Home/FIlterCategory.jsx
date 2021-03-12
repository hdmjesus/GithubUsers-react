import React, { useRef } from "react";

const FIlterCategory = ({ filtrarCantidad }) => {
  const cantidad = useRef(null);

  const handleFilter = () => {
    filtrarCantidad(cantidad.current.value);
  };

  return (
    <div className=" flex p-5 flex-row-reverse">
      <button
        className="ListUsers__filter w-20 p-3 bg-softRed rounded-sm mx-2 text-white"
        onClick={handleFilter}
      >
        Filter
      </button>
      <input
        ref={cantidad}
        className="w-4/12 rounded-sm p-3 text-xs"
        list="items"
        name="users"
        placeholder="Cantidad"
        id="users"
      />
      <datalist id="items">
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </datalist>
    </div>
  );
};

export default FIlterCategory;
