import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
const SocialMediaIcons = () => {
  return (
    <div className=" bottom-50 right-5 fixed bg-black  p-4 rounded-md z-50 flex flex-col gap-5">
      <a>
        {" "}
        <FaWhatsapp className="text-white text-2xl" />
      </a>
      <a>
        {" "}
        <FaInstagram className="text-white text-2xl" />
      </a>
      <a>
        {" "}
        <HiOutlineMail className="text-white text-2xl" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
