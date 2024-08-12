import { FormAbout } from "@/components/form_set";

export const Heading = () => {
  return <div className="container mx-auto  py-32 sm:py-48 lg:py-10 text-center">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-4">Начните головокружительную <br /> карьеру в ИТ</h1>
    <p className="text-2xl font-semibold my-4">Наши выпускники успешно работают в Apple, Google, Facebook</p>
    <FormAbout></FormAbout>
  </div>;
};
