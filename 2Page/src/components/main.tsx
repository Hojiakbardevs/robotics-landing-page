import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
}

const cardDescription = [
  {
    digit: "2000",
    text: "Студентов получили IT-профессию",
    active: true,
  },
  {
    digit: "1000",
    text: "Членов сообщества",
    active: false,
  },
  {
    digit: "700",
    text: "Запущенных мобильных и веб-приложений",
    active: true,
  },
  {
    digit: "35",
    text: "Менторов в лице действующих IT-специалистов",
    active: false,
  },
  {
    digit: "800",
    text: "Часов бесплатного видео-контента ",
    active: false,
  },
];

const CountUp: React.FC<CountUpProps> = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Duration of count-up effect
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return <div>{count}</div>;
};

export const Mainhead = () => {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={observerRef}
      className="container flex flex-wrap gap-12 justify-center my-10"
    >
      {cardDescription.map((card, index) => (
        <Card
          key={index}
          className={`w-[310px] h-[210px] rounded-3xl text-white p-8 hover:scale-110 transition-transform ${
            card.active ? "bg-red-600" : "bg-gray-100 text-black"
          }`}
        >
          <CardHeader className="p-0 flex flex-col gap-2">
            <CardTitle className="text-5xl font-semibold">
              {visible ? <CountUp end={parseInt(card.digit.replace(/\D/g, ""))} /> : "0"}
            </CardTitle>
            <hr className="border" />
            <CardDescription
              className={`text-lg font-semibold ${
                card.active ? "text-white" : "text-slate-950"
              }`}
            >
              {card.text}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};
