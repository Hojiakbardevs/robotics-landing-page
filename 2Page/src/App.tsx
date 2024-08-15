import ArrowIcon from "./components/arrow_icon";
import { Headernav } from "./components/nav_header";
import { AboutPage } from "./Pages/about_page";
import { BlogPages } from "./Pages/blog_pages";
import { DemoCourse } from "./Pages/demo_course";
import { Footerss } from "./Pages/footer";
import { Home } from "./Pages/home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { PageNotFound } from "./Pages/page_not_found";
import { Pricing } from "./Pages/pricing";
import { Contact } from "./Pages/contact";
import { DetailsPage } from "./Pages/details_page";
import { EnrollPage } from "./Pages/enroll_page";

function App() {
  return (
    <BrowserRouter>
      <Headernav></Headernav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo_course" element={<DemoCourse />}></Route>
        <Route path="/about_page" element={<AboutPage />}></Route>
        <Route path="/blog_pages" element={<BlogPages />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/enroll" element={<EnrollPage />} />
      </Routes>
      <Outlet />

      <ArrowIcon></ArrowIcon>
      <hr className="mb-10" />
      <div className="bg-white mb-10 ">
        <Footerss></Footerss>
      </div>
    </BrowserRouter>
  );
}

export default App;
