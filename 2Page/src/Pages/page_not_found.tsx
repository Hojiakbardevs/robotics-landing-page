import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();
  const handleGoback = () => {
    navigate(-1);
  };
  return (
    <div className="bg-zinc-100 min-h-[600px] w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-bold tracking-tight text-gray-900 sm:text-[250px] leading-10 text-center my-10">
        404
      </h1>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-10 text-center my-10 sm:my-32 mx-10">
        Упс что-то пошло не так, может вернетесь на главную страницу?
      </h1>

      <Button
        className="bg-red-600 rounded-xl text-xl py-6 px-12"
        onClick={handleGoback}>
        Back page
      </Button>
    </div>
  );
};
