import { SimpleForm } from "@/components/form_demo";
import { Button } from "@/components/ui/button";
import DayIcon from "@/assets/icons/day_icon.png";
import DayIcob from "@/assets/icons/day_icon1.png";
import DayIcom from "@/assets/icons/day_icon2.png";
import { Faq } from "@/components/faq";

export const DemoCourse = () => {
  return (
    <div>
      <div className="bg-zinc-100  min-h-screen w-full flex flex-col justify-center items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 text-center  mb-10">
            Твой путь в IT начинается здесь
          </h1>
          <p className="text-2xl font-semibold my-10 sm:text-3xl">
            Получите бесплатный доступ к 5 урокам и узнаете какая
            IT-специальность вам подходит
          </p>
          <Button className="bg-red-600 rounded-xl text-xl py-6 px-12">
            Получить
          </Button>
        </div>
      </div>
      <div className="container flex flex-col gap-10 my-10 md:flex-row">
        <div className="flex basis-2/3 justify-center  items-start bg-zinc-100 flex-col rounded-3xl p-20">
          <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl leading-10">
            Попробуйте себя в IT
          </h1>
          <p className="text-2xl font-start my-5 md:text-2xl">
            Вышлем все материалы на почту
          </p>
        </div>
        <div className="flex basis-1/3 flex-col justify-center items-center bg-zinc-100 p-5 rounded-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl leading-10 ">
            Получить доступ к мини-курсам на 30 дней
          </h1>
          <SimpleForm></SimpleForm>
        </div>
      </div>
      <div className="bg-zinc-100   min-h-screen w-full flex flex-col justify-center items-center py-20">
        <div className="sm:container mx-auto  flex justify-center items-center text-center gap-20 sm:flex-row flex-col">
          <h1 className="text-3xl basis-1/3 font-bold tracking-tight text-black md:text-5xl leading-10 ">
            Как может выглядеть ваше расписание в Roboticslab school
          </h1>
          <div className="flex flex-col basis-2/3 gap-10 m-5">
            {/* hafta kunlarini to'ldiriliadi */}
            <div className="flex md:basis-2/3 items-center bg-white hover:scale-110 transition-transform hover:shadow-xl duration-300 p-6 rounded-3xl sm:flex-row flex-col gap-10">
              <div className="sm:basis-1/4">
                <img
                  src={DayIcon}
                  alt="day icon"
                  className="border-2 rounded-[30px] border-solid border-red-500 size-32"
                />
              </div>
              <div className="sm:basis-2/3 text-start">
                <h2 className="text-2xl font-semibold tracking-wide leading-10 text-wrap">
                  Понедельник I c 19:00 до 20:30-21:00
                </h2>
                <p className="text-lg text-start">
                  Стартуем с предзаписанных лекций, где вы погрузитесь в теорию,
                  имея возможность задать вопрос в моменте нашему ментору в
                  чате.
                </p>
              </div>
            </div>
            {/* 1 */}
            <div className="flex md:basis-2/3 items-center bg-white hover:scale-110 transition-transform hover:shadow-xl duration-300 p-6 rounded-3xl sm:flex-row flex-col gap-10">
              <div className="sm:basis-1/4">
                <img
                  src={DayIcob}
                  alt="day icon"
                  className="border-2 rounded-[30px] border-solid border-red-500 size-32"
                />
              </div>
              <div className="sm:basis-2/3 text-start">
                <h2 className="text-2xl font-semibold tracking-wide leading-10 text-wrap">
                  Понедельник I c 19:00 до 20:30-21:00
                </h2>
                <p className="text-lg text-start">
                  Стартуем с предзаписанных лекций, где вы погрузитесь в теорию,
                  имея возможность задать вопрос в моменте нашему ментору в
                  чате.
                </p>
              </div>
            </div>
            {/* s */}
            <div className="flex md:basis-2/3 items-center bg-white hover:scale-110 transition-transform hover:shadow-xl duration-300 p-6 rounded-3xl sm:flex-row flex-col gap-10">
              <div className="sm:basis-1/4">
                <img
                  src={DayIcon}
                  alt="day icon"
                  className="border-2 rounded-[30px] border-solid border-red-500 size-32"
                />
              </div>
              <div className="sm:basis-2/3 text-start">
                <h2 className="text-2xl font-semibold tracking-wide leading-10 text-wrap">
                  Понедельник I c 19:00 до 20:30-21:00
                </h2>
                <p className="text-lg text-start">
                  Стартуем с предзаписанных лекций, где вы погрузитесь в теорию,
                  имея возможность задать вопрос в моменте нашему ментору в
                  чате.
                </p>
              </div>
            </div>
            {/* 1 */}
            <div className="flex md:basis-2/3 items-center bg-white hover:scale-110 transition-transform hover:shadow-xl duration-300 p-6 rounded-3xl sm:flex-row flex-col gap-10">
              <div className="sm:basis-1/4">
                <img
                  src={DayIcob}
                  alt="day icon"
                  className="border-2 rounded-[30px] border-solid border-red-500 size-32"
                />
              </div>
              <div className="sm:basis-2/3 text-start">
                <h2 className="text-2xl font-semibold tracking-wide leading-10 text-wrap">
                  Понедельник I c 19:00 до 20:30-21:00
                </h2>
                <p className="text-lg text-start">
                  Стартуем с предзаписанных лекций, где вы погрузитесь в теорию,
                  имея возможность задать вопрос в моменте нашему ментору в
                  чате.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex md:basis-2/3 items-center bg-white hover:scale-110 transition-transform hover:shadow-xl duration-300 p-6 rounded-3xl sm:flex-row flex-col gap-10">
              <div className="sm:basis-1/4">
                <img
                  src={DayIcom}
                  alt="day icon"
                  className="border-2 rounded-[30px] border-solid border-red-500 size-32"
                />
              </div>
              <div className="sm:basis-2/3 text-start">
                <h2 className="text-2xl font-semibold tracking-wide leading-10 text-wrap">
                  Понедельник I c 19:00 до 20:30-21:00
                </h2>
                <p className="text-lg text-start">
                  Стартуем с предзаписанных лекций, где вы погрузитесь в теорию,
                  имея возможность задать вопрос в моменте нашему ментору в
                  чате.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Faq></Faq>
      </div>
    </div>
  );
};
