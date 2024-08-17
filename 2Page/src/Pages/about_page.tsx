import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Import the Skeleton component
import HeadImg1 from "@/assets/about/webp_folder/head1-min.webp";
import HeadImg2 from "@/assets/about/webp_folder/head2-min.webp";
import HeadImg3 from "@/assets/about/webp_folder/head3-min.webp";
import HeadImg4 from "@/assets/about/webp_folder/head4-min.webp";
import HeadImg5 from "@/assets/about/webp_folder/head5-min.webp";
import HeadImg6 from "@/assets/about/webp_folder/head6-min.webp";
import HeadImg7 from "@/assets/about/webp_folder/head7-min.webp";
import HeadImg8 from "@/assets/about/webp_folder/head8-min.webp";
import HeadImg9 from "@/assets/about/webp_folder/head9-min.webp";
import { FormAbout } from "@/components/form_set";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import Command1 from "@/assets/about/webp_folder/command1-min.webp";
import Command2 from "@/assets/about/webp_folder/command2-min.webp";
import Command3 from "@/assets/about/webp_folder/command3-min.webp";
import Command4 from "@/assets/about/webp_folder/command4-min.webp";
import Command5 from "@/assets/about/webp_folder/command5-min.webp";
import Command6 from "@/assets/about/webp_folder/command6-min.webp";
import Command7 from "@/assets/about/webp_folder/command7-min.webp";
import Command8 from "@/assets/about/webp_folder/command8-min.webp";

import Sostav1 from "@/assets/about/webp_folder/sostav1-min.webp";
import Sostav2 from "@/assets/about/webp_folder/sostav2-min.webp";
import Sostav3 from "@/assets/about/webp_folder/sostav3-min.webp";
import Sostav4 from "@/assets/about/webp_folder/sostav4-min.webp";
import Sostav5 from "@/assets/about/webp_folder/sostav5-min.webp";
import Sostav6 from "@/assets/about/webp_folder/sostav6-min.webp";
import Sostav7 from "@/assets/about/webp_folder/sostav7-min.webp";
import Sostav8 from "@/assets/about/webp_folder/sostav8-min.webp";
import Sostav9 from "@/assets/about/webp_folder/sostav9-min.webp";
import Sostav10 from "@/assets/about/webp_folder/sostav10-min.webp";
import Sostav11 from "@/assets/about/webp_folder/sostav11-min.webp";
import Sostav12 from "@/assets/about/webp_folder/sostav12-min.webp";
import { Button } from "@/components/ui/button";

import Developer1 from "@/assets/about/webp_folder/developer1-min.webp";
import Developer2 from "@/assets/about/webp_folder/developer2-min.webp";
import Developer3 from "@/assets/about/webp_folder/developer3-min.webp";
import Developer4 from "@/assets/about/webp_folder/developer4-min.webp";
import Developer5 from "@/assets/about/webp_folder/developer5-min.webp";
import Developer6 from "@/assets/about/webp_folder/developer6-min.webp";
import Developer7 from "@/assets/about/webp_folder/developer7-min.webp";
import Developer8 from "@/assets/about/webp_folder/developer8-min.webp";
import Developer9 from "@/assets/about/webp_folder/developer9-min.webp";
import Developer10 from "@/assets/about/webp_folder/developer10-min.webp";
import Developer11 from "@/assets/about/webp_folder/developer11-min.webp";
import Developer12 from "@/assets/about/webp_folder/developer12-min.webp";
import Developer13 from "@/assets/about/webp_folder/developer13-min.webp";
import Developer14 from "@/assets/about/webp_folder/developer14-min.webp";
import Developer15 from "@/assets/about/webp_folder/developer15-min.webp";

export const AboutPage = () => {
  const [loading, setLoading] = useState(true);
  const images = [
    HeadImg1,
    HeadImg2,
    HeadImg3,
    HeadImg4,
    HeadImg5,
    HeadImg6,
    HeadImg7,
    HeadImg8,
    HeadImg9,
  ];
  const DeveloperImages = [
    Developer1,
    Developer2,
    Developer3,
    Developer4,
    Developer5,
    Developer6,
    Developer7,
    Developer8,
    Developer9,
    Developer10,
    Developer11,
    Developer12,
    Developer13,
    Developer14,
    Developer15,
  ];
  const commands = [
    {
      id: 1,
      title: "Арман Сулейменов",
      description: "Основатель и CEO nFactorial School",
      image: Command1,
    },
    {
      id: 2,
      title: "Айым Сулейменова",
      description: "Коммерческий директор nFactorial School",
      image: Command2,
    },
    {
      id: 3,
      title: "Улжан Аменова",
      description: "Kоординатор программ в nFactorial School",
      image: Command3,
    },
    {
      id: 4,
      title: "Ержасын Айт",
      description: "Chief of Staff nFactorial School",
      image: Command4,
    },
    {
      id: 5,
      title: "Амина Абраимова",
      description: "Head of Marketing nFactorial School",
      image: Command5,
    },
    {
      id: 6,
      title: "Сағыныш Жукина",
      description: "SMM-специалист nFactorial School",
      image: Command6,
    },
    {
      id: 7,
      title: "Мариям Токанова",
      description: "Программный менеджер в nFactorial School",
      image: Command7,
    },
    {
      id: 8,
      title: "Данияр-Керей Кенжетай",
      description: "Руководитель отдела продаж nFactorial School",
      image: Command8,
    },
  ];
  const sostavs = [
    {
      id: 1,
      title: "Айдар Нугманов",
      description:
        "Автор программы и главный лектор nFactorial iOS и главный ментор nFactorial Incubator 2022",
      image: Sostav1,
    },
    {
      id: 2,
      title: "Самат Калшабеков",
      description:
        "Автор программы nFactorial Frontend и Lead front-end разработчик в БЦК.",
      image: Sostav2,
    },
    {
      id: 3,
      title: "Айдар Нугманов",
      description:
        "Автор программы и главный лектор nFactorial iOS и главный ментор nFactorial Incubator 2022",
      image: Sostav3,
    },
    {
      id: 4,
      title: "Самат Калшабеков",
      description:
        "Автор программы nFactorial Frontend и Lead front-end разработчик в БЦК.",
      image: Sostav4,
    },
    {
      id: 5,
      title: "Айдар Нугманов",
      description:
        "Автор программы и главный лектор nFactorial iOS и главный ментор nFactorial Incubator 2022",
      image: Sostav5,
    },
    {
      id: 6,
      title: "Самат Калшабеков",
      description:
        "Автор программы nFactorial Frontend и Lead front-end разработчик в БЦК.",
      image: Sostav6,
    },
    {
      id: 7,
      title: "Айдар Нугманов",
      description:
        "Автор программы и главный лектор nFactorial iOS и главный ментор nFactorial Incubator 2022",
      image: Sostav7,
    },
    {
      id: 8,
      title: "Самат Калшабеков",
      description:
        "Автор программы nFactorial Frontend и Lead front-end разработчик в БЦК.",
      image: Sostav8,
    },
    {
      id: 9,
      title: "Айдар Нугманов",
      description:
        "Автор программы и главный лектор nFactorial iOS и главный ментор nFactorial Incubator 2022",
      image: Sostav9,
    },
    {
      id: 10,
      title: "Самат Калшабеков",
      description:
        "Автор программы nFactorial Frontend и Lead front-end разработчик в БЦК.",
      image: Sostav10,
    },
    {
      id: 11,
      title: "Айдар Нугманов",
      description:
        "Автор программы и главный лектор nFactorial iOS и главный ментор nFactorial Incubator 2022",
      image: Sostav11,
    },
    {
      id: 12,
      title: "Самат Калшабеков",
      description:
        "Автор программы nFactorial Frontend и Lead front-end разработчик в БЦК.",
      image: Sostav12,
    },
  ];
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="bg-zinc-100 min-h-[500px] w-full flex flex-col justify-center items-center">
        <div className="container">
          {loading ? (
            <div>
              <Skeleton className="h-16 w-full my-10 bg-gray-200" />
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[425px] w-full rounded-xl bg-gray-200 my-10" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full bg-gray-200" />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 text-center my-10">
                Команда лучших и самых заботливых наставников
              </h1>
              <div className="bg-[#ffcf25] p-6 pt-10 flex rounded-[35px] flex-wrap justify-center items-center gap-4 max-w-[1200px] mx-auto mb-10">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={"imageperson ${index + 1}"}
                    className="rounded-full object-cover w-48 h-48 hover:scale-110 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="container">
        {loading ? (
          <Skeleton className="h-16 w-full my-10 bg-gray-200"></Skeleton>
        ) : (
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 text-center my-10">
            Команда
          </h1>
        )}
        <div className="container flex flex-wrap gap-14 justify-center items-center my-10">
          {commands.map((command) => (
            <Card
              key={command.id}
              className="w-[300px] bg-gray-100 border-none flex flex-col justify-center hover:scale-110 transition-transform overflow-hidden">
              <CardHeader className="p-0">
                <img
                  src={command.image}
                  alt={`head img ${command.id + 1}`}
                  className="w-full h-[280px] object-cover "
                />
              </CardHeader>
              <CardContent>
                <h1 className="text-xl  font-semibold mt-4 leading-6 ">
                  {command.title}
                </h1>
                <p className="text-lg leading-6 mt-2">{command.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 text-center my-16">
          Преподавательский состав
        </h1>
        <div className="container flex flex-wrap gap-14 justify-center items-center my-10">
          {sostavs.map((command) => (
            <Card
              key={command.id}
              className="w-[300px] bg-gray-100 border-none flex flex-col justify-center hover:scale-110 transition-transform overflow-hidden">
              <CardHeader className="p-0">
                <img
                  src={command.image}
                  alt={`head img ${command.id + 1}`}
                  className="w-full h-[300px] object-cover "
                />
              </CardHeader>
              <CardContent>
                <h1 className="text-xl  font-semibold mt-4 leading-6 ">
                  {command.title}
                </h1>
                <p className="text-lg leading-6 mt-2">{command.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="container-xl sm:container bg-gray-100 p-10 flex flex-wrap flex-col justify-center gap-10 my-16 rounded-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl leading-10 text-center mt-10">
            IT-сообщество
          </h1>
          <p className="text-2xl font-semibold mb-4 text-center">
            Присоединяйтесь к нашему сообществу
          </p>
          <Button className="bg-red-600 sm:w-60 h-16 text-xl mx-auto">
            <a
              href="https://t.me/roboticslab_school"
              target="_blank"
              rel="noopener noreferrer">
              Перейти в Telegram
            </a>
          </Button>
          <div className="container flex flex-wrap gap-3 max-w-[920px] justify-center items-center my-10">
          {DeveloperImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={"imageperson ${index + 1}"}
                    className="rounded-full object-cover size-24 hover:scale-110 transition-transform duration-300"
                  />
                ))}
          </div>
        </div>

        <div className="sm:container container-2xl  rounded-3xl bg-black p-10 text-center hover:scale-110 transition-transform my-20">
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
    </>
  );
};
