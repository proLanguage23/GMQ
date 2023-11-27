import { AppTitle, PageLink } from "@/components/share";
import AppDescriptionWithDangerouslySetInnerHTML from "@/components/share/AppDescriptionWithDangerouslySetInnerHTML";
import React from "react";

function RWL_item({ id, title, description, btn }: any) {
  return (
    <div
      className={`${
        id === 3 ? "border-none" : "md:border-r"
      } border-secondary p-3 flex flex-col justify-end items-center md:items-end flex-wrap`}
    >
      <AppDescriptionWithDangerouslySetInnerHTML
        text={description}
        class_name="text-white text-center md:text-right "
      />
      <PageLink
        {...btn}
        class_name="commonBtnStyle mt-2 py-2 hover:bg-transparent"
      />
      <AppTitle
        text={title}
        class_name="manropeFont lg:!text-[85px] text-white"
        isAnimation
        animationSpeed = {0.1}
      />
    </div>
  );
}

export default RWL_item;
