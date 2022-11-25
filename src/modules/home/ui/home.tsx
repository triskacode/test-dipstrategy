import ArrowUpRight from "src/common/assets/icons/arrow-up-right.png";
import ArrowUpRightWhite from "src/common/assets/icons/arrow-up-right-white.png";
import BgServices from "src/common/assets/images/bg-services.png";
import BgAboutUs from "src/common/assets/images/bg-about-us.png";
import Diagram from "src/common/assets/images/diagram.png";
import Exam from "src/common/assets/images/exam.png";
import Coding from "src/common/assets/images/coding.png";
import People from "src/common/assets/images/people.png";
import WWorkflow from "src/common/assets/images/w-workflow.png";
import WPortfolioRight from "src/common/assets/images/w-portfolio-right.png";
import WPortfolioLeft from "src/common/assets/images/w-portfolio-left.png";
import HanaMobile from "src/common/assets/images/hana-mobile.png";
import HanaDesktop from "src/common/assets/images/hana-desktop.png";
import UtviMobile from "src/common/assets/images/utvi-mobile.png";
import UtviDesktop from "src/common/assets/images/utvi-desktop.png";
import BasfMobile from "src/common/assets/images/basf-mobile.png";
import BasfDesktop from "src/common/assets/images/basf-desktop.png";
import EcommerceHome from "src/common/assets/images/ecommerce-home.png";
import EcommerceCheckout from "src/common/assets/images/ecommerce-checkout.png";
import PlusDecoration from "src/common/assets/images/plus-decoration.png";
import CircleDecoration from "src/common/assets/images/circle-decoration.png";
import RectangleDecoration from "src/common/assets/images/rectangle-decoration.png";
import AboutUsVideo from "src/common/assets/images/about-us-video.png";
import Person1 from "src/common/assets/images/__mock__/1.png";
import Person2 from "src/common/assets/images/__mock__/2.png";
import Person3 from "src/common/assets/images/__mock__/3.png";
import Person4 from "src/common/assets/images/__mock__/4.png";

import Image from "next/image";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight, BsPlayFill } from "react-icons/bs";
import { Container } from "./partials/container";
import { Header } from "./partials/header";
import { OurService } from "./partials/our-service";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <Container>
      <Header />
      <OurService />
      <div className="relative">
        <div className="absolute top-[295px] 2xl:top-[325px]">
          <Image
            src={WWorkflow}
            alt="..."
            className="h-[550px] 2xl:h-[720px] object-contain object-left"
          />
        </div>
        <div className="relative h-full w-full max-w-[var(--container-max-width)] px-[50px] 2xl:px-[100px] py-[75px] 2xl:py-[100px] mx-auto">
          <div className="mb-[20px]">
            <h1 className="text-[60px] 2xl:text-[90px] leading-[60px] 2xl:leading-[90px] uppercase">
              workflow
            </h1>
          </div>
          <div className="grid grid-cols-[minmax(450px,45%)_55%] 2xl:grid-cols-[minmax(650px,48%)_52%] gap-x-[45px]">
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
              <div className="flex justify-between mb-[32px] 2xl:mb-[40px]">
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
              <div className="max-w-[650px] 2xl:max-w-[800px]">
                <p className="mb-[15px] 2xl:mb-[25px]">
                  The key to successful collaboration and results that are
                  perfectly tailored to you is clear goal setting and the
                  elimination of misunderstandings.
                </p>
                <p className="mb-[25px] 2xl:mb-[50px]">
                  Before each project, we therefore obtain detailed information
                  from you about what you expect from our service, what your
                  goals are and what you particularly value. Our experts will
                  also be happy to advise you on this step with their extensive
                  specialist knowledge.
                </p>
                <p className="mb-[25px] 2xl:mb-[50px]">
                  As soon as your expectations have been clarified, we get down
                  to work. We actively involve you, the customer, in the
                  processes so that you always know where your project currently
                  stands.
                </p>
                <button className="flex gap-x-[20px] 2xl:gap-x-[45px] items-center py-[10px] 2xl:py-[16px] px-[14px] 2xl:px-[20px] bg-[#FFFE55] text-black focus-within:outline-none mb-[30px] 2xl:mb-[55px]">
                  <span className="text-[15px] uppercase">Learn More</span>
                  <Image
                    src={ArrowUpRight}
                    alt="..."
                    className="w-[18px] h-[18px]"
                  />
                </button>
                <a
                  href="#"
                  className="block text-[20px] 2xl:text-[26px] uppercase underline mb-[45px] 2xl:mb-[75px]"
                >
                  How we communicate with the client
                </a>
                <a
                  href="#"
                  className="block text-[20px] 2xl:text-[26px] uppercase underline "
                >
                  Stages of the process
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-full w-full max-w-[var(--container-max-width)] flex items-end justify-between px-[50px] 2xl:px-[100px] py-[75px] 2xl:py-[100px] mx-auto">
          <div>
            <h1 className="text-[60px] 2xl:text-[90px] leading-[60px] 2xl:leading-[90px] uppercase">
              Portfolio
            </h1>
          </div>
          <div className="flex items-end gap-x-[45px]">
            <p className="max-w-[460px] 2xl:max-w-[660px] text-[16px] 2xl:text-[18px] leading-[22px] 2xl:leading-[25px]">
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
          <div className="h-full w-full max-w-[var(--container-max-width)] grid grid-cols-[minmax(450px,48%)_52%] 2xl:grid-cols-[minmax(650px,45%)_55%] items-center gap-x-[90px] px-[50px] 2xl:px-[100px] py-[75px] 2xl:py-[100px] mx-auto">
            <div>
              <h3 className="text-[20px] 2xl:text-[26px] leading-[25px] 2xl:leading-[33px] text-[#B6B6B6] uppercase mb-[16px] 2xl:mb-[20px]">
                Custom WEB Development
              </h3>
              <h2 className="text-[42px] 2xl:text-[58px] leading-[42px] 2xl:leading-[58px] mb-[5px]">
                <span className="block">HANA BANK</span>
                <span className="block">Website</span>
              </h2>
              <ol className="list-inside list-decimal text-[16px] 2xl:text-[21px] leading-[32px] 2xl:leading-[38px] mb-[25px] 2xl:mb-[35px]">
                <li>2017 Webby Award Winner for Best Shopping App</li>
                <li>DSC was reportedly acquired by Unilever for $1 billion</li>
                <li>4.8 Google Play Reviews</li>
                <li>
                  97% of app users would recommend the DSC app to a friend
                </li>
              </ol>
              <button className="flex gap-x-[20px] 2xl:gap-x-[45px] items-center py-[10px] 2xl:py-[16px] px-[14px] 2xl:px-[20px] bg-[#FFFE55] text-black focus-within:outline-none mb-[30px] 2xl:mb-[55px]">
                <span className="text-[15px] uppercase">Case Study</span>
                <Image
                  src={ArrowUpRight}
                  alt="..."
                  className="w-[18px] h-[18px]"
                />
              </button>
            </div>
            <div className="relative w-full h-[470px] 2xl:h-[620px] ">
              <div className="absolute bottom-[20px] left-[175px] 2xl:left-[200px] w-[125px] 2xl:w-[175px] h-[125px] 2xl:h-[175px]">
                <Image
                  src={CircleDecoration}
                  alt="..."
                  className="absolute w-[125px] 2xl:w-[175px] h-[125px] 2xl:h-[175px]"
                />
                <Image
                  src={RectangleDecoration}
                  alt="..."
                  className="absolute top-[-25px] w-[125px] 2xl:w-[175px] h-[125px] 2xl:h-[175px]"
                />
              </div>
              <Image
                src={PlusDecoration}
                alt="..."
                className="absolute top-[-20px] left-[-70px] 2xl:left-[-100px] w-[210px] 2xl:w-[310px] 2xl:h-[150px]"
              />
              <Image
                src={HanaDesktop}
                alt="..."
                className="absolute top-[50px] left-[120px] 2xl:left-[170px] w-[530px] 2xl:w-[820px] h-[325px] 2xl:h-[500px] object-contain"
              />
              <Image
                src={HanaMobile}
                alt="..."
                className="absolute top-[15px] left-0 w-[205px] 2xl:w-[275px] h-[410px] 2xl:h-[565px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-full w-full max-w-[var(--container-max-width)] grid grid-cols-[52%_minmax(450px,48%)] 2xl:grid-cols-[55%_minmax(650px,45%)] items-center gap-x-[90px] px-[50px] 2xl:px-[100px] py-[75px] 2xlpy-[100px] mx-auto">
            <div className="relative w-full h-[720px] 2xl:h-[920px] ">
              <div className="absolute bottom-[0px] 2xl:bottom-[20px] left-[260px] 2xl:left-[340px] w-[125px] 2xl:w-[175px] h-[125px] 2xl:h-[175px]">
                <Image
                  src={CircleDecoration}
                  alt="..."
                  className="absolute w-[125px] 2xl:w-[175px] h-[125px] 2xl:h-[175px]"
                />
                <Image
                  src={RectangleDecoration}
                  alt="..."
                  className="absolute top-[-25px] w-[125px] 2xl:w-[175px] h-[125px] 2xl:h-[175px]"
                />
              </div>
              <Image
                src={PlusDecoration}
                alt="..."
                className="absolute top-[50px] right-[40px] w-[210px] 2xl:w-[310px] 2xl:h-[150px]"
              />
              <Image
                src={UtviDesktop}
                alt="..."
                className="absolute top-[130px] left-[225px] 2xl:left-[300px] w-[425px] 2xl:w-[525px] h-[510px] 2xl:h-[640px] object-contain"
              />
              <Image
                src={UtviMobile}
                alt="..."
                className="absolute top-[15px] left-0 w-[350px] 2xl:w-[450px] h-[700px] 2xl:h-[900px] object-contain"
              />
            </div>
            <div>
              <h3 className="text-[20px] 2xl:text-[26px] leading-[25px] 2xl:leading-[33px] text-[#B6B6B6] uppercase mb-[16px] 2xl:mb-[20px]">
                Custom App Development
              </h3>
              <h2 className="text-[42px] 2xl:text-[58px] leading-[42px] 2xl:leading-[58px] mb-[5px]">
                <span className="block">UTVI PWA</span>
              </h2>
              <ol className="list-inside list-decimal text-[16px] 2xl:text-[21px] leading-[32px] 2xl:leading-[38px] mb-[25px] 2xl:mb-[35px]">
                <li>2021 App Award Winner for Best Maid App</li>
                <li>DSC was reportedly acquired by Unilever for $1 billion</li>
                <li>4.8 Google Play Reviews</li>
                <li>
                  97% of app users would recommend the DSC app to a friend
                </li>
              </ol>
              <button className="flex gap-x-[20px] 2xl:gap-x-[45px] items-center py-[10px] 2xl:py-[16px] px-[14px] 2xl:px-[20px] bg-[#FFFE55] text-black focus-within:outline-none mb-[30px] 2xl:mb-[55px]">
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
          <div className="absolute right-0 top-[80px] 2xl:top-[100px]">
            <Image
              src={WPortfolioRight}
              alt="..."
              className="h-[470px] 2xl:h-[720px] object-contain object-right"
            />
          </div>
          <div className="h-full w-full max-w-[var(--container-max-width)] grid grid-cols-[minmax(450px,48%)_52%] 2xl:grid-cols-[minmax(650px,45%)_55%] items-center gap-x-[90px] px-[50px] 2xl:px-[100px] py-[75px] 2xl:py-[100px] mx-auto">
            <div>
              <h3 className="text-[20px] 2xl:text-[26px] leading-[25px] 2xl:leading-[33px] text-[#B6B6B6] uppercase mb-[16px] 2xl:mb-[20px]">
                DESIGN UI/UX
              </h3>
              <h2 className="text-[42px] 2xl:text-[58px] leading-[42px] 2xl:leading-[58px] mb-[5px]">
                <span className="block">BASF WEB DESIGN</span>
              </h2>
              <ol className="list-inside list-decimal text-[16px] 2xl:text-[21px] leading-[32px] 2xl:leading-[38px] mb-[25px] 2xl:mb-[35px]">
                <li>2017 Webby Award Winner for Best Shopping App</li>
                <li>DSC was reportedly acquired by Unilever for $1 billion</li>
                <li>4.8 Google Play Reviews</li>
                <li>
                  97% of app users would recommend the DSC app to a friend
                </li>
              </ol>
              <button className="flex gap-x-[20px] 2xl:gap-x-[45px] items-center py-[10px] 2xl:py-[16px] px-[14px] 2xl:px-[20px] bg-[#FFFE55] text-black focus-within:outline-none mb-[30px] 2xl:mb-[55px]">
                <span className="text-[15px] uppercase">Case Study</span>
                <Image
                  src={ArrowUpRight}
                  alt="..."
                  className="w-[18px] h-[18px]"
                />
              </button>
            </div>
            <div className="relative w-full h-[470px] 2xl:h-[620px]">
              <div className="absolute bottom-[20px] left-[165px] 2xl:left-[200px] w-[125px] 2xl:w-[175px] h-[125px] 2xl:h-[175px]">
                <Image
                  src={CircleDecoration}
                  alt="..."
                  className="absolute w-[125px] 2xl:w-[175px] h-[125px] 2xl:h-[175px]"
                />
                <Image
                  src={RectangleDecoration}
                  alt="..."
                  className="absolute top-[-25px] w-[125px] 2xl:w-[175px] h-[125px] 2xl:h-[175px]"
                />
              </div>
              <Image
                src={PlusDecoration}
                alt="..."
                className="absolute top-[-20px] left-[-70px] 2xl:left-[-100px] w-[210px] 2xl:w-[310px] 2xl:h-[150px]"
              />
              <Image
                src={BasfDesktop}
                alt="..."
                className="absolute top-[50px] left-[120px] 2xl:left-[170px] w-[530px] 2xl:w-[820px] h-[325px] 2xl:h-[500px] object-contain"
              />
              <Image
                src={BasfMobile}
                alt="..."
                className="absolute top-[15px] left-0 w-[205px] 2xl:w-[275px] h-[410px] 2xl:h-[565px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-[90px] 2xl:top-[120px]">
            <Image
              src={WPortfolioLeft}
              alt="..."
              className="h-[470px] 2xl:h-[720px] object-contain object-left"
            />
          </div>
          <div className="h-full w-full max-w-[var(--container-max-width)] grid grid-cols-[52%_minmax(450px,48%)] 2xl:grid-cols-[55%_minmax(650px,45%)] items-center gap-x-[90px] px-[50px] 2xl:px-[100px] py-[75px] 2xlpy-[100px] mx-auto">
            <div className="relative w-full h-[620px] 2xl:h-[920px] ">
              <div className="absolute bottom-[-30px] 2xl:bottom-[-20px] left-[220px] 2xl:left-[340px] w-[125px] 2xl:w-[175px] h-[125px] 2xl:h-[175px]">
                <Image
                  src={CircleDecoration}
                  alt="..."
                  className="absolute w-[125px] 2xl:w-[175px] h-[125px] 2xl:h-[175px]"
                />
                <Image
                  src={RectangleDecoration}
                  alt="..."
                  className="absolute top-[-25px] w-[125px] 2xl:w-[175px] h-[125px] 2xl:h-[175px]"
                />
              </div>
              <Image
                src={PlusDecoration}
                alt="..."
                className=" absolute top-[0px] 2xl:top-[50px] right-[100px] 2xl:right-[40px] w-[210px] 2xl:w-[310px] 2xl:h-[150px]"
              />
              <Image
                src={EcommerceCheckout}
                alt="..."
                className="absolute top-[10px] 2xl:top-[10px] left-[235px] 2xl:left-[350px] w-[255px] 2xl:w-[375px] h-[540px] 2xl:h-[810px] object-contain"
              />
              <Image
                src={EcommerceHome}
                alt="..."
                className="absolute top-[15px] left-0 w-[350px] 2xl:w-[500px] h-[640px] 2xl:h-[940px] object-contain"
              />
            </div>
            <div>
              <h3 className="text-[20px] 2xl:text-[26px] leading-[25px] 2xl:leading-[33px] text-[#B6B6B6] uppercase mb-[16px] 2xl:mb-[20px]">
                E-Commerce Development
              </h3>
              <h2 className="text-[42px] 2xl:text-[58px] leading-[42px] 2xl:leading-[58px] mb-[5px]">
                <span className="block">Open Fashion Mobile App</span>
              </h2>
              <ol className="list-inside list-decimal text-[16px] 2xl:text-[21px] leading-[32px] 2xl:leading-[38px] mb-[25px] 2xl:mb-[35px]">
                <li>2021 App Award Winner for Best Maid App</li>
                <li>DSC was reportedly acquired by Unilever for $1 billion</li>
                <li>4.8 Google Play Reviews</li>
                <li>
                  97% of app users would recommend the DSC app to a friend
                </li>
              </ol>
              <button className="flex gap-x-[20px] 2xl:gap-x-[45px] items-center py-[10px] 2xl:py-[16px] px-[14px] 2xl:px-[20px] bg-[#FFFE55] text-black focus-within:outline-none mb-[30px] 2xl:mb-[55px]">
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
      <div className="relative">
        <div className="absolute w-full h-[625px] bottom-0 bg-[#060606]">
          <Image
            src={BgAboutUs}
            alt="..."
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full w-full max-w-[var(--container-max-width)] grid grid-cols-[740px_1fr] gap-x-[120px] px-[100px] pt-[100px] mx-auto">
          <div>
            <div className="mt-[45px] mb-[35px]">
              <h1 className="text-[90px] leading-[90px] uppercase">About Us</h1>
            </div>
            <div className="min-h-[625px] pt-[55px] text-white">
              <p className="text-[20px] leading-[28px] max-w-[720px] mb-[28px]">
                Hardianto is a name of person work in =digital agency based in
                Jakarta. Founder Novi Hardianto decided to go into business for
                himself, using his vast experience in software engineering and
                numerous ancillary fields to help people perfect their web
                presence and get seen.
              </p>
              <p className="text-[20px] leading-[28px] max-w-[720px] mb-[30px]">
                In setting up the company, he was able to rely on his vast
                experience from previous entrepreneurial activities and
                therefore knows what matters
              </p>
              <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black">
                <span className="text-[15px] uppercase">See More</span>
                <Image
                  src={ArrowUpRight}
                  alt="..."
                  className="w-[18px] h-[18px]"
                />
              </button>
            </div>
          </div>
          <div>
            <div className="relative flex items-center justify-center">
              <Image src={AboutUsVideo} alt="..." />
              <button className="absolute flex w-[80px] h-[80px] items-center justify-center rounded-full bg-white">
                <BsPlayFill className="text-[40px] ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="h-full w-full max-w-[var(--container-max-width)] flex flex-col px-[100px] mx-auto">
          <div className="absolute left-0 right-0 top-[-130px] w-full max-w-[var(--container-max-width)] flex items-center justify-between px-[100px] mx-auto text-white">
            <div>
              <h1 className="text-[90px] leading-[90px] uppercase">
                Our magic team
              </h1>
            </div>
            <div>
              <button className="flex gap-x-[45px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black">
                <span className="text-[15px] uppercase">See More</span>
                <Image
                  src={ArrowUpRight}
                  alt="..."
                  className="w-[18px] h-[18px]"
                />
              </button>
            </div>
          </div>
          <div className="pt-[40px]">
            <div className="max-w-[1100px] mb-[40px]">
              <p className="text-[20px] leading-[28px] mb-[28px]">
                Wolven D.O.O. is a small digital agency based in Serbia. Founder
                Dave McGowan decided to go into business for himself, using his
                vast experience in software engineering and numerous ancillary
                fields to help people perfect their web presence and get seen.
              </p>
              <p className="text-[20px] leading-[28px]">
                In setting up the company, he was able to rely on his vast
                experience from previous entrepreneurial activities and
                therefore knows what matters
              </p>
            </div>
            <div className="flex flex-wrap gap-x-[60px] mb-[100px]">
              <div>
                <Image
                  src={Person1}
                  alt="..."
                  className="h-[333px] object-cover object-top"
                />
                <div className="p-[30px] bg-[#FFFE55]">
                  <div className="flex flex-col mb-[15px]">
                    <span className="block text-[26px] leading-[33px] uppercase mb-[8px]">
                      Sam Flex
                    </span>
                    <span className="block text-[15px] leading-[21px]">
                      Director
                    </span>
                  </div>
                  <div className="flex gap-x-[20px]">
                    <button>
                      <FaLinkedinIn className="text-[20px]" />
                    </button>
                    <button>
                      <FaFacebookF className="text-[20px]" />
                    </button>
                    <button>
                      <FaTwitter className="text-[20px]" />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <Image src={Person2} alt="..." />
                <div className="p-[30px] bg-[#FFFE55]">
                  <div className="flex flex-col mb-[15px]">
                    <span className="block text-[26px] leading-[33px] uppercase mb-[8px]">
                      Kate Larson
                    </span>
                    <span className="block text-[15px] leading-[21px]">
                      Manager
                    </span>
                  </div>
                  <div className="flex gap-x-[20px]">
                    <button>
                      <FaLinkedinIn className="text-[20px]" />
                    </button>
                    <button>
                      <FaFacebookF className="text-[20px]" />
                    </button>
                    <button>
                      <FaTwitter className="text-[20px]" />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={Person3}
                  alt="..."
                  className="h-[365px] object-cover object-top"
                />
                <div className="p-[30px] bg-[#FFFE55] flex justify-between">
                  <div className="flex flex-row items-end gap-x-[20px]">
                    <span className="block text-[26px] leading-[33px] uppercase">
                      Bobby Fish
                    </span>
                    <span className="block text-[15px] leading-[21px]">
                      Designer
                    </span>
                  </div>
                  <div className="flex gap-x-[20px]">
                    <button>
                      <FaLinkedinIn className="text-[20px]" />
                    </button>
                    <button>
                      <FaFacebookF className="text-[20px]" />
                    </button>
                    <button>
                      <FaTwitter className="text-[20px]" />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <Image src={Person4} alt="..." />
                <div className="p-[30px] bg-[#FFFE55]">
                  <div className="flex flex-col mb-[75px]">
                    <span className="block text-[26px] leading-[33px] uppercase mb-[8px]">
                      Amanda James
                    </span>
                    <span className="block text-[15px] leading-[21px]">
                      Programmer
                    </span>
                  </div>
                  <div className="flex gap-x-[20px]">
                    <button>
                      <FaLinkedinIn className="text-[20px]" />
                    </button>
                    <button>
                      <FaFacebookF className="text-[20px]" />
                    </button>
                    <button>
                      <FaTwitter className="text-[20px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#060606] text-white">
        <div className="h-full w-full max-w-[var(--container-max-width)] flex flex-col px-[100px] py-[100px] mx-auto">
          <div className="mb-[70px]">
            <h1 className="text-[90px] uppercase">Our Value</h1>
          </div>
          <div className="grid grid-cols-3 gap-x-[200px]">
            <div className="">
              <div className="mb-[20px]">
                <h3 className="text-[32px] leading-[41px] text-[#C4C4C4]">
                  Transparency
                </h3>
              </div>
              <div className="h-[220px] flex flex-col justify-center items-center border border-[#E5E5E5] mb-[35px]">
                <div className="flex [&>div]:w-[40px] [&>div]:h-[40px] even:[&>div]:bg-[#D9D9D9] opacity-40">
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
                <div className="flex [&>div]:w-[40px] [&>div]:h-[40px] odd:[&>div]:bg-[#D9D9D9]">
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
                <div className="flex [&>div]:w-[40px] [&>div]:h-[40px] even:[&>div]:bg-[#D9D9D9] opacity-40">
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div className="text-[32px] leading-[40px] text-[#C4C4C4]">
                <p className="mb-[40px]">
                  The goal of Wolven D.O.O. is to get as close as possible to
                  the ideal of a &ldquo;glass company&rdquo;.
                </p>
                <p>
                  Our key to this is clear communication with our customers as
                  well as the disclosure of our workflows and the permanent
                  involvement of the customer in the creative processes.
                </p>
              </div>
            </div>
            <div className="">
              <div className="mb-[20px]">
                <h3 className="text-[32px] leading-[41px] text-[#C4C4C4]">
                  Accountability
                </h3>
              </div>
              <div className="h-[220px] flex justify-center items-center border border-[#E5E5E5] mb-[35px] [&>div]:w-[55px] [&>div]:h-[125px] [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:border-l [&>div]:border-[#FFFFFF]">
                <div>
                  <div className="w-[16px] h-[64px] bg-[#5A5A5A]" />
                </div>
                <div>
                  <div className="w-[16px] h-[22px] bg-[#5A5A5A]" />
                </div>
                <div>
                  <div className="w-[16px] h-[40px] bg-[#5A5A5A]" />
                </div>
              </div>
              <div className="text-[32px] leading-[40px] text-[#C4C4C4]">
                <p className="mb-[40px]">
                  We are your competent partner for web development and
                  everything that goes with it.
                </p>
                <p>
                  That means we don&rsquo;t just make empty promises, but
                  deliver measurable results as well as real added value.
                </p>
              </div>
            </div>
            <div className="">
              <div className="mb-[20px]">
                <h3 className="text-[32px] leading-[41px] text-[#C4C4C4]">
                  Dedication
                </h3>
              </div>
              <div className="h-[220px] flex justify-center items-center border border-[#E5E5E5] mb-[35px]">
                <div className=" flex justify-center items-end [&>div]:w-[55px] [&>div]:flex [&>div]:justify-center [&>div]:items-end divide-x divide-[#FFFFFF]">
                  <div>
                    <div className="w-[25px] h-[35px] bg-[#5A5A5A]" />
                  </div>
                  <div className="h-[55px]">
                    <div className="w-[25px] h-[65px] bg-[#5A5A5A]" />
                  </div>
                  <div className="h-[90px]">
                    <div className="w-[25px] h-[105px] bg-[#5A5A5A]" />
                  </div>
                </div>
              </div>
              <div className="text-[32px] leading-[40px] text-[#C4C4C4]">
                <p className="mb-[40px]">
                  Just being good at something is one side.
                </p>
                <p>
                  But for truly perfect results and content that converts, it
                  takes people who put their heart and soul into every project
                  until you as our client and partner, are 100% satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-full w-full max-w-[var(--container-max-width)] grid grid-cols-[900px_1fr] px-[100px] py-[55px] mx-auto">
          <div className="h-full flex flex-col">
            <div className="mb-[20px]">
              <h1 className="text-[90px] leading-[90px] uppercase">
                Get in Touch
              </h1>
            </div>
            <div className="max-w-[800px] mb-[75px]">
              <p className="text-[24px] leading-[33px]">
                Looking to talk to us directly, or planning an office visit? As
                Digital Agency, Dipstrategy start by understanding your business
                need to comes up with any solutions. That&rsquo;s why it is
                important for us to hear your story. When it come to listening
                to your story, we are all ears.
              </p>
            </div>
            <div className="flex-auto flex flex-col justify-between">
              <div className="mb-[60px]">
                <p className="text-[24px] leading-[33px] mb-[20px]">
                  Gd. Titan lt.3, Jl. Slamet Riyadi no.7, Jakarta 13150 -
                  Indonesia
                </p>
                <p className="text-[40px] leading-[48px] mb-[10px]">
                  P. +62 21 858 3944
                </p>
                <p className="text-[40px] leading-[48px] uppercase">
                  info@dipstrategy.co.id
                </p>
              </div>
              <ul className="text-[15px] leading-[20px] uppercase flex gap-x-[20px]">
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-black px-[60px] py-[75px]">
            <form className="flex flex-col text-white">
              <input
                type="text"
                className="flex-auto py-[14px] bg-transparent border-b border-white placeholder:uppercase placeholder:text-[rgba(255,255,255,0.5)] focus-within:outline-0 mb-[60px]"
                placeholder="Name"
              />
              <input
                type="text"
                className="flex-auto py-[14px] bg-transparent border-b border-white placeholder:uppercase placeholder:text-[rgba(255,255,255,0.5)] focus-within:outline-0 mb-[60px]"
                placeholder="E-mail"
              />
              <textarea
                className="min-h-[120px] flex-auto py-[14px] bg-transparent border-b border-white placeholder:uppercase placeholder:text-[rgba(255,255,255,0.5)] focus-within:outline-0 mb-[60px]"
                placeholder="Message"
              />
              <button
                type="submit"
                className="w-fit flex gap-x-[90px] items-center py-[16px] px-[20px] bg-[#FFFE55] text-black"
              >
                <span className="text-[15px] uppercase">Submit</span>
                <Image
                  src={ArrowUpRight}
                  alt="..."
                  className="w-[18px] h-[18px]"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};
