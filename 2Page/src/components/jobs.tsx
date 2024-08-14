import JobsImg from "@/assets/img/jobs.png";

export const JobsEnter = () => {
  return (
    <div className="container-xl sm:container px-4">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 text-center my-10">
        Наши выпускники работают <br /> в мировых IT-гигантах
      </h1>
      <img src={JobsImg} alt="Jobs about" className="size-auto mx-auto sm:size-3/4" />
    </div>
  );
};
