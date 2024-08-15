import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

// Define the form schema
const FormSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
});

export const FormAbout = ({ textColor = "text-black" }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      phone: "",
    },
  });

  const { toast } = useToast();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form submitted:", data); // Debugging

    // Check if data already exists in localStorage
    const existingData = JSON.parse(localStorage.getItem("formData") || "[]");

    const isDuplicate = existingData.some(
      (entry: any) =>
        entry.username === data.username && entry.phone === data.phone
    );

    if (!isDuplicate) {
      // Save to localStorage
      localStorage.setItem("formData", JSON.stringify([...existingData, data]));

      // Show toast notification
      toast({
        title: "Hozir siz ro'yhatdan o'tdingiz",
        description: "Friday, February 10, 2023 at 5:00 PM",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } else {
      toast({
        title: "Duplicate entry",
        description: "This data already exists.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }

  return (
    <div className="container-xl sm:container">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex gap-4 items-end mt-10 flex-col lg:flex-row lg:items-end sm:p-2">
          <div className="w-full flex gap-4 items-center flex-col lg:flex-row lg:items-center">
            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel
                    className={`text-start ml-1 text-md hover:text-red-600 ${textColor}`}>
                    Ism familiya
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Ismingiz" {...field} className="h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel
                    className={`text-start ml-1 text-md hover:text-red-600 ${textColor}`}>
                    Telefon raqamingiz
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Telefon raqamingiz"
                      {...field}
                      className="h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Select>
            <SelectTrigger className="w-full h-12 lg:w-[280px]">
              <SelectValue placeholder="Siz qaysi kursni o'qimoqchisiz" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Yo'nalishlar</SelectLabel>
                <SelectItem value="dizayn">Dizayn</SelectItem>
                <SelectItem value="cpp">C++</SelectItem>
                <SelectItem value="web">Web dasturlash</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="ai">Suniy intelekt</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-red-600 h-12 sm:w-fit w-full"
            onClick={form.handleSubmit(onSubmit)}>
            Получить консультацию
          </Button>
        </form>
      </Form>
    </div>
  );
};
