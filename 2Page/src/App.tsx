import ArrowIcon from "./components/arrow_icon";
import { Headernav } from "./components/nav_header";
import { DemoCourse } from "./Pages/demo_course";
import { Footerss } from "./Pages/footer";
import { Home } from "./Pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Headernav></Headernav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo_course" element={<DemoCourse />}></Route>
      </Routes>

      <ArrowIcon></ArrowIcon>
      <hr className="mb-10" />
      <div className="bg-white mb-10 ">
        <Footerss></Footerss>
      </div>
    </BrowserRouter>
  );
}

export default App;
