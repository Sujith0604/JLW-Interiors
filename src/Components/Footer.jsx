import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" flex flex-col  ">
      <div className=" lg:h-[400px] bg-black flex p-4 lg:flex-row items-center gap-20 lg:gap-0 justify-around flex-col text-gray-400">
        {" "}
        <div className=" h-full p-4 flex items-center justify-center">
          <h1 className=" text-3xl font-bold">JLW Interiors</h1>
        </div>
        <div className="  h-full flex  justify-center lg:items-start items-center flex-col gap-5">
          <h1 className=" text-3xl font-bold">Our space</h1>
          <ul className=" flex flex-col gap-5">
            <li className="  font-semibold">Home</li>
            <li className="  font-semibold">About</li>
            <li className="  font-semibold">Offers</li>
            <li className="  font-semibold">Gallery</li>
            <li className="  font-semibold">Projects</li>
            <li className="  font-semibold">Contact</li>
          </ul>
        </div>
        <div className="  h-full  flex  justify-center lg:items-start items-center  flex-col gap-5">
          <h1 className=" text-3xl font-bold">Socials</h1>
          <a className=" flex items-center gap-2">
            {" "}
            <FaWhatsapp className="text-white text-2xl" /> {""}Whatsapp
          </a>
          <a className=" flex items-center gap-2">
            <FaInstagram className="text-white text-2xl" /> Instagram
          </a>
          <a className=" flex items-center gap-2">
            {" "}
            <HiOutlineMail className="text-white text-2xl" /> Mail
          </a>
          <a className=" flex items-center gap-2">
            {" "}
            <FaFacebook className="text-white text-2xl" /> Facebook
          </a>
          <a className=" flex items-center gap-2">
            {" "}
            <FaXTwitter className="text-white text-2xl" /> Twitter
          </a>
          <a className=" flex items-center gap-2">
            {" "}
            <IoIosCall className="text-white text-2xl" /> Call
          </a>
        </div>
      </div>
      <div className=" border-t">
        {" "}
        <p className=" text-center text-gray-400 bg-black p-4">
          {" "}
          © 2021 JLW Interiors. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
