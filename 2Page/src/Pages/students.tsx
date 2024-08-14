import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Video1 from "@/assets/video/1.mp4";
import Video2 from "@/assets/video/2.mp4";
import Video3 from "@/assets/video/3.mp4";
import Video4 from "@/assets/video/4.mp4";
import Video5 from "@/assets/video/5.mp4";
import Video6 from "@/assets/video/6.mp4";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const videoData = [
  { src: Video1, text: "Roboticslab" },
  { src: Video2, text: "AI Club" },
  { src: Video3, text: "Web Development" },
  { src: Video4, text: "Mobile Development" },
  { src: Video5, text: "Data Science" },
  { src: Video6, text: "Cybersecurity" },
];

export const Students = () => {
  const [activeIndex, setactiveIndex] = useState(0);
  const [carouselApi, setcarouselApi] = useState<CarouselApi | null>(null);
  const handleIndicatorClick = (index: number) => {
    setactiveIndex(index);
    carouselApi?.scrollTo(index);
  };
  return (
    <div className="container my-10">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 text-center mt-20 mb-10">
        Отзывы студентов
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        setApi={setcarouselApi}
        className="w-full max-w-[270px] sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto touch-auto scroll-m-0 overscroll-auto focus:overflow-scroll">
        <CarouselContent>
          {videoData.map((video, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 scroll-m-0">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center scroll-smooth md:scroll-auto p-0 rounded-lg">
                    <video
                      src={video.src}
                      controls
                      className="h-full w-full object-cover"
                      autoPlay
                      loop
                      muted></video>
                  </CardContent>
                  <CardDescription>
                    <div className="text-lg font-medium text-black">
                      {video.text}
                    </div>
                  </CardDescription>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center mt-4">
        {videoData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === activeIndex ? "bg-red-600" : "bg-red-300"
            }`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-4 mt-10">
        <Button className="rounded-lg">Подробнее</Button>
        <Button className="bg-red-600 rounded-lg">Записаться на обучение</Button>
      </div>
    </div>
  );
};
