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
import CaruselImg5 from "@/assets/img/carusel/image5.png"; // Import the Skeleton component

export const ImageSlider = () => {
  const images = [
    CaruselImg1,
    CaruselImg2,
    CaruselImg3,
    CaruselImg4,
    CaruselImg5,
  ];

  return (
    <div className="container mb-10">
      <Carousel className="w-full shadow-lg">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="w-full p-0 md:h-3/4">
                <CardContent className="flex h-40 sm:h-[540px] items-center justify-center p-0 overflow-hidden">
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
