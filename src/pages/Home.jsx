import Hero from "../Components/Hero";
import HomeAbout from "../Components/HomeAbout";
import HomeGallery from "../Components/HomeGallery";
import HomeOffers from "../Components/HomeOffers";
import HomeServices from "../Components/HomeServices";
import LetsWork from "../Components/LetsWork";
import OurProjects from "../Components/OurProjects";

const Home = () => {
  return (
    <div className=" flex flex-col gap-10">
      <Hero />
      <HomeServices />
      <HomeAbout />
      <HomeOffers />
      <OurProjects />
      <h1 className=" text-3xl font-bold text-center">OUR GALLERY</h1>
      <HomeGallery />
      <LetsWork />
    </div>
  );
};

export default Home;
