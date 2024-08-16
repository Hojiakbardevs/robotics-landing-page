import { FormAbout } from "@/components/form_set";
import { ImageSlider } from "@/components/image_slider";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export const Heading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="container mx-auto  py-10 text-center">
          <Skeleton className="h-48 w-full mb-10 bg-gray-200"></Skeleton>
          <Skeleton className="h-20 w-full rounded-xl bg-gray-200 my-4"></Skeleton>
          <Skeleton className="h-16 w-full bg-gray-200"></Skeleton>
          <div className="sm:container container-xl flex gap-10 my-10 justify-center items-center sm:flex-row">
            <Skeleton className="h-20 w-[300px]  bg-gray-200"></Skeleton>
            <Skeleton className="h-20 w-[300px]  bg-gray-200"></Skeleton>
            <Skeleton className="h-20 w-[300px]  bg-gray-200"></Skeleton>
          </div>
        </div>
      ) : (
        <div className="container mx-auto  py-10 text-center">
          <ImageSlider></ImageSlider>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl text-wrap leading-10">
            Начните головокружительную <br /> карьеру в ИТ
          </h1>
          <p className="text-2xl font-semibold my-10 sm:text-3xl">
            Наши выпускники успешно работают в Apple, Google, Facebook
          </p>
          <FormAbout></FormAbout>
        </div>
      )}
    </div>
  );
};
