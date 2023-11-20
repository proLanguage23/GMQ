import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  PageLink,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import React from "react";

function PteServiceItem({ img, title, btn }: any) {
  return (
    <div className="flex justify-between items-center flex-col gap-4 ">
      <div className="flex justify-between items-center flex-col gap-4 flex-1">
        <AppImg
          src={img}
          alt={title}
          class_name="w-[200px] rounded-full border-8 border-secondary shadow-md object-cover"
        />
        <AppDescriptionWithDangerouslySetInnerHTML
          text={title}
          class_name="!text-[24px] text-center"
        />
      </div>
      <div className="mt-4">
        <PageLink {...btn} class_name="commonBtnStyle" />
      </div>
    </div>
  );
}

export default PteServiceItem;
