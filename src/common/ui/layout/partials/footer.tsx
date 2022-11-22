import Logo from "src/common/assets/logo.png";
import Image from "next/image";
import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const FooterElement: React.ForwardRefRenderFunction<
  HTMLDivElement,
  FooterProps
> = ({ className }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge("absolute w-full bottom-0 bg-[#FFFE55]", className)}
    >
      <div className="w-full max-w-[var(--container-width)] grid grid-cols-[300px_1fr] gap-x-1 px-[var(--container-px)] pt-[80px] pb-[90px] mx-auto">
        <div className="h-[280px]">
          <div className="w-[280px] h-[145px] pt-[23px] pl-[35px] pr-[23px] bg-[#111111] transform -rotate-90 translate-y-[calc(280px)] origin-[0_0]">
            <Image src={Logo} alt="..." />
          </div>
        </div>
        <div className="flex flex-col gap-y-[110px]">
          <div className="grid grid-cols-[1fr_1fr_1fr_505px]">
            <div className="min-h-[230px] min-w-[100px] overflow-x-hidden">
              <span className="block w-[230px] text-[26px] transform origin-[0_0] translate-y-[230px] -rotate-90">
                P. +62 21 858 3944
              </span>
            </div>
            <div className="min-w-[100px]">
              <h3 className="text-[20px] font-semibold mb-[18px]">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-y-[11px] [&>li]:text-[15px] [&>li]:uppercase [&>li]:text-[#1B1B1B]">
                <li>Services</li>
                <li>Work Flow</li>
                <li>Portfolio</li>
                <li>About Us</li>
                <li>Our Value</li>
              </ul>
            </div>
            <div className="min-w-[100px]">
              <h3 className="text-[20px] font-semibold mb-[18px]">Follow</h3>
              <ul className="flex-col gap-y-[4px] [&>li]:text-[20px] [&>li]:text-[#1B1B1B]">
                <li>facebook</li>
                <li>twitter</li>
                <li>instagram</li>
                <li>linkedin</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[20px] font-semibold mb-[20px]">
                Sign up to our newsletter
              </h3>
              <div className="flex justify-between items-end gap-x-[30px]">
                <input
                  type="text"
                  className="flex-auto py-[14px] bg-transparent border-b border-black placeholder:uppercase placeholder:text-[rgba(0,0,0,0.5)] focus-within:outline-0"
                  placeholder="e-mail"
                />
                <button>
                  <HiArrowUpRight className="w-[75px] h-[75px]" />
                </button>
              </div>
              <div className="max-w-[400px]">
                <p className="mt-[43px] text-[15px]">
                  This site is protected by reCAPTHCHA and the{" "}
                  <u>Google Privacy Policy</u> and{" "}
                  <u>Terms of Service apply.</u>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-black pt-[37px]">
            <span className="text-[15px]">
              Copyright 2022 Digital Presence Strategy - Dipstrategy - Digital
              Agency Jakarta
            </span>
            <span className="text-[15px]">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = React.forwardRef(FooterElement);
