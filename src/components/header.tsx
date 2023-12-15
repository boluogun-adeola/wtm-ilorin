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
    <header className="flex justify-between items-center px-3 py-4 lg:px-36 lg:py-[18px] fixed md:relative w-[100%] bg-bgLight z-[2000]  ">
      <div className="flex items-center flex-row-reverse md:flex-row flex-1 justify-between md:flex-none ">
        <div className={open ? "hidden" : "flex"}>
          <img src={Logo} alt="women techmaker's logo" />
        </div>
        <div className="lg:pl-20 pl-6">
          <div onClick={handleClick} className="block md:hidden relative">
            {open ? (
              <FiX className="text-2xl bg-bgBlue text-textLight p-[5px] rounded z-[5000] absolute top-[20px] right-[16px] transition-all" />
            ) : (
              <FiMenu className="text-2xl transition-all" />
            )}
          </div>
          {/* the css style for .mobile-nav can be found in global css, I added it to reduce the lenght of the classname */}
          <nav
            className={
              open
                ? "mobile-nav bg-bgLight left-0"
                : "mobile-nav md:relative md:h-[10%]  md:left-0 md:transition-none"
            }
          >
            <ul className="flex justify-start md:justify-center items-start md:items-center flex-col md:flex-row pt-20 md:pt-0 pl-[15px] md:pl-0 ">
              <Link to="/" onClick={closeMenu}>
                <li className="lg:pr-8 pr-3 pb-6 md:pb-0 hover:text-textBlue hover:underline-offset-8 ">
                  Home
                </li>
              </Link>

              <Link to="/about" onClick={closeMenu}>
                <li className="lg:pr-8 pr-3 pb-6 md:pb-0 hover:text-textBlue hover:underline-offset-8">
                  {" "}
                  About Us
                </li>
              </Link>

              <Link to="/initiatives" onClick={closeMenu}>
                <li className="lg:pr-8 pr-3 pb-6 md:pb-0 hover:text-textBlue hover:underline-offset-8">
                  Initiatives
                </li>
              </Link>

              <Link to="/" onClick={closeMenu}>
                <li className="pb-6 md:pb-0  hover:text-textBlue hover:underline-offset-8">
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
