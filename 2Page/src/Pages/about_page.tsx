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
              <Skeleton className="h-16 w-full mb-10 bg-gray-200" />
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-200" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px] bg-gray-200" />
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
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 text-center my-10">
          Команда
        </h1>
        <div className="sm:container container-2xl  rounded-3xl bg-black p-10 text-center hover:scale-110 transition-transform my-16">
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
