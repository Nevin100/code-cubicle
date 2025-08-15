"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = [
  {
    question: "What is the allowed team size for the hackathon?",
    answer:
      "Teams can have between 1 and 4 members. Both inter-college and inter-specialization teams are allowed.",
  },
  {
    question: "Are inter-college teams allowed?",
    answer:
      "Yes! Inter-college and inter-specialization teams are completely allowed to encourage diversity and collaboration.",
  },
  {
    question: "Do all projects have to be original?",
    answer:
      "Yes, all submissions must be original and created during the hackathon. Projects should be based on the problem statements or themes provided by the organizers.",
  },
  {
    question: "What kind of prizes and rewards are available?",
    answer:
      "The prize pool is worth ₹20 Lakhs+, including cash prizes (to be revealed soon), internships, PPO opportunities, grants, credits, and cloud sponsorships. All finalists will receive swags and goodies.",
  },
  {
    question: "Are there any additional perks for participants?",
    answer:
      "Yes! Unlimited food, snacks, and beverages will be available throughout the day, along with opportunities to pitch in front of top recruiters and founders, plus fast-tracked access to hiring and incubation programs.",
  },
  {
    question: "When should the code for the project be written?",
    answer:
      "All code must be written during the hackathon itself. Open-source libraries can be used unless restricted by the problem statement.",
  },
  {
    question: "Can we use previously built projects or code?",
    answer:
      "No, plagiarism or use of previously built projects is strictly prohibited. All work should be fresh and created during the hackathon period.",
  },
  {
    question: "Are open-source libraries allowed?",
    answer:
      "Yes, open-source libraries are allowed unless the specific problem statement mentions restrictions.",
  },
  {
    question: "Who has the final say in judging?",
    answer:
      "Judges' decisions will be final and binding. All participants must adhere to the event guidelines.",
  },
  {
    question: "What is the main aim of the hackathon?",
    answer:
      "To bring your ideas, build innovative solutions, and create impactful projects that could shape your future.",
  },
];

const FAQSection = () => {
  const [value, setValue] = useState<string>();

  return (
    <div className="flex items-center justify-center px-6 py-12" id="faq">
      <div className="w-full max-w-screen-lg mx-auto md:mb-12 md:mt-12 mb-7">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-center md:text-left"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mt-8 w-full grid md:grid-cols-2 gap-x-20 md:py-6 py-4">
          {[FAQ.slice(0, 5), FAQ.slice(5)].map((faqGroup, groupIndex) => (
            <Accordion
              key={groupIndex}
              type="single"
              collapsible
              className="w-full space-y-6"
              value={value}
              onValueChange={setValue}
            >
              {faqGroup.map(({ question, answer }, index) => {
                const itemIndex = groupIndex === 0 ? index : index + 5;

                return (
                  <AccordionItem key={question} value={`question-${itemIndex}`}>
                    <AccordionPrimitive.Header className="flex">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="w-full"
                      >
                        <AccordionPrimitive.Trigger
                          className={cn(
                            "relative flex flex-1 items-start pr-8 py-5 font-semibold transition-all [&[data-state=open]>svg]:rotate-45",
                            "text-start text-xl md:text-2xl text-foreground hover:scale-[1.02]"
                          )}
                        >
                          <span className="block">{question}</span>
                          <PlusIcon className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200" />
                        </AccordionPrimitive.Trigger>
                      </motion.div>
                    </AccordionPrimitive.Header>

                    <AnimatePresence>
                      {value === `question-${itemIndex}` && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AccordionContent className="text-base md:text-lg text-muted-foreground mt-2 leading-relaxed">
                            {answer}
                          </AccordionContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </AccordionItem>
                );
              })}
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
