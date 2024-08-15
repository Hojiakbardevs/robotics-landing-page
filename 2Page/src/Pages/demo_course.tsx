import { SimpleForm } from "@/components/form_demo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    </div>
  );
};
