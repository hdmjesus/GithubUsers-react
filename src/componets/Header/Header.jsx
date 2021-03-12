import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header className="h-20 flex flex-col  justify-center p-5 bg-VeryMostDarkBlue text-white font-bold">
      <Link to={"/"}>
        <div className="cursor-pointer">Internet Creators</div>
      </Link>
    </header>
  );
};

export default Header;
