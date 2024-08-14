import { Button } from "@/components/ui/button";

export const DemoCourse = () => {
  return <div>
    <div className="bg-zinc-100  min-h-screen w-full flex flex-col justify-center items-center">
       <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-7xl text-wrap leading-10">Твой путь в IT начинается здесь</h1>
        <p className="text-2xl font-semibold my-10 sm:text-3xl">Получите бесплатный доступ к 5 урокам и узнаете какая IT-специальность вам подходит</p>
        <Button className="bg-red-600 rounded-xl text-xl py-6 px-12">Получить</Button>
       </div>
    </div>
    <div className="container">
        <div className="columns-1"></div>
    </div>
  </div>;
};
