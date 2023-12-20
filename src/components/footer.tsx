import React from "react";
import Logo from "../Assets/logo.png";
import { AiOutlineWhatsApp, AiOutlineTwitter } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="flex px-4 lg:px-36 justify-between text-textFooter text-base md:flex-row flex-col">
      <div>
        <img src={Logo} alt="" className="pb-8" />
        <p className="hidden md:block"> Women Techmakers Ilorin &copy; 2023</p>
      </div>
      <div>
        <ul className="flex md:flex-col flex-wrap text-sm md:text-base">
          <li className="pb-8 pr-4 md:pr-0">Home</li>
          <li className="pb-8 pr-4 md:pr-0">About Us</li>
          <li className="pb-8 pr-4 md:pr-0">Initiatives</li>
          <li className="pb-8 pr-4 md:pr-0">Contact Us</li>
        </ul>
      </div>
      <div>
        <ul className="flex md:flex-col text-sm md:text-base flex-wrap">
          <li className="pb-8 pr-4 md:pr-0">Upcoming events</li>
          <li className="pb-8 pr-4 md:pr-0">Partner with us</li>
          <li className="pb-8 pr-4 md:pr-0"> Join our virtual community</li>
        </ul>
      </div>
      <div className="flex md:flex-col flex-wrap text-sm md:text-base">
        <li className="flex list-none items-center pb-8 pr-4 md:pr-0">
          <span className="mr-2 bg-bgGreen flex justify-center items-center w-[20px] h-[20px] rounded-[50%] text-textLight text-center ">
            <AiOutlineWhatsApp />
          </span>{" "}
          <span>Whatsapp</span>
        </li>
        <li className="flex list-none items-center pb-8 pr-4 md:pr-0">
          <span className="mr-2 bg-bgLightBlue flex justify-center items-center w-[20px] h-[20px] rounded-[50%] text-textLight text-center">
            <AiOutlineTwitter />
          </span>
          <span>Twitter</span>
        </li>
        <li className="flex list-none items-center pb-8 pr-4 md:pr-0">
          <span className="pr-2">
            <SiGmail />
          </span>{" "}
          Gmail
        </li>
      </div>
      <p className="md:hidden text-sm"> Women Techmakers Ilorin &copy; 2023</p>
    </footer>
  );
};

export default Footer;
