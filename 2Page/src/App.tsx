import { JobsEnter } from "./components/jobs";
import { Headernav } from "./components/nav_header";
import { Heading } from "./Pages/header";
import { Mainhead } from "./Pages/main";
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
      </div>
    </>
  );
}

export default App;
