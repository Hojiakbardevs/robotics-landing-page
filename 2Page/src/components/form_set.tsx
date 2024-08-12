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
import { toast } from "@/components/ui/use-toast";

// Define the form schema
const FormSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
});

export const FormAbout = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      phone: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="container">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex gap-4 items-end mt-10 flex-col lg:flex-row lg:items-end">
          <div className="w-full flex gap-4 items-center flex-col lg:flex-row lg:items-center">
            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel className="text-start ml-1 text-md hover:text-red-600">Ism familiya</FormLabel>
                  <FormControl>
                    <Input placeholder="Ismingiz" {...field}  className="h-12" />
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
                  <FormLabel  className="text-start ml-1 text-md hover:text-red-600">Telefon raqamingiz</FormLabel>
                  <FormControl>
                    <Input placeholder="Telefon raqamingiz" {...field}  className="h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="bg-red-600 h-12 ">
            Получить консультацию
          </Button>
        </form>
      </Form>
    </div>
  );
};
