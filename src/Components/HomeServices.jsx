import { motion } from "motion/react";
const HomeServices = () => {
  return (
    <div
      id="services"
      className=" flex flex-col lg:gap-30 gap-10 items-center justify-center lg:h-screen "
    >
      <h1 className=" lg:text-5xl text-2xl md:text-3xl uppercase text-center font-bold">
        PROFESSIONAL HOME INTERIOR DESIGN COMPANY
      </h1>
      <div className=" flex items-center flex-wrap  gap-10 justify-center lg:justify-between w-full px-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" flex flex-col  h-[200px] w-[200px] items-center justify-center border rounded-full hover:bg-yellow-500 text-yellow-600 hover:text-black hover:cursor-pointer"
        >
          <h1 className=" uppercase font-semibold text-xl">Since</h1>
          <p>2004</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" flex flex-col  h-[200px] w-[200px] items-center justify-center border rounded-full hover:bg-yellow-500 text-yellow-600 hover:text-black hover:cursor-pointer"
        >
          <h1 className="uppercase font-semibold text-xl">Premium</h1>
          <p>material</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" flex flex-col  h-[200px] w-[200px] items-center justify-center border rounded-full hover:bg-yellow-500 text-yellow-600 hover:text-black hover:cursor-pointer"
        >
          <h1 className="uppercase font-semibold text-xl">10 Years</h1>
          <p>warranty</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" flex flex-col  h-[200px] w-[200px] items-center justify-center border rounded-full hover:bg-yellow-500 text-yellow-600 hover:text-black hover:cursor-pointer"
        >
          <h1 className="uppercase font-semibold text-xl">Completion</h1>
          <p>40 Working Days</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" flex flex-col  h-[200px] w-[200px] items-center justify-center border rounded-full hover:bg-yellow-500 text-yellow-600 hover:text-black hover:cursor-pointer"
        >
          <h1 className="uppercase font-semibold text-xl">Projects</h1>
          <p>100 per month</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" flex flex-col  h-[200px] w-[200px] items-center justify-center border rounded-full hover:bg-yellow-500 text-yellow-600 hover:text-black hover:cursor-pointer"
        >
          <h1 className="uppercase font-semibold text-xl">life long </h1>
          <p>service support</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeServices;
