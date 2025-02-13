import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayput from "./AppLayput";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));

const Offers = lazy(() => import("./pages/Offers"));
const Gallery = lazy(() => import("./pages/Gallery"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <div>
      {/* <Suspense>
        {" "}
        <Routes>
          <Route element={<AppLayput />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="/offers" element={<Offers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense> */}
      <AppLayput />
    </div>
  );
};

export default App;
