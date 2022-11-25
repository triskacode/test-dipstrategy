import ArrowUpRight from "src/common/assets/icons/arrow-up-right.png";

import {
  useAnimationControls,
  motion,
  AnimatePresence,
  Variants,
} from "framer-motion";
import Image from "next/image";
import { wrap } from "popmotion";
import React, { useCallback, useEffect, useState } from "react";
import { HeaderSlideItems } from "./header-slide-items";

interface HeaderProps {}

type SlideDirection = [number, "left" | "right" | null];

export const Header: React.FC<HeaderProps> = () => {
  const [titleVariants] = useState<Variants>({
    enter: (direction: SlideDirection[1]) => ({
      opacity: 0,
      x: direction === "right" ? -200 : 200,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: SlideDirection[1]) => ({
      opacity: 0,
      x: direction === "right" ? 200 : -200,
    }),
  });

  const animateControl = useAnimationControls();
  const [[slideIndex, slideDirection], setSlide] = useState<SlideDirection>([
    0,
    null,
  ]);

  const handleSetSlide = useCallback((index: number) => {
    setSlide((prev) => [index, index > prev[0] ? "right" : "left"]);
  }, []);

  useEffect(() => {
    animateControl.start((index: number) => ({
      x:
        slideIndex === index
          ? 0
          : slideDirection === "right"
          ? "-100%"
          : "100%",
    }));
  }, [animateControl, slideDirection, slideIndex]);

  useEffect(() => {
    const changeSliderInterval = setInterval(() => {
      setSlide((prev) => {
        const index = wrap(0, HeaderSlideItems.length, prev[0] + 1);
        return [index, index > prev[0] ? "right" : "left"];
      });
    }, 10000);

    return () => {
      clearInterval(changeSliderInterval);
    };
  }, [slideIndex]);

  return (
    <div className="relative h-[699px] 2xl:h-[932px]">
      {HeaderSlideItems.map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          animate={animateControl}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30, duration: 300 },
          }}
          style={{
            x:
              slideIndex === i
                ? 0
                : slideDirection === "right"
                ? "-100%"
                : "100%",
          }}
        >
          {item.content}
        </motion.div>
      ))}
      <div className="relative h-full w-full max-w-[var(--container-max-width)] flex justify-between items-end px-[50px] 2xl:px-[100px] mx-auto">
        <div className="relative z-10">
          <AnimatePresence mode="wait" initial={false}>
            {HeaderSlideItems.map(
              (item, i) =>
                slideIndex === i && (
                  <motion.h1
                    key={i}
                    custom={slideDirection}
                    variants={titleVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 1,
                      },
                      opacity: { duration: 0.5 },
                    }}
                    className="text-[80px] 2xl:text-[120px] flex flex-col uppercase leading-[75px] 2xl:leading-[115px] -mb-[75px] 2xl:-mb-[115px]"
                  >
                    {item.title}
                  </motion.h1>
                )
            )}
          </AnimatePresence>
        </div>
        <div>
          <div className="flex gap-x-[5px] justify-end mb-[45px] [&>button]:w-[12px] [&>button]:h-[12px] [&>button]:rounded-full [&>button]:border [&>button]:border-white focus-within:[&>button]:outline-none">
            {HeaderSlideItems.map((_, i) => (
              <button
                key={i}
                className="bg-transparent"
                onClick={() => handleSetSlide(i)}
              >
                {slideIndex === i && (
                  <motion.div
                    layoutId="header-slide-handler"
                    className="w-full h-full rounded-full bg-white"
                  />
                )}
              </button>
            ))}
          </div>
          <div>
            <button className="flex gap-x-[20px] items-end mb-[40px]">
              <span className="text-[20px] uppercase">About Us</span>
              <Image
                src={ArrowUpRight}
                alt="..."
                className="w-[50px] 2xl:w-[75px] h-[50px] 2xl:h-[75px] mb-[4px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
