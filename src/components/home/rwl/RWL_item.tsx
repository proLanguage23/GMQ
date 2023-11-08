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
        class_name="bg-secondary p-2 rounded-full block mt-5 w-fit capitalize text-white md:px-9 px-4"
      />
      <AppTitle
        text={title}
        class_name="manropeFont lg:!text-[85px] text-white "
      />
    </div>
  );
}

export default RWL_item;
