import ArrowUpRight from "src/common/assets/icons/arrow-up-right.png";
import ArrowUpRightWhite from "src/common/assets/icons/arrow-up-right-white.png";
import BgHero1 from "src/common/assets/images/bg-1.png";
import BgServices from "src/common/assets/images/bg-services.png";
import Diagram from "src/common/assets/images/diagram.png";
import Exam from "src/common/assets/images/exam.png";
import Coding from "src/common/assets/images/coding.png";
import People from "src/common/assets/images/people.png";
import DHome from "src/common/assets/images/d-home.png";
import WHome from "src/common/assets/images/w-home.png";
import WWorkflow from "src/common/assets/images/w-workflow.png";
import HanaMobile from "src/common/assets/images/hana-mobile.png";
import HanaDesktop from "src/common/assets/images/hana-desktop.png";
import UtviMobile from "src/common/assets/images/utvi-mobile.png";
import UtviDesktop from "src/common/assets/images/utvi-desktop.png";
import PlusDecoration from "src/common/assets/images/plus-decoration.png";
import CircleDecoration from "src/common/assets/images/circle-decoration.png";
import RectangleDecoration from "src/common/assets/images/rectangle-decoration.png";

import Image from "next/image";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Container } from "./partials/container";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <Container>
      <div className="relative h-[932px]">
        <div className="absolute inset-0 -z-10">
          <Image
            src={BgHero1}
            alt="..."
            className="w-full h-full object-cover"
          />
          <Image src={DHome} alt="D" className="absolute top-[110px] right-0" />
          <Image src={WHome} alt="W" className="absolute top-[178px] right-0" />
        </div>
        <div className="relative h-full w-full max-w-[var(--container-width)] flex justify-between items-end px-[var(--container-px)] mx-auto">
          <div className="relative z-10">
            <h1 className="text-[118px] flex flex-col uppercase leading-[112px] -mb-[112px]">
              <span>We Assist You In</span>
              <span>Solving Tomorrow&rsquo;s</span>
              <span className="text-white">Problems Today</span>
            </h1>
          </div>
          <div>
            <div className="flex gap-x-[5px] justify-end mb-[45px]">
              <button className="w-[12px] h-[12px] rounded-full bg-white border border-white cursor-pointer" />
              <button className="w-[12px] h-[12px] rounded-full bg-transparent border border-white cursor-pointer" />
              <button className="w-[12px] h-[12px] rounded-full bg-transparent border border-white cursor-pointer" />
              <button className="w-[12px] h-[12px] rounded-full bg-transparent border border-white cursor-pointer" />
            </div>
            <div>
              <button className="flex gap-x-[20px] items-end mb-[40px]">
                <span className="text-[20px] uppercase">About Us</span>
                <Image
                  src={ArrowUpRight}
                  alt="..."
                  className="w-[75px] h-[75px] mb-[4px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-[#060606] text-white pt-[375px]">
        <div className="absolute w-full bottom-0">
          <Image
            src={BgServices}
            alt="..."
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full w-full max-w-[var(--container-width)] px-[var(--container-px)] mx-auto">
          <div className="w-full flex justify-between mb-[80px]">
            <div>
              <h1 className="text-[90px] leading-[90px] uppercase max-w-[400px]">
                Our Services
              </h1>
            </div>
            <div className="flex gap-x-[110px]">
              <div>
                <p className="text-[32px] leading-[41.6px] max-w-[693px]">
                  We&rsquo;ve worked with a wide array of clients across the
                  globe to apply design fundamentals of elegance, simplicity
                </p>
              </div>
              <div>
                <button className="flex gap-x-[32px] items-end">
                  <span className="text-[20px] uppercase">View All</span>
                  <Image
                    src={ArrowUpRightWhite}
                    alt="..."
                    className="w-[75px] h-[75px] mb-[4px]"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="divide-y divide-[#FFFFFF] border-t border-[#FFFFFF]">
            <div>
              <div className="h-[155px] grid grid-cols-[1fr_885px] items-center">
                <div>
                  <h3 className="text-[26px] text-[#B6B6B6] uppercase">
                    E-Commerce Development
                  </h3>
                </div>
                <div className="flex items-center gap-x-[30px] justify-between">
                  <p className="max-w-[600px] text-[18px] leading-[25px]">
                    You want to get the best out of your business and turn mere
                    visitors into paying customers? Sell your products on a
                    secure platform and not worry about the technical details?
                    We will help you implement your E-Commerce platform.
                  </p>
                  <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black ">
                    <span className="text-[15px] uppercase">Learn More</span>
                    <Image
                      src={ArrowUpRight}
                      alt="..."
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                  <button>
                    <AiOutlinePlus className="w-[25px] h-[25px]" />
                  </button>
                </div>
              </div>
              <div className="hidden grid grid-cols-[1fr_885px] items-center pt-[25px] pb-[40px]">
                <div>
                  <Image src={Diagram} alt="..." />
                </div>
                <div>
                  <div className="flex items-center gap-x-[25px] mb-[25px]">
                    <Image src={Exam} alt="..." />
                    <Image src={Coding} alt="..." />
                  </div>
                  <div className="flex items-center gap-x-[30px] justify-start">
                    <p className="max-w-[600px] text-[18px] leading-[25px]">
                      You want to get the best out of your business and turn
                      merevisitors into paying customers? Sell your products on
                      a secure platform and not worry about the technical
                      details? We will help you implement your E-Commerce
                      platform.
                    </p>
                    <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black ">
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
            </div>
            <div>
              <div className="h-[155px] grid grid-cols-[1fr_885px] items-center">
                <div>
                  <h3 className="text-[26px] font-bold text-[#B6B6B6] uppercase">
                    Custom App Development
                  </h3>
                </div>
                <div className="flex items-center gap-x-[30px] justify-between">
                  <p className="max-w-[600px] text-[18px] leading-[25px]">
                    It&rsquo;s time to turn your vision into a high-performing
                    and responsive app. This is how your customers will interact
                    with your business, which is why we pay attention to every
                    detail.
                  </p>
                  <button className="hidden flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black ">
                    <span className="text-[15px] uppercase">Learn More</span>
                    <Image
                      src={ArrowUpRight}
                      alt="..."
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                  <button>
                    <AiOutlinePlus className="w-[25px] h-[25px]" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-[1fr_885px] items-center pt-[25px] pb-[40px]">
                <div>
                  <Image src={Diagram} alt="..." />
                </div>
                <div>
                  <div className="flex items-center gap-x-[25px] mb-[25px]">
                    <Image src={Exam} alt="..." />
                    <Image src={Coding} alt="..." />
                  </div>
                  <div className="flex items-center gap-x-[30px] justify-start">
                    <p className="max-w-[600px] text-[18px] leading-[25px]">
                      In the design process, they create both functional and
                      beautiful things. The team possesses unique individuality
                      and strong qualifications and can easily translate
                      something so abstract and visionary into a digital
                      experience. They always put the clients first no matter
                      how complicated the tasks are.
                    </p>
                    <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black ">
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
            </div>
            <div>
              <div className="h-[155px] grid grid-cols-[1fr_885px] items-center">
                <div>
                  <h3 className="text-[26px] text-[#B6B6B6] uppercase">
                    Integration With 3rd Party Web Services
                  </h3>
                </div>
                <div className="flex items-center gap-x-[30px] justify-between">
                  <p className="max-w-[600px] text-[18px] leading-[25px]">
                    We use all opportunities to solve business problems. Our
                    intelligent digital strategy and a pragmatic and thoughtful
                    approach to solving business calls deliver a successful
                    framework for both you and your audience.
                  </p>
                  <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black ">
                    <span className="text-[15px] uppercase">Learn More</span>
                    <Image
                      src={ArrowUpRight}
                      alt="..."
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                  <button>
                    <AiOutlinePlus className="w-[25px] h-[25px]" />
                  </button>
                </div>
              </div>
              <div className="hidden grid grid-cols-[1fr_885px] items-center pt-[25px] pb-[40px]">
                <div>
                  <Image src={Diagram} alt="..." />
                </div>
                <div>
                  <div className="flex items-center gap-x-[25px] mb-[25px]">
                    <Image src={Exam} alt="..." />
                    <Image src={Coding} alt="..." />
                  </div>
                  <div className="flex items-center gap-x-[30px] justify-start">
                    <p className="max-w-[600px] text-[18px] leading-[25px]">
                      You want to get the best out of your business and turn
                      merevisitors into paying customers? Sell your products on
                      a secure platform and not worry about the technical
                      details? We will help you implement your E-Commerce
                      platform.
                    </p>
                    <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black ">
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
            </div>
            <div>
              <div className="h-[155px] grid grid-cols-[1fr_885px] items-center">
                <div>
                  <h3 className="text-[26px] text-[#B6B6B6] uppercase">
                    Hosting/Maintenance
                  </h3>
                </div>
                <div className="flex items-center gap-x-[30px] justify-between">
                  <p className="max-w-[600px] text-[18px] leading-[25px]">
                    Our hosting services are designed to give you the highest
                    level of security with respect to your website&rsquo;s
                    performance. We exclusively use safe and modern servers,
                    which minimizes the risk of any single point of failure.
                    This includes a minimized risk of hacks or other malicious
                    activities.
                  </p>
                  <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black ">
                    <span className="text-[15px] uppercase">Learn More</span>
                    <Image
                      src={ArrowUpRight}
                      alt="..."
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                  <button>
                    <AiOutlinePlus className="w-[25px] h-[25px]" />
                  </button>
                </div>
              </div>
              <div className="hidden grid grid-cols-[1fr_885px] items-center pt-[25px] pb-[40px]">
                <div>
                  <Image src={Diagram} alt="..." />
                </div>
                <div>
                  <div className="flex items-center gap-x-[25px] mb-[25px]">
                    <Image src={Exam} alt="..." />
                    <Image src={Coding} alt="..." />
                  </div>
                  <div className="flex items-center gap-x-[30px] justify-start">
                    <p className="max-w-[600px] text-[18px] leading-[25px]">
                      You want to get the best out of your business and turn
                      merevisitors into paying customers? Sell your products on
                      a secure platform and not worry about the technical
                      details? We will help you implement your E-Commerce
                      platform.
                    </p>
                    <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black ">
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
            </div>
            <div>
              <div className="h-[155px] grid grid-cols-[1fr_885px] items-center">
                <div>
                  <h3 className="text-[26px] text-[#B6B6B6] uppercase">
                    Design UX/UI
                  </h3>
                </div>
                <div className="flex items-center gap-x-[30px] justify-between">
                  <p className="max-w-[600px] text-[18px] leading-[25px]">
                    Although it might seem merely superficial, the user
                    experience might be the most crucial part of your online
                    presence. When viewers are confronted with long loading
                    times, cramped landing pages or an otherwise infuriating
                    design, they will leave quicker than they came.
                  </p>
                  <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black ">
                    <span className="text-[15px] uppercase">Learn More</span>
                    <Image
                      src={ArrowUpRight}
                      alt="..."
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                  <button>
                    <AiOutlinePlus className="w-[25px] h-[25px]" />
                  </button>
                </div>
              </div>
              <div className="hidden grid grid-cols-[1fr_885px] items-center pt-[25px] pb-[40px]">
                <div>
                  <Image src={Diagram} alt="..." />
                </div>
                <div>
                  <div className="flex items-center gap-x-[25px] mb-[25px]">
                    <Image src={Exam} alt="..." />
                    <Image src={Coding} alt="..." />
                  </div>
                  <div className="flex items-center gap-x-[30px] justify-start">
                    <p className="max-w-[600px] text-[18px] leading-[25px]">
                      You want to get the best out of your business and turn
                      merevisitors into paying customers? Sell your products on
                      a secure platform and not worry about the technical
                      details? We will help you implement your E-Commerce
                      platform.
                    </p>
                    <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black ">
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
            </div>
            <div>
              <div className="h-[155px] grid grid-cols-[1fr_885px] items-center">
                <div>
                  <h3 className="text-[26px] text-[#B6B6B6] uppercase">
                    SEO Services
                  </h3>
                </div>
                <div className="flex items-center gap-x-[30px] justify-between">
                  <p className="max-w-[600px] text-[18px] leading-[25px]">
                    A well-thought-out SEO strategy can boost your growth, and
                    in turn sales, without an expensive PPC-campaign. There are
                    multiple ways we can help you with this.
                  </p>
                  <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black ">
                    <span className="text-[15px] uppercase">Learn More</span>
                    <Image
                      src={ArrowUpRight}
                      alt="..."
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                  <button>
                    <AiOutlinePlus className="w-[25px] h-[25px]" />
                  </button>
                </div>
              </div>
              <div className="hidden grid grid-cols-[1fr_885px] items-center pt-[25px] pb-[40px]">
                <div>
                  <Image src={Diagram} alt="..." />
                </div>
                <div>
                  <div className="flex items-center gap-x-[25px] mb-[25px]">
                    <Image src={Exam} alt="..." />
                    <Image src={Coding} alt="..." />
                  </div>
                  <div className="flex items-center gap-x-[30px] justify-start">
                    <p className="max-w-[600px] text-[18px] leading-[25px]">
                      You want to get the best out of your business and turn
                      merevisitors into paying customers? Sell your products on
                      a secure platform and not worry about the technical
                      details? We will help you implement your E-Commerce
                      platform.
                    </p>
                    <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black ">
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
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-[325px]">
          <Image src={WWorkflow} alt="..." />
        </div>
        <div className="relative h-full w-full max-w-[var(--container-width)] px-[var(--container-px)] py-[100px] mx-auto">
          <div className="mb-[20px]">
            <h1 className="text-[90px] leading-[90px] uppercase">workflow</h1>
          </div>
          <div className="grid grid-cols-[1fr_915px] gap-x-[45px]">
            <div>
              <div className="mb-[90px]">
                <p className="max-w-[720px] text-[18px] leading-[25px]">
                  It is particularly important for us that you as a customer are
                  actively involved in creative processes and that you know at
                  all times which step we are about to take next. Learn more
                  about our workflow and our communication with you as a
                  customer here.
                </p>
              </div>
              <div>
                <Image src={People} alt="..." />
              </div>
            </div>
            <div className="text-[18px] leading-[25px]">
              <div className="flex justify-between mb-[40px]">
                <h3 className="text-[26px] font-bold uppercase">
                  How we deal with projects from start to finish
                </h3>
                <button className="">
                  <Image
                    src={ArrowUpRight}
                    alt="..."
                    className="w-[25px] h-[25px]"
                  />
                </button>
              </div>
              <div className="max-w-[800px]">
                <p className="mb-[25px]">
                  The key to successful collaboration and results that are
                  perfectly tailored to you is clear goal setting and the
                  elimination of misunderstandings.
                </p>
                <p className="mb-[50px]">
                  Before each project, we therefore obtain detailed information
                  from you about what you expect from our service, what your
                  goals are and what you particularly value. Our experts will
                  also be happy to advise you on this step with their extensive
                  specialist knowledge.
                </p>
                <p className="mb-[50px]">
                  As soon as your expectations have been clarified, we get down
                  to work. We actively involve you, the customer, in the
                  processes so that you always know where your project currently
                  stands.
                </p>
                <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black mb-[55px]">
                  <span className="text-[15px] uppercase">Learn More</span>
                  <Image
                    src={ArrowUpRight}
                    alt="..."
                    className="w-[18px] h-[18px]"
                  />
                </button>
                <a
                  href="#"
                  className="block text-[26px] uppercase underline mb-[75px]"
                >
                  How we communicate with the client
                </a>
                <a href="#" className="block text-[26px] uppercase underline ">
                  Stages of the process
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-full w-full max-w-[var(--container-width)] flex items-end justify-between px-[var(--container-px)] py-[100px] mx-auto">
          <div>
            <h1 className="text-[90px] leading-[90px] uppercase">Portfolio</h1>
          </div>
          <div className="flex items-end gap-x-[45px]">
            <p className="max-w-[660px] text-[18px] leading-[25px]">
              Take a look at our most successful projects and see for yourself
              our skills and the results that speak for themselves.
            </p>
            <div className="flex gap-x-[45px]">
              <button>
                <BsArrowLeft className="text-[36px]" />
              </button>
              <button>
                <BsArrowRight className="text-[36px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-full w-full max-w-[var(--container-width)] grid grid-cols-[650px_1fr] items-center gap-x-[90px] px-[var(--container-px)] py-[100px] mx-auto">
            <div>
              <h3 className="text-[26px] leading-[33px] text-[#B6B6B6] uppercase mb-[20px]">
                Custom WEB Development
              </h3>
              <h2 className="text-[58px] leading-[58px] mb-[5px]">
                <span className="block">HANA BANK</span>
                <span className="block">Website</span>
              </h2>
              <ol className="list-inside list-decimal text-[21px] leading-[38px] mb-[35px]">
                <li>2017 Webby Award Winner for Best Shopping App</li>
                <li>DSC was reportedly acquired by Unilever for $1 billion</li>
                <li>4.8 Google Play Reviews</li>
                <li>
                  97% of app users would recommend the DSC app to a friend
                </li>
              </ol>
              <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black">
                <span className="text-[15px] uppercase">Case Study</span>
                <Image
                  src={ArrowUpRight}
                  alt="..."
                  className="w-[18px] h-[18px]"
                />
              </button>
            </div>
            <div className="relative w-full h-[620px] ">
              <div className="absolute bottom-[20px] left-[200px] w-[175px] h-[175px]">
                <Image
                  src={CircleDecoration}
                  alt="..."
                  className="absolute w-[175px] h-[175p]"
                />
                <Image
                  src={RectangleDecoration}
                  alt="..."
                  className="absolute top-[-25px] w-[175px] h-[175p]"
                />
              </div>
              <Image
                src={PlusDecoration}
                alt="..."
                className="absolute top-[-20px] left-[-100px] w-[310px] h-[150px]"
              />
              <Image
                src={HanaDesktop}
                alt="..."
                className="absolute top-[50px] left-[170px] w-[820px] h-[500px]"
              />
              <Image
                src={HanaMobile}
                alt="..."
                className="absolute top-[15px] left-0 w-[275px] h-[565px]"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-full w-full max-w-[var(--container-width)] grid grid-cols-[1fr_800px] items-center gap-x-[90px] px-[var(--container-px)] py-[100px] mx-auto">
            <div className="relative w-full h-[920px] ">
              <div className="absolute bottom-[20px] left-[340px] w-[175px] h-[175px]">
                <Image
                  src={CircleDecoration}
                  alt="..."
                  className="absolute w-[175px] h-[175p]"
                />
                <Image
                  src={RectangleDecoration}
                  alt="..."
                  className="absolute top-[-25px] w-[175px] h-[175p]"
                />
              </div>
              <Image
                src={PlusDecoration}
                alt="..."
                className="absolute top-[50px] right-[40px] w-[310px] h-[150px]"
              />
              <Image
                src={UtviDesktop}
                alt="..."
                className="absolute top-[130px] left-[300px] w-[525px] h-[640px]"
              />
              <Image
                src={UtviMobile}
                alt="..."
                className="absolute top-[15px] left-0 w-[450px] h-[900px]"
              />
            </div>
            <div>
              <h3 className="text-[26px] leading-[33px] text-[#B6B6B6] uppercase mb-[20px]">
                Custom App Development
              </h3>
              <h2 className="text-[58px] leading-[58px] mb-[5px]">
                <span className="block">UTVI PWA</span>
              </h2>
              <ol className="list-inside list-decimal text-[21px] leading-[38px] mb-[35px]">
                <li>2021 App Award Winner for Best Maid App</li>
                <li>DSC was reportedly acquired by Unilever for $1 billion</li>
                <li>4.8 Google Play Reviews</li>
                <li>
                  97% of app users would recommend the DSC app to a friend
                </li>
              </ol>
              <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black">
                <span className="text-[15px] uppercase">Case Study</span>
                <Image
                  src={ArrowUpRight}
                  alt="..."
                  className="w-[18px] h-[18px]"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-full w-full max-w-[var(--container-width)] grid grid-cols-[650px_1fr] items-center gap-x-[90px] px-[var(--container-px)] py-[100px] mx-auto">
            <div>
              <h3 className="text-[26px] leading-[33px] text-[#B6B6B6] uppercase mb-[20px]">
                DESIGN UI/UX
              </h3>
              <h2 className="text-[58px] leading-[58px] mb-[5px]">
                <span className="block">BASF WEB DESIGN</span>
              </h2>
              <ol className="list-inside list-decimal text-[21px] leading-[38px] mb-[35px]">
                <li>2017 Webby Award Winner for Best Shopping App</li>
                <li>DSC was reportedly acquired by Unilever for $1 billion</li>
                <li>4.8 Google Play Reviews</li>
                <li>
                  97% of app users would recommend the DSC app to a friend
                </li>
              </ol>
              <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black">
                <span className="text-[15px] uppercase">Case Study</span>
                <Image
                  src={ArrowUpRight}
                  alt="..."
                  className="w-[18px] h-[18px]"
                />
              </button>
            </div>
            <div className="relative w-full h-[620px] ">
              <div className="absolute bottom-[20px] left-[200px] w-[175px] h-[175px]">
                <Image
                  src={CircleDecoration}
                  alt="..."
                  className="absolute w-[175px] h-[175p]"
                />
                <Image
                  src={RectangleDecoration}
                  alt="..."
                  className="absolute top-[-25px] w-[175px] h-[175p]"
                />
              </div>
              <Image
                src={PlusDecoration}
                alt="..."
                className="absolute top-[-20px] left-[-100px] w-[310px] h-[150px]"
              />
              <Image
                src={HanaDesktop}
                alt="..."
                className="absolute top-[50px] left-[170px] w-[820px] h-[500px]"
              />
              <Image
                src={HanaMobile}
                alt="..."
                className="absolute top-[15px] left-0 w-[275px] h-[565px]"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-full w-full max-w-[var(--container-width)] grid grid-cols-[1fr_800px] items-center gap-x-[90px] px-[var(--container-px)] py-[100px] mx-auto">
            <div className="relative w-full h-[920px] ">
              <div className="absolute bottom-[20px] left-[340px] w-[175px] h-[175px]">
                <Image
                  src={CircleDecoration}
                  alt="..."
                  className="absolute w-[175px] h-[175p]"
                />
                <Image
                  src={RectangleDecoration}
                  alt="..."
                  className="absolute top-[-25px] w-[175px] h-[175p]"
                />
              </div>
              <Image
                src={PlusDecoration}
                alt="..."
                className="absolute top-[50px] right-[40px] w-[310px] h-[150px]"
              />
              <Image
                src={UtviDesktop}
                alt="..."
                className="absolute top-[130px] left-[300px] w-[525px] h-[640px]"
              />
              <Image
                src={UtviMobile}
                alt="..."
                className="absolute top-[15px] left-0 w-[450px] h-[900px]"
              />
            </div>
            <div>
              <h3 className="text-[26px] leading-[33px] text-[#B6B6B6] uppercase mb-[20px]">
                Custom App Development
              </h3>
              <h2 className="text-[58px] leading-[58px] mb-[5px]">
                <span className="block">UTVI PWA</span>
              </h2>
              <ol className="list-inside list-decimal text-[21px] leading-[38px] mb-[35px]">
                <li>2021 App Award Winner for Best Maid App</li>
                <li>DSC was reportedly acquired by Unilever for $1 billion</li>
                <li>4.8 Google Play Reviews</li>
                <li>
                  97% of app users would recommend the DSC app to a friend
                </li>
              </ol>
              <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black">
                <span className="text-[15px] uppercase">Case Study</span>
                <Image
                  src={ArrowUpRight}
                  alt="..."
                  className="w-[18px] h-[18px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
