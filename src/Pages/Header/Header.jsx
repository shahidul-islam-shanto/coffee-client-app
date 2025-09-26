import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navBer = (
    <>
      <li>
        <Link to={"/"} className="text-nu10">
          Home
        </Link>
      </li>
      <li>
        <Link to={"/addCoffee"} className="text-nu10">
          Add Coffee
        </Link>
      </li>
      <li>
        <Link to={"/users"} className="text-nu10">
          Users
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="py-6 bg-primary1">
        <div className="container-2">
          <nav className="flex justify-between items-center gap-4 ">
            <div className="">
              <h3>Logo</h3>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center gap-6 ">{navBer}</div>
            </div>
            <div className="flex items-center gap-8">
              <div className="">Search</div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
