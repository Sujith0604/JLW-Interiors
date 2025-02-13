import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "motion/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  const [open, setOpen] = useState(false);

  const NavComponent = () => {
    return (
      <nav className=" h-[400px] w-[200px] flex xl:hidden">
        <ul className=" flex flex-col gap-5 text-xl uppercase text-white ">
          <li className=" hover:underline">
            <AnchorLink onClick={() => setOpen(!open)} href="/">
              Home
            </AnchorLink>
          </li>
          <li className=" hover:underline">
            <AnchorLink onClick={() => setOpen(!open)} href="services">
              Services
            </AnchorLink>
          </li>
          <li className=" hover:underline">
            {" "}
            <AnchorLink onClick={() => setOpen(!open)} href="#about">
              About
            </AnchorLink>
          </li>
          <li className=" hover:underline">
            {" "}
            <AnchorLink onClick={() => setOpen(!open)} href="#projects">
              Projects
            </AnchorLink>
          </li>

          <li className=" hover:underline">
            {" "}
            <AnchorLink onClick={() => setOpen(!open)} href="#gallery">
              Gallery
            </AnchorLink>
          </li>

          <li className=" hover:underline">
            <AnchorLink onClick={() => setOpen(!open)} href="#offers">
              Offers
            </AnchorLink>
          </li>

          <li className=" hover:underline">
            <AnchorLink onClick={() => setOpen(!open)} href="#contact">
              Contact
            </AnchorLink>
          </li>
          <li
            className=" flex gap-5
           items-center"
          >
            <a
              target="_blank"
              aria-label="facebook"
              href="https://www.facebook.com/share/15VNuw4sKG/?mibextid=wwXIfr"
            >
              <FacebookRoundedIcon />
            </a>
            {/* <a
              target="_blank"
              aria-label="facebook"
              href="https://www.linkedin.com/in/accurate-software-integrators-ab02b1344/"
            >
              <LinkedInIcon />
            </a> */}
            <a
              target="_blank"
              aria-label="instagram"
              href="https://www.instagram.com/accuratesoftwareintegrators?igsh=MWxraGF4NXI3NnFqYg%3D%3D&utm_source=qr"
            >
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              aria-label="mail"
              href="mailto:accuratesoftwareintegrators@gmail.com"
            >
              <MailRoundedIcon />
            </a>
            <a
              target="_blank"
              aria-label="whatsapp"
              href="whatsapp://send?text=Hello There!&phone=+918870895978"
            >
              <WhatsAppIcon />
            </a>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <header className=" md:h-[100px] h-[60px] p-4   flex items-center justify-between fixed w-full bg-black text-white bg-opacity-40 backdrop-blur-lg z-[100]">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, easing: "ease" },
        }}
        className=" flex items-center justify-center"
      >
        <AnchorLink href="/">
          <h1 className=" text-3xl font-bold">JLW </h1>
        </AnchorLink>
      </motion.div>

      {open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-50  ">
          <div className="flex justify-center items-center w-full h-full">
            <NavComponent />
            <button
              aria-label="close"
              className="absolute top-5 right-5 text-white"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}

      {!open ? (
        <button
          className="px-4 py-2 rounded-3xl xl:hidden"
          aria-label="open"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      ) : (
        ""
      )}

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.7, type: "fade" },
        }}
        className=" hidden xl:flex"
      >
        <ul className="flex gap-6  font-semibold">
          <li className=" hover:underline">
            <AnchorLink href="#hero">Home</AnchorLink>
          </li>
          <li className=" hover:underline">
            <AnchorLink href="services">Services</AnchorLink>
          </li>
          <li className=" hover:underline">
            {" "}
            <AnchorLink href="#about">About</AnchorLink>
          </li>

          <li className=" hover:underline">
            {" "}
            <AnchorLink href="#offers">Offers</AnchorLink>
          </li>
          <li className=" hover:underline">
            {" "}
            <AnchorLink href="#projects">Projects</AnchorLink>
          </li>
          <li className=" hover:underline">
            {" "}
            <AnchorLink href="#gallery">Gallery</AnchorLink>
          </li>
          <li className=" hover:underline">
            <AnchorLink href="#contact">Contact</AnchorLink>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
