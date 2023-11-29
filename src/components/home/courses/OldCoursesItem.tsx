import { AppBtn, AppDescription, PageLink } from "@/components/share";
import AppImg from "@/components/share/AppImg";
import Image from "next/image";
import React from "react";

function OldCoursesItem({
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
    <div
      className={`max-w-full bg-white rounded my-3 p-3 border shadow flex flex-col justify-between flex-wrap ${class_name}`}
    >
      <div className="">
        <AppImg
          src={img}
          alt={title || " image of gmq of popular-courses nursing"}
          quality={100}
          class_name="w-full rounded-md"
        />

        <PageLink
          href={btn?.href}
          text={title}
          isIcon={false}
          class_name="mt-3 !justify-start block pb-2 text-[24px] font-medium text-primary capitalize manropeFont hover:underline  transition-all text-secondary"
        />
        <AppDescription text={description} class_name="line-clamp-4" />
      </div>
      <div className="mt-5 flex justify-center md:justify-start">
        {iSPageLink ? (
          <PageLink {...btn} class_name={`commonBtnStyle ${btn_Class_name}`} />
        ) : (
          <AppBtn
            text={btn?.text}
            handleClick={handleClick}
            class_name={`commonBtnStyle ${btn_Class_name}`}
          />
        )}
      </div>
    </div>
  );
}

export default OldCoursesItem;
