import Logo from "src/common/assets/images/logo.png";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeaderElement: React.ForwardRefRenderFunction<
  HTMLDivElement,
  HeaderProps
> = ({ className }, ref) => {
  return (
    <div ref={ref} className={twMerge("absolute w-full top-0 z-10", className)}>
      <div className="w-full max-w-[var(--container-width)] flex justify-between items-center px-[var(--container-px)] pt-[35px] pb-[10px] mx-auto">
        <div>
          <Image src={Logo} alt="..." />
        </div>
        <div className="flex items-center gap-x-[62px]">
          <ul className="flex gap-x-[30px] [&>li]:cursor-pointer [&>li]:uppercase [&>li]:text-[15px] [&>li]:text-white [&>li]:after:content-['•'] [&>li]:after:inline [&>li]:after:h-full [&>li]:after:ml-1 [&>li[data-active='true']]:px-[10px] [&>li[data-active='true']]:after:hidden [&>li[data-active='true']]:font-bold [&>li[data-active='true']]:text-[#FFFE55]">
            <li data-active={true}>Home</li>
            <li>Services</li>
            <li>Work Flow</li>
            <li>Portfolio</li>
            <li>About Us</li>
            <li>Our Value</li>
          </ul>
          <div>
            <span className="text-[26px]">+62 21 858 3944</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Header = React.forwardRef(HeaderElement);
