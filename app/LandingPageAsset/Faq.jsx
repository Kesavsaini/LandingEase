import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqArray=[
    { question: "Do I need any coding skills to use Landing Ease?", answer: "No, Landing Ease is designed for users with no coding experience. You can create a professional landing page using our simple interface and customization options." },
    { question: "How do I publish my landing page?", answer: "After customizing your page, click the 'Publish' button. Your page will be deployed instantly on a unique custom path." },
    { question: "Can I change the theme of my landing page after publishing?", answer: "Yes, you can update the theme and make changes to your page anytime. Simply go back to the customization section, make your updates, an save changes" },

]

const Faq = () => {
  return (
    <div className="w-full min-h-96 flex justify-center items-center flex-col gap-4 p-4">
      <div className="text-2xl sm:text-4xl w-full  font-bold flex justify-center items-center">
        FAQ
      </div>
      <div className="w-full sm:w-[32rem] flex justify-center items-center glassMorphic p-4">
      <Accordion type="single" collapsible className="w-full">
        {
            faqArray.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="">
                <AccordionTrigger className="text-start">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))

  
        }
    </Accordion>
      </div>
    </div>
  );
};

export default Faq;
