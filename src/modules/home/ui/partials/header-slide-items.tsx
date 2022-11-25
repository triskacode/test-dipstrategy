import BgHero1 from "src/common/assets/images/bg-1.png";
import BgHero2 from "src/common/assets/images/bg-2.png";
import DHome from "src/common/assets/images/d-home.png";
import WHome from "src/common/assets/images/w-home.png";
import Image from "next/image";
import React from "react";

interface HeaderSlideItem {
  content: React.ReactNode;
  title: React.ReactNode;
}

export const HeaderSlideItems: HeaderSlideItem[] = [
  {
    content: (
      <div className="absolute inset-0 -z-10">
        <Image
          src={BgHero1}
          alt="..."
          className="w-full h-[699px] 2xl:h-[932px] object-cover object-right"
        />
        <Image
          src={DHome}
          alt="D"
          className="absolute h-[460px] 2xl:h-[690px] top-[110px] object-contain object-right right-0"
        />
        <Image
          src={WHome}
          alt="W"
          className="absolute h-[460px] 2xl:h-[690px] top-[178px] object-contain object-right right-0"
        />
      </div>
    ),
    title: (
      <>
        <span>We Assist You In</span>
        <span>Solving Tomorrow&rsquo;s</span>
        <span className="text-white">Problems Today</span>
      </>
    ),
  },
  {
    content: (
      <div className="absolute inset-0 -z-10">
        <Image
          src={BgHero2}
          alt="..."
          className="w-full h-[699px] 2xl:h-[932px] object-cover object-right"
        />
        <Image
          src={DHome}
          alt="D"
          className="absolute h-[460px] 2xl:h-[690px] top-[110px] object-contain object-right right-0"
        />
      </div>
    ),
    title: (
      <>
        <span>Creating High</span>
        <span>Performance</span>
        <span className="text-white">Digital asset</span>
      </>
    ),
  },
];
