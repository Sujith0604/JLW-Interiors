import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

const HomeAbout = () => {
  return (
    <div id="about" className=" flex flex-col gap-10 px-2 py-5 bg-amber-100 ">
      <div className=" flex flex-col gap-5  h-[400px] items-center justify-center ">
        <h1 className=" text-5xl font-bold text-center">
          WELCOME TO JLW INTERIORS
        </h1>
        <h2 className=" text-2xl">#BringHappinessInside®</h2>
        <p className=" text-center">
          D’LIFE Interiors Pvt. Ltd. (Formerly known as JM Lifestyle Interior
          Projects Pvt. Ltd.) is the largest and most reliable home interior
          design company in Navi Mumbai, Hyderabad, Pune, Bangalore, Kerala,
          Mysore, Chennai, Nagercoil, Coimbatore, Madurai & Mangalore with more
          than 1300 employees. It is one of the prominent names in 100%
          customized furniture and modular kitchens. Here, the manufacturer
          deals directly with clients, avoiding all intermediaries and thus
          reducing costs. Durability of products, systematic procedure for work
          and teamwork of highly efficient people make this firm the best in the
          industry. Contemporary designs and creative space plans by
          professionals ensure elegant home furnishing. This way, the company is
          able to meet the expectations of clients since its inception in the
          year 2004.
        </p>
      </div>

      <section className=" w-[100%]  flex lg:flex-row flex-col gap-11 lg:gap-0">
        <div className=" lg:w-[40%] flex flex-col items-center lg:items-start lg:mt-[200px] lg:px-20 gap-11">
          <h1 className=" text-5xl  font-bold">Create Your Own Room</h1>
          <p className="text-gray-500">
            We help you to organize your room to bew more cozy and neat. Done
            directly by classy interior designers
          </p>
        </div>
        <div className=" lg:w-[60%] px-2 flex items-center justify-center">
          <img src="/images/about.webp" alt="about1" className=" rounded-3xl" />
        </div>
      </section>

      <section className=" w-[100%] flex lg:flex-row flex-col gap-11 lg:gap-0">
        <div className=" lg:w-[50%]  flex items-center justify-center">
          <img
            src="/images/About2.jpg"
            alt="about1"
            className=" lg:h-[900px] rounded-3xl"
          />
        </div>
        <div className=" lg:w-[50%] flex flex-col items-center lg:items-start  gap-11 px-2">
          <h1 className="  text-5xl  font-bold">
            Design Service You will get.
          </h1>
          <p className="text-gray-500">
            We help you to organize your room to bew more cozy and neat. Done
            directly by classy interior designers
          </p>

          <div className=" flex gap-2 flex-wrap">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" flex flex-col gap-4 border w-full p-4 rounded-md  hover:cursor-pointer"
            >
              <h1 className=" text-3xl">1</h1>
              <p className=" text-xl font-semibold">Consultation</p>
              <p className=" text-sm text-gray-500">
                We will help you understand your needs and preferences
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" flex flex-col gap-4 border w-full p-4 rounded-md  hover:cursor-pointer"
            >
              <h1 className=" text-3xl">2</h1>
              <p className=" text-xl font-semibold">Idea</p>
              <p className=" text-sm text-gray-500">
                We will help you understand your needs and preferences
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" flex flex-col gap-4 border w-full p-4 rounded-md  hover:cursor-pointer"
            >
              <h1 className=" text-3xl">3</h1>
              <p className=" text-xl font-semibold">Design</p>
              <p className=" text-sm text-gray-500">
                We will help you understand your needs and preferences
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" flex flex-col gap-4 border w-full p-4 rounded-md  hover:cursor-pointer"
            >
              <h1 className=" text-3xl">4</h1>
              <p className=" text-xl font-semibold">Construction</p>
              <p className=" text-sm text-gray-500">
                We will help you understand your needs and preferences
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
