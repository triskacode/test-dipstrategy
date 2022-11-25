import Logo from "src/common/assets/images/logo.png";
import ArrowUpRight from "src/common/assets/icons/arrow-up-right.png";
import Image from "next/image";
import React from "react";
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
      <div className="w-full max-w-[var(--container-max-width)] grid grid-cols-[250px_1fr] 2xl:grid-cols-[300px_1fr] gap-x-1 px-[50px] 2xl:px-[100px] pt-[60px] 2xl:pt-[80px] pb-[30px] 2xl:pb-[90px] mx-auto">
        <div className="w-[250px] 2xl:w-[280px] h-[120px] 2xl:h-[145px] pt-[23px] pl-[35px] pr-[23px] bg-[#111111] transform -rotate-90 translate-y-[250px] 2xl:translate-y-[280px] origin-[0_0]">
          <Image src={Logo} alt="..." />
        </div>
        <div className="flex flex-col gap-y-[110px]">
          <div className="grid grid-cols-[1fr_1fr_1fr_450px] 2xl:grid-cols-[1fr_1fr_1fr_500px]">
            <div className="block w-[180px] 2xl:w-[220px] text-[20px] 2xl:text-[26px] transform origin-[0_0] translate-y-[180px] 2xl:translate-y-[220px] -rotate-90">
              <span>P. +62 21 858 3944</span>
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
              <ul className="flex-col gap-y-[5px] [&>li]:text-[20px] [&>li]:text-[#1B1B1B]">
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
                  className="flex-auto py-[10px] 2xl:py-[14px] bg-transparent border-b border-black placeholder:uppercase placeholder:text-[rgba(0,0,0,0.5)] focus-within:outline-0"
                  placeholder="e-mail"
                />
                <button>
                  <Image
                    src={ArrowUpRight}
                    alt="..."
                    className="w-[50px] 2xl:w-[75px] h-[50px] 2xl:h-[75px] mb-[6px]"
                  />
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
          <div className="flex justify-between items-center border-t border-black pt-[20px] 2xl:pt-[35px]">
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
