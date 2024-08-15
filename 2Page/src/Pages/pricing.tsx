import { FormAbout } from "@/components/form_set";
import { Courses } from "../components/courses";

export const Pricing = () => {
  return (
    <div className=" min-h-[500px] w-full flex flex-col justify-center items-center">
      <div className="container">
        <Courses></Courses>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-10 text-center my-10">
          Начните карьеру вместе с Roboticslab school
        </h2>
        <p className="text-2xl font-medium mb-4 text-start px-40 opacity-85">
          Каждый из наших курсов предлагает три способа обучения: мини-курс,
          курс который можно начать автономно и курс с ментором, удовлетворяя
          различные образовательные потребности студентов.
        </p>
        <p className="text-2xl font-medium mb-4 text-start px-40 opacity-85">
          Мини-курс предлагает возможность познакомиться с новой темой через
          пять качественных уроков. Курс который можно начать прямо сейчас дает
          студентам шанс освоить новую профессию в интенсивном формате
          самостоятельного обучения. Курс с ментором предлагает глубокое
          погружение в новую профессию в компании выдающегося сообщества и при
          поддержке ментора, что обеспечивает наиболее обогащенный обучающий
          опыт.
        </p>

        <div className="sm:container  rounded-3xl bg-black p-10 text-center hover:scale-110 transition-transform my-20">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-10 text-center my-10">
            Получите бесплатную консультацию
          </h1>
          <FormAbout textColor="text-white"></FormAbout>
          <p className="text-lg font-normal mb-4 text-white opacity-70 mt-3">
            Нажимая на кнопку, я соглашаюсь с политикой обработки персональных
            данных
          </p>
        </div>
      </div>
    </div>
  );
};
