import HomeServices from "../Components/HomeServices";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className=" flex flex-col pt-2">
      <div className=" flex flex-col lg:flex-row w-[100%] lg:h-screen">
        <div className="lg:w-[50%]  flex flex-col gap-5 ">
          <div>
            <motion.img
              whileHover={{ scale: 0.96 }}
              whileTap={{ scale: 0.95 }}
              src="/images/11.jpg"
              className=" rounded-3xl"
            />
          </div>
          <h1 className=" text-5xl font-bold lg:text-start text-center ">
            ABOUT US
          </h1>
        </div>

        <div className="lg:w-[50%] ">
          <div className=" lg:h-[50%]  flex flex-col gap-2 lg:gap-0 lg:flex-row items-center justify-around">
            <motion.img
              whileHover={{ scale: 0.96 }}
              whileTap={{ scale: 0.95 }}
              src="/images/17.jpg"
              className=" h-full rounded-3xl"
            />
            <motion.img
              whileHover={{ scale: 0.96 }}
              whileTap={{ scale: 0.95 }}
              src="/images/18.jpg"
              className=" h-full rounded-3xl"
            />
            <motion.img
              whileHover={{ scale: 0.96 }}
              whileTap={{ scale: 0.95 }}
              src="/images/19.jpg"
              className=" h-full rounded-3xl"
            />
          </div>
          <div className=" lg:h-[50%]  flex flex-col gap-10 px-2 justify-star lg:pt-10">
            <div className=" flex flex-col gap-2">
              {" "}
              <h1 className=" text-3xl font-bold">OUR MISSION</h1>
              <p className=" text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec ipsum at purus faucibus mollis.
              </p>
            </div>
            <div className=" flex flex-col gap-2">
              <h1 className=" text-3xl font-bold">OUR GOAL</h1>
              <p className=" text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec ipsum at purus faucibus mollis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-5 lg:h-screen items-center justify-center bg-amber-100">
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

      <div className="w-[100%] flex lg:flex-row flex-col lg:h-screen">
        <div className=" lg:w-[50%] flex items-center justify-center">
          <motion.img
            whileHover={{ scale: 0.96 }}
            whileTap={{ scale: 0.95 }}
            src="/images/20.jpg"
            className=" h-[500px] rounded-3xl"
          />
        </div>
        <div className=" lg:w-[50%] flex flex-col justify-center px-4 gap-10">
          <h1 className=" text-3xl font-bold">
            Best Interior Design Company in India
          </h1>
          <p>
            D’LIFE started with commercial space and residential furnishing in
            2004 at Kochi, as its main office. Subsequently, for the convenience
            of people from distant places, we opened new showrooms in Kottayam,
            Trivandrum, and Calicut. More branches are now open at Thrissur,
            Kollam, Bangalore, Chennai, Hyderabad, Pune, Navi Mumbai, Coimbatore
            & Mangalore. To cater the increasing demand for quality Interiors,
            D’LIFE Kochi has started 3 more showrooms in Edappally, Vyttila, and
            Kakkanad. As part of the expansion, over the years, we also started
            new showrooms in other states such as Navi Mumbai, Hyderabad, Pune,
            Bengaluru, Mysore, Mangalore, Chennai, Coimbatore, Madurai and
            Nagercoil to expand our reach and provide our services to a wider
            audience. Currently, we serve clients through 30 showrooms/branches.
            Our marketing office in UAE further enables us to assist NRI clients
            who are looking to furnish their flats or houses in India, ensuring
            that they receive the same quality interiors and services as our
            local customers
          </p>
        </div>
      </div>

      <div className="w-[100%] flex lg:flex-row flex-col lg:h-screen ">
        <div className=" lg:w-[50%] flex flex-col justify-center px-4 gap-10">
          <h1 className=" text-3xl font-bold">
            Best Interior Design Company in India
          </h1>
          <p>
            D’LIFE started with commercial space and residential furnishing in
            2004 at Kochi, as its main office. Subsequently, for the convenience
            of people from distant places, we opened new showrooms in Kottayam,
            Trivandrum, and Calicut. More branches are now open at Thrissur,
            Kollam, Bangalore, Chennai, Hyderabad, Pune, Navi Mumbai, Coimbatore
            & Mangalore. To cater the increasing demand for quality Interiors,
            D’LIFE Kochi has started 3 more showrooms in Edappally, Vyttila, and
            Kakkanad. As part of the expansion, over the years, we also started
            new showrooms in other states such as Navi Mumbai, Hyderabad, Pune,
            Bengaluru, Mysore, Mangalore, Chennai, Coimbatore, Madurai and
            Nagercoil to expand our reach and provide our services to a wider
            audience. Currently, we serve clients through 30 showrooms/branches.
            Our marketing office in UAE further enables us to assist NRI clients
            who are looking to furnish their flats or houses in India, ensuring
            that they receive the same quality interiors and services as our
            local customers
          </p>
        </div>
        <div className=" lg:w-[50%] flex items-center justify-center">
          <motion.img
            whileHover={{ scale: 0.96 }}
            whileTap={{ scale: 0.95 }}
            src="/images/19.jpg"
            className=" h-[500px] rounded-3xl"
          />
        </div>
      </div>

      <div className=" flex flex-col gap-2">
        <HomeServices />
      </div>

      <div className=" shadow-lg bg-[url('/images/About-Background.jpg')] bg-cover text-white bg-center bg-fixed h-screen flex flex-col items-center justify-center gap-5">
        <h1 className=" text-3xl font-bold">ABOUT</h1>
        <p>WE HAVE BEEN CREATING THE HISTORY OF DESIGN FOR FOUR GENERATION.</p>
      </div>

      <div className=" flex flex-col gap-5 lg:h-screen items-center justify-center bg-amber-100">
        <h1 className=" text-5xl font-bold text-center">
          Large, Fully Equipped Modular Furniture Factories
        </h1>

        <p className=" text-center">
          Our factory is well equipped with state-of-the-art German machinery
          and periodical improvements to meet modern furnishing trends. D’LIFE
          has 125,000 square feet factory space to process and assemble modular
          kitchen and other furniture as per the design. Systematic
          manufacturing and assembling procedures ensure the best output to
          match the drawings. Similarly, factory managers schedule the works as
          per the date of execution and site status. Managers, supervisors, and
          technicians, in each process, strive to give the best result in
          complete co-operation.
        </p>
      </div>
    </div>
  );
};

export default About;
