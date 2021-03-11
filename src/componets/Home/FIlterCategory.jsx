import React from "react";

const FIlterCategory = () => {
  return (
    <div className=" flex p-5 flex-row-reverse">
      <button className="ListUsers__filter w-20 p-3 bg-softRed rounded-sm mx-2 text-white">
        Filter
      </button>
      <input
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
      <button className="bg-body mx-3 flex justify-center items-center p-2 w-20 rounded-md">
        A-Z
      </button>
    </div>
  );
};

export default FIlterCategory;
