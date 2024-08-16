import { useState, useEffect } from "react";
import ArrowIcon from "./components/arrow_icon";
import { Headernav } from "./components/nav_header";
import { AboutPage } from "./Pages/about_page";
import { BlogPages } from "./Pages/blog_pages";
import { DemoCourse } from "./Pages/demo_course";
import { Footerss } from "./components/footer";
import { Home } from "./Pages/home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { PageNotFound } from "./Pages/page_not_found";
import { Pricing } from "./Pages/pricing";
import { Contact } from "./Pages/contact";
import { DetailsPage } from "./Pages/details_page";
import { EnrollPage } from "./Pages/enroll_page";
import { CoursesPages } from "./Pages/courses_pages";
import Logos from "./assets/img/logofull.svg"; // Ensure the path is correct
import BubbleAnimation from "./components/buble_animation";
import TypingEffect from "./components/type_effect";

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading time (you can replace this with actual data fetching)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <BrowserRouter>
      {loading ? (
        <div className="container mx-auto p-4 w-screen h-screen flex gap-10 justify-center items-center flex-col">
          <h1>Loading...</h1>
          <img src={Logos} alt="logos animation" className="mb-4" />

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 text-center">
            O'quv markaziga hush kelibsiz
          </h1>
          <TypingEffect
            textArray={["markaz"]}
            elementId="typing-effect-heading"
          />
          <BubbleAnimation></BubbleAnimation>
        </div>
      ) : (
        <>
          <Headernav />
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo_course" element={<DemoCourse />} />
            <Route path="/about_page" element={<AboutPage />} />
            <Route path="/blog_pages" element={<BlogPages />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses_details" element={<CoursesPages />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/enroll" element={<EnrollPage />} />
          </Routes>
          <Outlet />
          <ArrowIcon />
          <hr className="mb-10" />
          <div className="bg-white mb-10">
            <Footerss />
          </div>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
