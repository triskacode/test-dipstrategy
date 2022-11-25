import ArrowUpRight from "src/common/assets/icons/arrow-up-right.png";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface OurServiceCollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  isDefaultOpen?: boolean;
}

export const OurServiceCollapse: React.FC<OurServiceCollapseProps> = ({
  title,
  description,
  children,
  isDefaultOpen,
  ...defaultProps
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(isDefaultOpen ?? false);

  return (
    <div {...defaultProps}>
      <div className="h-[135px] 2xl:h-[155px] grid grid-cols-[1fr_680px] 2xl:grid-cols-[1fr_885px] gap-x-[50px] 2xl:gap-x-[80px] items-center">
        <div>
          <h3 className="text-[22px] 2xl:text-[26px] text-[#B6B6B6] uppercase">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-x-[30px] justify-between">
          <p className="max-w-[430px] 2xl:max-w-[600px] text-[16px] 2xl:text-[18px] leading-[23px] 2xl:leading-[25px]">
            {description}
          </p>
          {!isOpen && (
            <button className="flex gap-x-[20px] 2xl:gap-x-[45px] items-center py-[10px] 2xl:py-[16px] px-[14px] 2xl:px-[20px] bg-[#FFFE55] text-black focus-within:outline-none">
              <span className="text-[15px] uppercase">Learn More</span>
              <Image
                src={ArrowUpRight}
                alt="..."
                className="w-[18px] h-[18px]"
              />
            </button>
          )}
          <button
            className="focus-within:outline-none"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <AiOutlineMinus className="w-[25px] h-[25px]" />
            ) : (
              <AiOutlinePlus className="w-[25px] h-[25px]" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
