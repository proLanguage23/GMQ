import { AppSubTitle } from "@/components/share";
import Image from "next/image";
import React from "react";

function WhyGMQFetusesItem({ icon_img, text }: any) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 p-2 w-[45%] md:w-fit group flex-wrap">
      <div className="bg-secondary group-hover:bg-secondary transition duration-150 ease-out hover:ease-in flex justify-center items-center rounded-full w-20 h-20 ">
      <Image
        src={icon_img}
        alt={text}
        width={60}
        quality={100}
        // priority={true}
              loading="lazy"
              blurDataURL="true"
        className="p-1 group-hover:scale-100 scale-75 transition duration-150 ease-out hover:ease-in"
      />
      </div>
      <AppSubTitle text={text} class_name="text-white text-center group-hover:text-secondary md:w-28" />
    </div>
  );
}

export default WhyGMQFetusesItem;
