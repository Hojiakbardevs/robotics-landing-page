import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Import the Skeleton component

export const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 1000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-zinc-100 min-h-[500px] w-full flex flex-col justify-center items-center">
      <div className="container">
        {loading ? (
          <div>
            <Skeleton className="h-16 w-full mb-10 bg-gray-200" /> // Skeleton
            for the heading
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-200" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-gray-200" />
                <Skeleton className="h-4 w-[200px] bg-gray-200" />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 text-center mb-10">
              Команда лучших и самых заботливых наставников
            </h1>
            <p className="text-2xl font-medium mb-4 text-start px-40 opacity-85">
              bladkfsdfkds
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
