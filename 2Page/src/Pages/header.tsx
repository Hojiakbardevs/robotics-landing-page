import { FormAbout } from "@/components/form_set";

export const Heading = () => {
  return <div className="container mx-auto  py-28 sm:py-48 lg:py-10 text-center">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10">Начните головокружительную <br /> карьеру в ИТ</h1>
    <p className="text-2xl font-semibold my-10 sm:text-3xl">Наши выпускники успешно работают в Apple, Google, Facebook</p>
    <FormAbout></FormAbout>
  </div>;
};
