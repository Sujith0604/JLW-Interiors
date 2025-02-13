import { motion } from "motion/react";
const Projects = () => {
  const project = [
    {
      id: 1,
      title: "Interior Woodworks Design",
      description:
        "If you are looking for clearly laid out answers and realistic inspirations to your questions over interior design, the design process, and how much our clients love our works, take the time to understand why we are the best for your dream home.",

      image: "/images/1.jpg",
    },

    {
      id: 2,
      title: "Interior Lighting Design",
      description:
        "We have worked on a wide range of residential projects including apartments, luxury villas, family homes, and holiday homes. Having worked on residential projects for over 20 years we know what adds value and what you are looking for.",
      image: "/images/20.jpg",
    },
    {
      id: 3,
      title: "Interior Flooring Design",
      description:
        "We have designed interiors for modern family homes to luxury residential projects across South India. From initial consultation to a completely finished home, we provide our clients with the best possible interior designs and ideas that are comfortable, affordable, and livable.",
      image: "/images/3.jpg",
    },
  ];

  return (
    <div className=" flex flex-col gap-10">
      <div className=" shadow-lg bg-[url('/images/About-Background.jpg')] bg-cover text-white bg-center bg-fixed h-screen flex flex-col items-center justify-center gap-5">
        <h1 className=" text-5xl font-bold uppercase">Our Projects</h1>
        <p className=" text-xl font-semibold">
          WE HAVE BEEN CREATING THE HISTORY OF DESIGN FOR FOUR GENERATION.
        </p>
      </div>
      <div className=" flex flex-col gap-5 lg:h-screen items-center justify-center">
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

      <div className=" flex flex-col items-center justify-center gap-10">
        <h1 className=" text-3xl font-bold">ACTUAL PROJECT PHOTOGRAPHS</h1>
        <div className=" flex flex-col lg:flex-row flex-wrap gap-2 items-center justify-around p-4 w-full">
          {project.map((item) => (
            <div
              key={item.id}
              className=" flex flex-col gap-5 lg:h-[600px] lg:w-[450px] shadow-2xl p-4"
            >
              <div className=" flex items-center justify-center">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  src={item.image}
                  className="h-[400px] bg-center bg-cover"
                />
              </div>
              <div className=" flex flex-col gap-2 px-4">
                {" "}
                <h1 className=" text-xl font-semibold">{item.title}</h1>
                <p className=" text-[15px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
