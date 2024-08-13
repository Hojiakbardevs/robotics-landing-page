import { JobsEnter } from "./components/jobs";
import { Headernav } from "./components/nav_header";
import { Courses } from "./Pages/courses";
import { Heading } from "./Pages/header";
import { Mainhead } from "./Pages/main";
import { Members } from "./Pages/members";
import { Students } from "./Pages/students";
function App() {
  return (
    <>
      <div className="bg-zinc-100">
        <Headernav></Headernav>
        <hr />
        <Heading />
      </div>
      <div className="bg-white">
        <Mainhead></Mainhead>
        <JobsEnter></JobsEnter>
        <Students></Students>
        <Courses></Courses>
        <Members></Members>
      </div>
    </>
  );
}

export default App;
