import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
} from "@/components/share";
import { GroupTrainingDummyData } from "@/data/services/PTE_Data";
import React from "react";
import { FaHandPointRight } from "react-icons/fa";

function ProgressiveApproach({ left = {} }: any) {
  return (
    <div className=" border-4 border-error rounded bg-white pb-5 shadow-lg">
      <AppTitle
        text={left?.title}
        class_name="text-center text-white text-[25px] p-1 py-5 bg-error capitalize"
      />
      <div className="mt-5 p-2 rounded">
        {left?.data?.map((item: any, key: any) => (
          <div
            className="mb-3 border-2 p-3 border-dashed flex items-center gap-4"
            key={key}
          >
            <div className="df">
              <FaHandPointRight size={22} color="#00AAAC" />
            </div>
            <div className="flex-1">
              <AppSubTitle text={item?.title} class_name="text text-[22px]" />
              <AppDescriptionWithDangerouslySetInnerHTML text={item?.text} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressiveApproach;
