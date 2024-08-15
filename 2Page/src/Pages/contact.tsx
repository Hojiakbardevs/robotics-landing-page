import { FormAbout } from "@/components/form_set";

export const Contact = () => {
  return (
    <div className="bg-zinc-100 min-h-[500px] w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 text-center my-10">
        Bu kurs siz uchun o'rganing izlaning
      </h1>
      <FormAbout></FormAbout>
    </div>
  );
};
