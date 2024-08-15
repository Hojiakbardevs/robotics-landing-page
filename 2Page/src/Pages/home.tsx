import { JobsEnter } from "@/components/jobs";
import { Heading } from "../components/header";
import { Mainhead } from "../components/main";
import { Students } from "../components/students";
import { Courses } from "../components/courses";
import { Members } from "../components/members";
import { MasterClass } from "../components/mester_class";

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
