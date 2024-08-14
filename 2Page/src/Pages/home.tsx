import { JobsEnter } from "@/components/jobs";
import { Heading } from "./header";
import { Mainhead } from "./main";
import { Students } from "./students";
import { Courses } from "./courses";
import { Members } from "./members";
import { MasterClass } from "./mester_class";

export const Home = () => {
  return (
    <div>
      <div className="bg-zinc-100">
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
    </div>
  );
};
