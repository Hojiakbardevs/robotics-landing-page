import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react"; // Import both Plus and Minus icons
import { useState } from "react";

export const Faq = () => {
  // State now holds a string or undefined, no null is allowed
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <div className="container">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 text-center my-10">
        Faq
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-zinc-100 rounded-3xl overflow-hidden p-5"
        value={openItem}
        onValueChange={(value) => setOpenItem(value)} // Now `undefined` instead of `null`
      >
        <AccordionItem value="item-1" className="bg-zinc-100">
          <AccordionTrigger className="w-full text-lg font-semibold tracking-tight text-gray-900 sm:text-2xl leading-10 text-start m-4 cursor-pointer flex items-center gap-4">
            {openItem === "item-1" ? <Minus /> : <Plus />} Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="w-full text-lg font-medium tracking-tight text-gray-500 sm:text-2xl leading-10 text-start m-4 cursor-pointer flex items-center gap-4">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="w-full text-lg font-semibold tracking-tight text-gray-900 sm:text-2xl leading-10 text-start m-4 cursor-pointer flex items-center gap-4">
            {openItem === "item-2" ? <Minus /> : <Plus />} Is it styled?
          </AccordionTrigger>
          <AccordionContent className="w-full text-lg font-medium tracking-tight text-gray-500 sm:text-2xl leading-10 text-start m-4 cursor-pointer flex items-center gap-4">
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="w-full text-lg font-semibold tracking-tight text-gray-900 sm:text-2xl leading-10 text-start m-4 cursor-pointer flex items-center gap-4">
            {openItem === "item-3" ? <Minus /> : <Plus />} Is it animated?
          </AccordionTrigger>
          <AccordionContent className="w-full text-lg font-medium tracking-tight text-gray-500 sm:text-2xl leading-10 text-start m-4 cursor-pointer flex items-center gap-4">
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
