import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
const HomeOffers = () => {
  const offerDeatails = [
    {
      id: 1,
      title: "EVERYTHING",
      description: "ESSENTIAL",
      realPrice: "5.5 lac",
      offerPrice: "4 lac",
      image: "/images/2.jpg",
      paracontents: "Essential Wood Work for 2BHK",
    },
    {
      id: 2,
      title: "STARTER",
      description: "ELEGANZA",
      realPrice: "10.5 lac",
      offerPrice: "8 lac",
      image: "/images/3.jpg",
      paracontents: "detailed woodwork for 3bhk",
    },
    {
      id: 3,
      title: "PLUS",
      description: "ELEGANZA",
      realPrice: "15.5 lac",
      offerPrice: "12 lac",
      image: "/images/4.jpg",
      paracontents: "woodwork and beautification for 3bhk",
    },
  ];

  return (
    <div
      id="offers"
      className=" flex flex-col gap-10 items-center justify-center"
    >
      <h1 className=" text-3xl uppercase font-bold">PACKAGE OFFERS</h1>
      <div className=" flex items-center justify-center gap-11 lg:justify-between w-full flex-wrap px-4 lg:gap-2">
        {offerDeatails.map((offer) => (
          <div
            key={offer.id}
            className=" flex flex-col gap-2 border w-[450px] h-[500px] items-center justify-center rounded-md"
          >
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                src={offer.image}
                className="h-[400px] w-[400px] bg-center bg-cover"
              />
              <div className=" absolute bottom-0 left-25 bg-white w-[200px] h-[100px] flex items-center flex-col justify-center">
                <h1>{offer.title}</h1>
                <p className=" text-xl font-bold">{offer.description}</p>
              </div>
            </div>
            <div className=" flex flex-col gap-2 items-center justify-center">
              <h1>
                OFFER <del>{offer.realPrice}</del> {offer.offerPrice}
              </h1>
              <p className=" text-gray-500 capitalize">{offer.paracontents}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeOffers;
