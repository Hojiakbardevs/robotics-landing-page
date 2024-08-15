import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export const Courses = () => {
  const courses = [
    {
      id: 1,
      category: "Все",
      title: "Программирование для начинающих",
      description: "nFactorial Start",
      startDate: "12 августа 2024 г.",
      duration: "3 месяца",
      price: "от 490,000 ₸",
      monthlyPrice: "20,466 ₸",
      timeLeft: "0:0:24",
    },
    {
      id: 2,
      category: "Для детей",
      title: "Python для детей",
      description: "Программирование с нуля",
      startDate: "15 сентября 2024 г.",
      duration: "2 месяца",
      price: "от 300,000 ₸",
      monthlyPrice: "15,000 ₸",
      timeLeft: "0:10:00",
    },
    {
      id: 3,
      category: "Мини-курсы",
      title: "Основы алгоритмов",
      description: "Алгоритмы и структуры данных",
      startDate: "1 октября 2024 г.",
      duration: "1 месяц",
      price: "от 200,000 ₸",
      monthlyPrice: "20,000 ₸",
      timeLeft: "0:5:00",
    },
    {
      id: 4,
      category: "Начать прямо сейчас",
      title: "Английский язык",
      description: "Интенсивный курс",
      startDate: "Бесконечный доступ",
      duration: "6 месяцев",
      price: "от 600,000 ₸",
      monthlyPrice: "25,000 ₸",
      timeLeft: "0:15:00",
    },
    {
      id: 5,
      category: "Live-курсы",
      title: "React и Tailwind CSS",
      description: "Современная веб-разработка",
      startDate: "20 августа 2024 г.",
      duration: "4 месяца",
      price: "от 700,000 ₸",
      monthlyPrice: "30,000 ₸",
      timeLeft: "0:20:00",
    },
    {
      id: 6,
      category: "Профессии",
      title: "Data Science",
      description: "Анализ данных",
      startDate: "1 ноября 2024 г.",
      duration: "5 месяцев",
      price: "от 800,000 ₸",
      monthlyPrice: "35,000 ₸",
      timeLeft: "0:25:00",
    },
  ];

  const categories = [
    "Все",
    "Для детей",
    "Мини-курсы",
    "Начать прямо сейчас",
    "Live-курсы",
    "Профессии",
  ];

    const filterCoursesByCategory = (category: string) => {
      if (category === "Все") {
        return courses;
      }
      return courses.filter((course) => course.category === category);
    };

  return (
    <div className="container">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 text-center mt-20 mb-10">
        Курсы и программы
      </h1>

      <TabGroup defaultIndex={0}>
        <TabList className={`flex justify-center gap-4 flex-wrap my-10`}>
          {categories.map((category, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                `bg-black text-white p-2 px-4 rounded-xl font-medium ${
                  selected ? "bg-red-600" : ""
                }`
              }
            >
              {category}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {categories.map((category, index) => (
            <TabPanel key={index} className={`flex flex-wrap justify-center gap-8 my-10`}>
              {filterCoursesByCategory(category).map((course) => (
                <Card key={course.id} className="w-[320px] bg-gray-100 border-none flex flex-col justify-between hover:scale-110 transition-transform">
                  <CardHeader>
                    <div className="text-sm text-gray-600 font-medium">
                      {course.description}
                    </div>
                    <h1 className="text-2xl font-semibold text-black">
                      {course.title}
                    </h1>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 bg-white w-fit p-1 px-2 rounded-2xl text-md">
                      Начало: {course.startDate}
                    </div>
                    <div className="mb-4 bg-white w-fit p-1 px-2 rounded-2xl text-md">
                      {course.duration}
                    </div>
                    <div className="flex justify-between items-end shadow-lg bg-white rounded-lg p-2 py-3">
                      <div className="flex flex-col font-bold text-md">
                        <span>{course.price}</span>
                        <span>
                          <span className="text-red-600">
                            {course.monthlyPrice}
                          </span>{" "}
                          в месяц
                        </span>
                      </div>
                      <span className="bg-red-600 text-white font-bold rounded-xl px-2">
                        {course.timeLeft}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center gap-4 flex-col">
                    <Button type="button" className="w-full bg-red-600">
                      Купить
                    </Button>
                    <Button type="button" className="w-full bg-black">
                      Подробнее
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};
