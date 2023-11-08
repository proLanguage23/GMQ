import { AppDescription, PageLink } from "@/components/share";
import Image from "next/image";
import React from "react";

function OldCoursesItem({
  id,
  img,
  title,
  description,
  btn,
  class_name = "",
}: any) {
  return (
    <div
      className={`w-full bg-white rounded my-3 md:p-5 p-3 border shadow flex flex-col justify-between flex-wrap ${class_name}`}
    >
      <div className="">
        <Image
          src={img}
          alt={"logo"}
          quality={100}
          priority={true}
          className="w-full object-cover rounded h-56"
        />
        <PageLink
          href={btn?.href}
          text={title}
          isIcon={false}
          class_name="mt-3 !justify-start block pb-2 text-[24px] font-medium text-primary capitalize manropeFont hover:underline  transition-all text-secondary"
        />
        <AppDescription text={description} class_name="line-clamp-4" />
      </div>
      <div className="mt-5 flex md:justify-end">
        <PageLink {...btn} class_name="commonBtnStyle" />
      </div>
    </div>
  );
}

export default OldCoursesItem;
