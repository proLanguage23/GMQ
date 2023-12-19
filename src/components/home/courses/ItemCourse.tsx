"use client"
import {
  AppBgImg,
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
  PageLink,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import ScrollYProgress from "@/components/share/section/ScrollYProgress";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

function ItemCourse({
  img,
  title,
  description,
  btn,
  iSPageLink = true,
  handleClick = () => {
    alert("I am Click");
  },
  class_name = "",
  btn_Class_name = "",
}: any) {


  return (
    <ScrollYProgress class_name={`max-w-full w-[350px] lg:w-[24%] md:w-[32%] sm:w-[49%] border p-2 relative z-0 h-[400px] !rounded-2xl flex flex-col justify-end overflow-hidden group ${class_name}`}>
    <div
    >
      <PageLink
        href={btn?.href}
        text={title}
        isIcon={false}
        class_name="mt-3 !justify-start block pb-2 text-[24px] font-medium text-white capitalize manropeFont !font-bold appShadow"
      />
      <AppDescriptionWithDangerouslySetInnerHTML
        text={description}
        class_name="line-clamp-4 text-white"
      />
      <div className="mt-5 mb-3 flex justify-start ">
        {iSPageLink ? (
          <PageLink
            isIcon={false}
            {...btn}
            class_name={`NewCommonBtnStyle bg-secondary hover:bg-transparent hover:text-white rounded-full  border-primary hover:border-white ${btn_Class_name}`}
          />
        ) : (
          <AppBtn
            text={btn?.text}
            handleClick={handleClick}
            class_name={`NewCommonBtnStyle bg-primary hover:bg-transparent hover:text-white rounded-full  border-primary hover:border-white ${btn_Class_name}`}
          />
        )}
      </div>

      <AppBgImg
        src={img}
        alt={title}
        class_name="group-hover:scale-110 transition-all ease-in-out duration-500"
      />
    </div>
    
    </ScrollYProgress>
  );
}

export default ItemCourse;
