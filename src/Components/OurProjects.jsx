// const OurProjects = () => {
//   return (
//     <div className=" flex flex-col gap-5">
//       <h1 className=" text-6xl font-bold lg:px-[100px]">Our Projects</h1>
//       <div className=" flex lg:flex-row flex-col gap-5 lg:gap-0 px-2">
//         {/* <div className="bg-[url('/images/17.jpg')] h-[800px] bg-center bg-cover bg-fixed"></div>
//         <div className="bg-[url('/images/18.jpg')] h-[800px] bg-center bg-cover bg-fixed"></div>
//         <div className="bg-[url('/images/19.jpg')] h-[800px] bg-center bg-cover bg-fixed"></div>
//         <div className="bg-[url('/images/20.jpg')] h-[800px] bg-center bg-cover bg-fixed"></div> */}

//         <div className=" relative">
//           {" "}
//           <img
//             src="/images/17.jpg"
//             className=" h-[575px] w-full"
//             loading="lazy"
//           />
//           <h1 className=" absolute top-0 left-0 text-3xl font-bold text-black">
//             Kitchen Projects
//           </h1>
//         </div>

//         <div className=" relative">
//           {" "}
//           <img
//             src="/images/18.jpg"
//             className=" h-[575px] w-full"
//             loading="lazy"
//           />
//           <h1 className=" absolute top-0 left-0 text-3xl font-bold text-black">
//             Living Room Projects
//           </h1>
//         </div>

//         <div className=" relative">
//           <img
//             src="/images/19.jpg"
//             className=" h-[575px] w-full"
//             loading="lazy"
//           />
//           <h1 className=" absolute top-0 left-0 text-3xl font-bold text-black">
//             Dining Projects
//           </h1>
//         </div>

//         <div className=" relative">
//           {" "}
//           <img
//             src="/images/20.jpg"
//             className=" h-[575px] w-full "
//             loading="lazy"
//           />
//           <h1 className=" absolute top-0 left-0 text-3xl font-bold text-black">
//             Bedroom Projects
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProjects;

import { useState } from "react";
import { motion } from "motion/react";
import LazyLoad from "react-lazy-load";

const OurProjects = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section
        id="projects"
        className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap ">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  PROJECTS
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center ">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-yellow-500"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("branding")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "branding"
                        ? "activeClasses bg-primary text-yellow-500"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Celing Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-primary text-yellow-500"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Room Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("marketing")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-primary text-yellow-500"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Woodworks
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-primary text-yellow-500"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Light Design
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap ">
            <PortfolioCard
              ImageHref="/images/1.jpg"
              category="Branding"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/images/17.jpg"
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/images/3.jpg"
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/images/17.jpg"
              category="Development"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/images/18.jpg"
              category="Design"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/images/19.jpg"
              category="Marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProjects;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            {" "}
            <motion.img
              whileHover={{ scale: 0.96 }}
              whileTap={{ scale: 0.95 }}
              src={ImageHref}
              alt="portfolio"
              className="w-full"
            />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">
              {title}
            </h3>
            <a
              href={buttonHref}
              className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
