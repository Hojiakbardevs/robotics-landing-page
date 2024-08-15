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
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

// Define the form schema
const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
});

export const SimpleForm = ({ textColor = "text-black" }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      username: "",
      phone: "",
    },
  });

  const { toast } = useToast();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form submitted:", data);

    // Check if data already exists in localStorage
    const existingData = JSON.parse(localStorage.getItem("simpleFormData") || "[]");

    const isDuplicate = existingData.some(
      (entry: any) =>
        entry.email === data.email &&
        entry.username === data.username &&
        entry.phone === data.phone
    );

    if (!isDuplicate) {
      // Save to localStorage
      localStorage.setItem("simpleFormData", JSON.stringify([...existingData, data]));

      // Show toast notification
      toast({
        title: "Form submitted successfully",
        description: "Your data has been saved.",
        action: <ToastAction altText="Try again">OK</ToastAction>,
      });
    } else {
      toast({
        title: "Duplicate entry",
        description: "This data already exists.",
        action: <ToastAction altText="Try again">OK</ToastAction>,
      });
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel
                  className={`text-start ml-1 text-md hover:text-red-600 ${textColor}`}>
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} className="h-12 font-medium text-md" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Username Field */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel
                  className={`text-start ml-1 text-md hover:text-red-600 ${textColor}`}>
                  Username
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} className="h-12 font-medium text-md" />
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
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} className="h-12 font-medium text-md" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="bg-red-600 h-12 w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
