import Marquee from "react-fast-marquee";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="hero"
      className=" flex flex-col gap-11 rounded-3xl  justify-between "
    >
      <section className=" flex items-center justify-center lg:justify-between font-bold tracking-widest px-10  ">
        <h1 className="uppercase lg:text-[100px] md:text-8xl lg:text-5xl ">
          Satisifaction
        </h1>
        {/* <div className=" flex items-center justify-center h-[200px] w-[200px] bg-yellow-500 rounded-3xl">
          <img
            src="/images/Arrow (2).png"
            alt="arrow"
            className=" h-[100px]"
            loading="lazy"
          />
        </div> */}
      </section>

      <section className=" flex lg:flex-row gap-11 flex-col items-center justify-around  w-[100%]    ">
        <div className=" flex items-center lg:px-13 lg:w-[50%]">
          <p className=" text-gray-500 text-xl lg:text-start text-center">
            We create venues to irpove people's lives, we bring the magic to
            life. <br /> On the surface, it's gleaming, but on the inside, its
            stunning
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-12 items-center justify-around  lg:w-[50%]">
          <div className=" flex flex-col gap-2">
            <p className=" text-5xl font-bold">
              {" "}
              88K <span className=" text-yellow-500">+</span>
            </p>
            <p className=" text-gray-500">Happy clients</p>
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" text-5xl font-bold">
              {" "}
              99K <span className=" text-yellow-500">+</span>
            </p>
            <p className=" text-gray-500"> Premium Products</p>
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" text-5xl font-bold">
              {" "}
              868 <span className=" text-yellow-500">+</span>
            </p>
            <p className=" text-gray-500">Projects Finished</p>
          </div>
        </div>
      </section>

      <section className=" justify-around flex flex-wrap gap-2 items-center px-4 ">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          src="/images/1.jpg"
          className=" rounded-3xl lg:h-[370px] bg-cover hover:cursor-pointer"
          loading="lazy"
        />
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          src="/images/2.jpg"
          className=" rounded-3xl lg:h-[370px] bg-cover hover:cursor-pointer"
          loading="lazy"
        />
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          src="/images/3.jpg"
          className=" rounded-3xl lg:h-[370px] bg-cover hover:cursor-pointer"
          loading="lazy"
        />
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          src="/images/4.jpg"
          className=" rounded-3xl lg:h-[370px] bg-cover hover:cursor-pointer"
          loading="lazy"
        />
      </section>

      <section className="bg-yellow-500 h-[100px] flex items-center">
        <Marquee>
          <ul className=" flex gap-10 items-center justify-center">
            <p className=" text-3xl text-black">ELEGANT DESIGN</p>
            <p className=" text-3xl text-black">BEST DESIGN</p>
            <p className=" text-3xl text-black">10+ YEARS EXPERIENCE</p>
            <p className=" text-3xl text-black">BEST DESIGNERS</p>
            <p className=" text-3xl text-black">1000+ PROJECTS</p>
            <p className=" text-3xl text-black">GENUINE PRODUCTS</p>
          </ul>
        </Marquee>
      </section>
    </div>
  );
};

export default Hero;
