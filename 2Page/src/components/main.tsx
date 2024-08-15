import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const cardDescription = [
  {
    digit: "2000+",
    text: "Студентов получили IT-профессию",
    active:true
  },
  {
    digit: "100K+",
    text: "Членов сообщества",
    active:false
  },
  {
    digit: "700+",
    text: "Запущенных мобильных и веб-приложений",
    active:true
  },
  {
    digit: "35+",
    text: "Менторов в лице действующих IT-специалистов",
    active:false
  },
  {
    digit: "800+",
    text: "Часов бесплатного видео-контента ",
    active:false
  },
];

export const Mainhead = () => {
  return <div className="container flex flex-wrap gap-12 justify-center my-10">
     {cardDescription.map((card, index) => (
        <Card
          key={index}
          className={`w-[310px] h-[210px] rounded-3xl text-white p-8 hover:scale-110 transition-transform ${card.active ? "bg-red-600" : "bg-gray-100 text-black"}`}
        >
          <CardHeader className="p-0 flex flex-col gap-2">
            <CardTitle className="text-5xl font-semibold">{card.digit}</CardTitle>
            <hr className="border"/>
            <CardDescription className={`text-lg font-semibold ${card.active ? "text-white" : "text-slate-950"}`}>{card.text}</CardDescription>
          </CardHeader>
        </Card>
      ))}
  </div>;
};
