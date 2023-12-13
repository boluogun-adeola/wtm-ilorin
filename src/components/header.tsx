import React, { useState } from "react";
import Logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="flex justify-between items-center px-4 py-4 lg:px-36 lg:py-[18px]">
      <div className="flex items-center flex-row-reverse md:flex-row ">
        <div className={open ? "hidden" : "flex"}>
          <img src={Logo} alt="women techmaker's logo" />
        </div>
        <div className="lg:pl-20 pl-6">
          <div onClick={handleClick} className="block md:hidden">
            {open ? <FiX /> : <FiMenu />}
          </div>
          <nav>
            <ul className="flex justify-center items-center flex-row  font-headers font-medium text-lg text-text ">
              <Link to="/" onClick={closeMenu}>
                <li className="lg:pr-8 pr-3 hover:text-textBlue hover:underline-offset-8">
                  Home
                </li>
              </Link>

              <Link to="/about" onClick={closeMenu}>
                <li className="lg:pr-8 pr-3 hover:text-textBlue hover:underline-offset-8">
                  {" "}
                  About Us
                </li>
              </Link>

              <Link to="/initiatives" onClick={closeMenu}>
                <li className="lg:pr-8 pr-3 hover:text-textBlue hover:underline-offset-8">
                  Initiatives
                </li>
              </Link>

              <Link to="/" onClick={closeMenu}>
                <li className="hover:text-textBlue hover:underline-offset-8">
                  Contact Us
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>

      <div>
        <button className="bg-bgBlue py-[10px] px-[32px] text-textLight rounded-md hidden md:flex">
          Join Us
        </button>
      </div>
    </header>
  );
};

export default Header;
