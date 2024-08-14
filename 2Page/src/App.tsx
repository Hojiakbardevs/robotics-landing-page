import { JobsEnter } from "./components/jobs";
import { Headernav } from "./components/nav_header";
import { Courses } from "./Pages/courses";
import { Footerss } from "./Pages/footer";
import { Heading } from "./Pages/header";
import { Mainhead } from "./Pages/main";
import { Members } from "./Pages/members";
import { MasterClass } from "./Pages/mester_class";
import { Students } from "./Pages/students";
function App() {
  return (
    <>
      <div className="bg-zinc-100">
        <Headernav></Headernav>
        <hr />
        <Heading />
      </div>
      <div className="bg-white mb-10">
        <Mainhead></Mainhead>
        <JobsEnter></JobsEnter>
        <Students></Students>
        <Courses></Courses>
        <Members></Members>
        <MasterClass></MasterClass>
      </div>
      <hr className="mb-10"/>
      <div className="bg-white mb-10">
        <Footerss></Footerss>
      </div>
    </>
  );
}

export default App;
