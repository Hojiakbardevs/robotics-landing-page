import Member1 from "@/assets/members/1.png";
import Member2 from "@/assets/members/2.png";
import Member3 from "@/assets/members/3.png";
import Member4 from "@/assets/members/4.png";
import Member5 from "@/assets/members/5.png";
import Member6 from "@/assets/members/6.png";
import Member7 from "@/assets/members/7.png";
import Member8 from "@/assets/members/8.png";
import Member9 from "@/assets/members/9.png";
import Member10 from "@/assets/members/10.png";
import Member11 from "@/assets/members/11.png";
import Member12 from "@/assets/members/12.png";
import Member13 from "@/assets/members/13.png";
import Member14 from "@/assets/members/14.png";
import Member15 from "@/assets/members/15.png";
import Member16 from "@/assets/members/16.png";
import Member17 from "@/assets/members/17.png";
import Member18 from "@/assets/members/18.png";
import Member19 from "@/assets/members/19.png";
import Member20 from "@/assets/members/20.png";
import Member21 from "@/assets/members/21.png";
import Member22 from "@/assets/members/22.png";
import Member23 from "@/assets/members/23.png";
import Member24 from "@/assets/members/24.png";
import Member25 from "@/assets/members/25.png";
import Member26 from "@/assets/members/26.png";
import Member27 from "@/assets/members/27.png";
import Member28 from "@/assets/members/28.png";
import Member29 from "@/assets/members/29.png";
import Member30 from "@/assets/members/30.png";

const membersImages = [
  Member1,
  Member2,
  Member3,
  Member4,
  Member5,
  Member6,
  Member7,
  Member8,
  Member9,
  Member10,
  Member11,
  Member12,
  Member13,
  Member14,
  Member15,
  Member16,
  Member17,
  Member18,
  Member19,
  Member20,
  Member21,
  Member22,
  Member23,
  Member24,
  Member25,
  Member26,
  Member27,
  Member28,
  Member29,
  Member30,
];

export const Members = () => {
  return (
    <div className="container text-center">
      <p className="text-lg font-semibold mb-4 mt-20 sm:text-3xl">
        Реальные продукты как результат обучения
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl text-wrap leading-10">
        Создание собственного приложения с пользователями - «трамплин» к
        гарантированному трудоустройству
      </h1>
      <div className="container-xl sm:container bg-gray-100 p-10 flex flex-wrap justify-center gap-10 my-16 rounded-3xl">
        {membersImages.map((image, index)=>(
            <img src={image} key={index} alt={`Members ${index + 1}}`} className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl  object-cover hover:scale-110 transition-transform" />
        ))}
      </div>
    </div>
  );
};
