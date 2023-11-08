import { AppDescription, PageLink } from "@/components/share";
import Image from "next/image";
import React from "react";

function CoursesItem({ img, title, description, btn, class_name = "" }: any) {
  return (
    <div
      className={`w-full rounded my-5 flex flex-col justify-between flex-wrap ${class_name}`}
    >
      <Image
        src={img}
        alt={"logo"}
        quality={100}
        width={400}
        priority={true}
        className="object-contain h-56 -mb-5 mx-auto rounded-lg"
      />
      <div className="bg-secondary md:p-5 p-3 !pb-0 flex-1 flex flex-col justify-between rounded-2xl relative">
        <div className="df">
          <PageLink
            href={btn?.href}
            text={title}
            isIcon={false}
            class_name="mt-3 !justify-start block pb-2 text-[24px] font-medium text-white capitalize manropeFont hover:underline  transition-all text-secondary"
          />
          <AppDescription
            text={description}
            class_name="line-clamp-4 text-white"
          />
        </div>
        <div className="mt-5 flex -mb-5">
          <PageLink {...btn} class_name="NewCommonBtnStyle" />
        </div>
      </div>
    </div>
  );
}

export default CoursesItem;
