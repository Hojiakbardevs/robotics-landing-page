import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import CaruselImg1 from "@/assets/img/carusel/image1.png";
import CaruselImg2 from "@/assets/img/carusel/image2.png";
import CaruselImg3 from "@/assets/img/carusel/image3.png";
import CaruselImg4 from "@/assets/img/carusel/image4.png";
import CaruselImg5 from "@/assets/img/carusel/image5.png";

export const ImageSlider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2400, stopOnInteraction: true })
  );
  const images = [
    CaruselImg1,
    CaruselImg2,
    CaruselImg3,
    CaruselImg4,
    CaruselImg5,
  ];
  return (
    <div className="container rounded-lg mb-10">
      <Carousel plugins={[plugin.current]} className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="h-48 w-full p-0 md:h-3/4">
                <CardContent className="flex h-96 items-center justify-center scroll-smooth md:scroll-auto p-0 rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`Carousel image ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
