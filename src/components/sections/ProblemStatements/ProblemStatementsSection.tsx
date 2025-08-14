/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardContent } from "./CardContent";
import { rippleEffect } from "@/utils/rippleEffect";
import {
  problemStatements as originalProblemStatements,
  CHANGE_DURATION,
} from "@/json/problem-statements";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const problemStatements = [...originalProblemStatements];

const ProblemStatement = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(
    null
  ) as React.RefObject<HTMLHeadingElement>;
  const containerRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const intervalRef = useRef<number | null>(null);

  rippleEffect(titleRef, containerRef);

  const startAutoChange = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      goToNext();
    }, CHANGE_DURATION);
  }, []);

  const stopAutoChange = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    setCurrent(api.selectedScrollSnap());

    startAutoChange();

    return () => {
      stopAutoChange();
      api.off("select", onSelect);
    };
  }, [api, startAutoChange, stopAutoChange]);

  const handleInteraction = useCallback(() => {
    stopAutoChange();
    startAutoChange();
  }, [startAutoChange, stopAutoChange]);

  const goToNext = () => {
    if (!api) return;
    const nextIndex = (current + 1) % problemStatements.length;
    api.scrollTo(nextIndex);
    setCurrent(nextIndex);
    handleInteraction();
  };

  const goToPrev = () => {
    if (!api) return;
    const prevIndex =
      (current - 1 + problemStatements.length) % problemStatements.length;
    api.scrollTo(prevIndex);
    setCurrent(prevIndex);
    handleInteraction();
  };

  // Framer Motion Variants
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div
      ref={containerRef}
      className="py-12 h-fit grid grid-rows-[auto_1fr_auto]"
      id="problem-statements"
    >
      <motion.h2
        ref={titleRef}
        className="mb-12 mt-12 text-center text-4xl font-extrabold leading-tight text-gray-900 dark:text-gray-100 md:text-6xl md:leading-snug select-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={headingVariants}
      >
        PROBLEM STATEMENTS
      </motion.h2>

      <div className="max-w-8xl px-4 py-[2.5rem] h-fit grid grid-cols-1 md:grid-cols-[50px_1fr_50px] gap-2">
        <div className="hidden md:flex md:items-center">
          <button
            onClick={goToPrev}
            className="bg-white/60 border border-black/10 rounded-full h-fit p-2 shadow-md z-30 hidden md:block"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-3 h-3 md:w-6 md:h-6 text-black" />
          </button>
        </div>

        <div className="flex justify-center items-center">
          <Carousel
            className="w-full h-full max-w-md lg:max-w-none"
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            onMouseEnter={stopAutoChange}
            onMouseLeave={startAutoChange}
            onTouchStart={stopAutoChange}
            onTouchEnd={startAutoChange}
          >
            <CarouselContent className="h-full flex items-center md:max-w-6xl md:ml-[2rem]">
              {problemStatements.map((statement, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-3/4 md:basis-2/3 lg:basis-2/5 xl:basis-3/5 max-w-[485px] mx-auto"
                >
                  <motion.div
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={cardVariants}
                    className={`transition-all duration-300 rounded-lg shadow-lg ${
                      index === current
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-30"
                    }`}
                  >
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <CardContent {...statement} className="h-full" />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="hidden md:flex md:items-center">
          <button
            onClick={goToNext}
            className="bg-white/60 border border-accent/10 rounded-full h-fit p-2 shadow-md z-50 hidden md:block"
            aria-label="Next card"
          >
            <ChevronRight className="w-3 h-3 md:w-6 md:h-6 text-black" />
          </button>
        </div>
      </div>

      <div className="flex justify-center space-x-2">
        {problemStatements.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              api?.scrollTo(index);
              setCurrent(index);
              handleInteraction();
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-pink scale-125"
                : "bg-gray-300 hover:bg-gray-500"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProblemStatement;
