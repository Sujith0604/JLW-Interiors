import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SocialMediaIcons from "./Components/SocialMediaIcons";
import Home from "./pages/Home";

const AppLayput = () => {
  return (
    <div className=" flex flex-col  ">
      <Header />
      <SocialMediaIcons />
      <main className="md:mt-[100px]  mt-[60px]">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayput;
