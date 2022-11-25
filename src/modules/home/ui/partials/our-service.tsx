import ArrowUpRight from "src/common/assets/icons/arrow-up-right.png";
import ArrowUpRightWhite from "src/common/assets/icons/arrow-up-right-white.png";
import BgServices from "src/common/assets/images/bg-services.png";
import Diagram from "src/common/assets/images/diagram.png";
import Exam from "src/common/assets/images/exam.png";
import Coding from "src/common/assets/images/coding.png";

import Image from "next/image";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { OurServiceCollapse } from "./our-service-collapse";
interface OurServiceProps {}

export const OurService: React.FC<OurServiceProps> = () => {
  return (
    <div className="relative bg-[#060606] text-white pt-[325px] 2xl:pt-[375px]">
      <div className="absolute w-full bottom-0 top-0 overflow-hidden">
        <Image
          src={BgServices}
          alt="..."
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <div className="relative h-full w-full max-w-[var(--container-max-width)] px-[50px] 2xl:px-[100px] mx-auto">
        <div className="w-full flex justify-between mb-[80px]">
          <div>
            <h1 className="text-[60px] 2xl:text-[90px] leading-[60px] 2xl:leading-[90px] uppercase max-w-[400px]">
              Our Services
            </h1>
          </div>
          <div className="flex gap-x-[80px] 2xl:gap-x-[110px]">
            <div>
              <p className="text-[24px] 2xl:text-[32px] leading-[32px] 2xl:leading-[40px] max-w-[490px] 2xl:max-w-[690px]">
                We&rsquo;ve worked with a wide array of clients across the globe
                to apply design fundamentals of elegance, simplicity
              </p>
            </div>
            <div>
              <button className="flex gap-x-[32px] items-end">
                <span className="text-[20px] uppercase">View All</span>
                <Image
                  src={ArrowUpRightWhite}
                  alt="..."
                  className="w-[50px] 2xl:w-[75px] h-[50px] 2xl:h-[75px] mb-[4px]"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="divide-y divide-[#FFFFFF] border-t border-[#FFFFFF]">
          <OurServiceCollapse
            title="E-Commerce Development"
            description="You want to get the best out of your business and turn mere visitors into paying customers? Sell your products on a secure platform and not worry about the technical details? We will help you implement your E-Commerce platform."
          >
            <div className="grid grid-cols-[1fr_680px] 2xl:grid-cols-[1fr_885px] gap-x-[50px] 2xl:gap-x-[80px] items-start pt-[25px] pb-[40px]">
              <div>
                <Image src={Diagram} alt="..." />
              </div>
              <div>
                <div className="grid grid-cols-2 items-center gap-x-[25px] mb-[25px]">
                  <Image src={Exam} alt="..." />
                  <Image src={Coding} alt="..." />
                </div>
                <div className="flex items-center gap-x-[30px] justify-start">
                  <p className="max-w-[430px] 2xl:max-w-[600px] text-[16px] 2xl:text-[18px] leading-[23px] 2xl:leading-[25px]">
                    You want to get the best out of your business and turn
                    merevisitors into paying customers? Sell your products on a
                    secure platform and not worry about the technical details?
                    We will help you implement your E-Commerce platform.
                  </p>
                  <button className="flex gap-x-[20px] 2xl:gap-x-[45px] items-center py-[10px] 2xl:py-[16px] px-[14px] 2xl:px-[20px] bg-[#FFFE55] text-black ">
                    <span className="text-[15px] uppercase">Learn More</span>
                    <Image
                      src={ArrowUpRight}
                      alt="..."
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </OurServiceCollapse>
          <OurServiceCollapse
            isDefaultOpen
            title="Custom App Development"
            description="It&rsquo;s time to turn your vision into a high-performing and responsive app. This is how your customers will interact with your business, which is why we pay attention to every detail."
          >
            <div className="grid grid-cols-[1fr_680px] 2xl:grid-cols-[1fr_885px] gap-x-[50px] 2xl:gap-x-[80px] items-start pt-[25px] pb-[40px]">
              <div>
                <Image src={Diagram} alt="..." />
              </div>
              <div>
                <div className="grid grid-cols-2 items-center gap-x-[25px] mb-[25px]">
                  <Image src={Exam} alt="..." />
                  <Image src={Coding} alt="..." />
                </div>
                <div className="flex items-center gap-x-[30px] justify-start">
                  <p className="max-w-[430px] 2xl:max-w-[600px] text-[16px] 2xl:text-[18px] leading-[23px] 2xl:leading-[25px]">
                    You want to get the best out of your business and turn
                    merevisitors into paying customers? Sell your products on a
                    secure platform and not worry about the technical details?
                    We will help you implement your E-Commerce platform.
                  </p>
                  <button className="flex gap-x-[20px] 2xl:gap-x-[45px] items-center py-[10px] 2xl:py-[16px] px-[14px] 2xl:px-[20px] bg-[#FFFE55] text-black ">
                    <span className="text-[15px] uppercase">Learn More</span>
                    <Image
                      src={ArrowUpRight}
                      alt="..."
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </OurServiceCollapse>
          <OurServiceCollapse
            title="Integration With 3rd Party Web Services"
            description="We use all opportunities to solve business problems. Our intelligent digital strategy and a pragmatic and thoughtful approach to solving business calls deliver a successful framework for both you and your audience."
          >
            <div className="grid grid-cols-[1fr_680px] 2xl:grid-cols-[1fr_885px] gap-x-[50px] 2xl:gap-x-[80px] items-start pt-[25px] pb-[40px]">
              <div>
                <Image src={Diagram} alt="..." />
              </div>
              <div>
                <div className="grid grid-cols-2 items-center gap-x-[25px] mb-[25px]">
                  <Image src={Exam} alt="..." />
                  <Image src={Coding} alt="..." />
                </div>
                <div className="flex items-center gap-x-[30px] justify-start">
                  <p className="max-w-[430px] 2xl:max-w-[600px] text-[16px] 2xl:text-[18px] leading-[23px] 2xl:leading-[25px]">
                    You want to get the best out of your business and turn
                    merevisitors into paying customers? Sell your products on a
                    secure platform and not worry about the technical details?
                    We will help you implement your E-Commerce platform.
                  </p>
                  <button className="flex gap-x-[20px] 2xl:gap-x-[45px] items-center py-[10px] 2xl:py-[16px] px-[14px] 2xl:px-[20px] bg-[#FFFE55] text-black ">
                    <span className="text-[15px] uppercase">Learn More</span>
                    <Image
                      src={ArrowUpRight}
                      alt="..."
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </OurServiceCollapse>
          <OurServiceCollapse
            title="Hosting/Maintenance"
            description="Our hosting services are designed to give you the highest level of security with respect to your website&rsquo;s performance. We exclusively use safe and modern servers, which minimizes the risk of any single point of failure. This includes a minimized risk of hacks or other malicious activities."
          >
            <div className="grid grid-cols-[1fr_680px] 2xl:grid-cols-[1fr_885px] gap-x-[50px] 2xl:gap-x-[80px] items-start pt-[25px] pb-[40px]">
              <div>
                <Image src={Diagram} alt="..." />
              </div>
              <div>
                <div className="grid grid-cols-2 items-center gap-x-[25px] mb-[25px]">
                  <Image src={Exam} alt="..." />
                  <Image src={Coding} alt="..." />
                </div>
                <div className="flex items-center gap-x-[30px] justify-start">
                  <p className="max-w-[430px] 2xl:max-w-[600px] text-[16px] 2xl:text-[18px] leading-[23px] 2xl:leading-[25px]">
                    You want to get the best out of your business and turn
                    merevisitors into paying customers? Sell your products on a
                    secure platform and not worry about the technical details?
                    We will help you implement your E-Commerce platform.
                  </p>
                  <button className="flex gap-x-[20px] 2xl:gap-x-[45px] items-center py-[10px] 2xl:py-[16px] px-[14px] 2xl:px-[20px] bg-[#FFFE55] text-black ">
                    <span className="text-[15px] uppercase">Learn More</span>
                    <Image
                      src={ArrowUpRight}
                      alt="..."
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </OurServiceCollapse>
          <OurServiceCollapse
            title="Design UX/UI"
            description="Although it might seem merely superficial, the user experience might be the most crucial part of your online presence. When viewers are confronted with long loading times, cramped landing pages or an otherwise infuriating design, they will leave quicker than they came."
          >
            <div className="grid grid-cols-[1fr_680px] 2xl:grid-cols-[1fr_885px] gap-x-[50px] 2xl:gap-x-[80px] items-start pt-[25px] pb-[40px]">
              <div>
                <Image src={Diagram} alt="..." />
              </div>
              <div>
                <div className="grid grid-cols-2 items-center gap-x-[25px] mb-[25px]">
                  <Image src={Exam} alt="..." />
                  <Image src={Coding} alt="..." />
                </div>
                <div className="flex items-center gap-x-[30px] justify-start">
                  <p className="max-w-[430px] 2xl:max-w-[600px] text-[16px] 2xl:text-[18px] leading-[23px] 2xl:leading-[25px]">
                    You want to get the best out of your business and turn
                    merevisitors into paying customers? Sell your products on a
                    secure platform and not worry about the technical details?
                    We will help you implement your E-Commerce platform.
                  </p>
                  <button className="flex gap-x-[20px] 2xl:gap-x-[45px] items-center py-[10px] 2xl:py-[16px] px-[14px] 2xl:px-[20px] bg-[#FFFE55] text-black ">
                    <span className="text-[15px] uppercase">Learn More</span>
                    <Image
                      src={ArrowUpRight}
                      alt="..."
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </OurServiceCollapse>
          <OurServiceCollapse
            title="SEO Services"
            description="A well-thought-out SEO strategy can boost your growth, and in turn sales, without an expensive PPC-campaign. There are multiple ways we can help you with this."
          >
            <div className="grid grid-cols-[1fr_680px] 2xl:grid-cols-[1fr_885px] gap-x-[50px] 2xl:gap-x-[80px] items-start pt-[25px] pb-[40px]">
              <div>
                <Image src={Diagram} alt="..." />
              </div>
              <div>
                <div className="grid grid-cols-2 items-center gap-x-[25px] mb-[25px]">
                  <Image src={Exam} alt="..." />
                  <Image src={Coding} alt="..." />
                </div>
                <div className="flex items-center gap-x-[30px] justify-start">
                  <p className="max-w-[430px] 2xl:max-w-[600px] text-[16px] 2xl:text-[18px] leading-[23px] 2xl:leading-[25px]">
                    You want to get the best out of your business and turn
                    merevisitors into paying customers? Sell your products on a
                    secure platform and not worry about the technical details?
                    We will help you implement your E-Commerce platform.
                  </p>
                  <button className="flex gap-x-[20px] 2xl:gap-x-[45px] items-center py-[10px] 2xl:py-[16px] px-[14px] 2xl:px-[20px] bg-[#FFFE55] text-black ">
                    <span className="text-[15px] uppercase">Learn More</span>
                    <Image
                      src={ArrowUpRight}
                      alt="..."
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </OurServiceCollapse>
        </div>
      </div>
    </div>
  );
};
