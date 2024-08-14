import { Button } from "@/components/ui/button";
import MasterClasImg from "@/assets/img/masterclass.png";
import { FormAbout } from "@/components/form_set";

export const MasterClass = () => {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 text-center mt-20 mb-10">
        Следующий мастеркласс
      </h1>
      <div className="container bg-gray-100 p-16 flex flex-wrap justify-between items-end gap-20  rounded-3xl lg:w-lg hover:scale-110 transition-transform">
        <img src={MasterClasImg} alt="book course" className="w-full sm:w-28 h-auto " />
        <div className="grow">
          <p className="text-2xl sm:text-3xl font-semibold mb-4">Пробный урок по Android-разработке</p>
          <p className="text-2xl sm:text-3xl font-semibold mb-4">Данияр Амангельды</p>
          <p className="text-lg font-normal mb-4">15 августа 2024 г.</p>
        </div>
        <Button className="bg-red-600 w-60 ">Подробнее</Button>
      </div>
      <div className="container bg-gray-100 p-16 flex flex-wrap justify-between items-end gap-20  my-10 rounded-3xl lg:w-lg hover:scale-110 transition-transform">
        <img src={MasterClasImg} alt="book course" className="w-full sm:w-28 h-auto " />
        <div className="grow">
          <p className="text-2xl sm:text-3xl font-semibold mb-4">Пробный урок по Android-разработке</p>
          <p className="text-2xl sm:text-3xl font-semibold mb-4">Данияр Амангельды</p>
          <p className="text-lg font-normal mb-4">15 августа 2024 г.</p>
        </div>
        <Button className="bg-red-600 w-60 ">Подробнее</Button>
      </div>
      <div className="sm:container  rounded-3xl bg-black p-10 text-center hover:scale-110 transition-transform">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-10 text-center my-10">Получите бесплатную консультацию</h1>
        <FormAbout textColor="text-white"></FormAbout>
        <p className="text-lg font-normal mb-4 text-white opacity-70 mt-3">Нажимая на кнопку, я соглашаюсь с политикой обработки персональных данных</p>
      </div>
    </div>

  );
};
