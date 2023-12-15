import React from "react";
import Logo from "../Assets/logo.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

interface MenuProps {
  handleClick?: () => void;
  closeMenu?: () => void;
  open?: boolean;
}

const MenuBar = ({ handleClick, closeMenu, open }: MenuProps) => {
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
          <nav className="z-[100] absolute md:relative left-100 top-50 transition-all ">
            <ul className="flex flex-col md:flex-row justify-start items-start md:justify-center md:items-center font-headers font-medium text-lg text-text bg-red-400 left-0 pt-[100px] md:pt-0">
              <Link to="/" onClick={closeMenu}>
                <li className="lg:pr-8 pr-3 hover:text-textBlue hover:underline-offset-8 ">
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

export default MenuBar;
