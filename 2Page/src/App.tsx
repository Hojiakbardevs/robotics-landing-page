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
import { Skeleton } from "./components/ui/skeleton"; // Import the Skeleton component

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading time (you can replace this with actual data fetching)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Headernav />
      <hr />
      {loading ? (
        <div className="container mx-auto p-4">
          <Skeleton className="h-64 w-full bg-gray-200 mb-4" />
          <Skeleton className="h-64 w-full bg-gray-200 mb-4" />
          <Skeleton className="h-64 w-full bg-gray-200 mb-4" />
        </div>
      ) : (
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
      )}
      <Outlet />
      <ArrowIcon />
      <hr className="mb-10" />
      <div className="bg-white mb-10">
        <Footerss />
      </div>
    </BrowserRouter>
  );
}

export default App;
