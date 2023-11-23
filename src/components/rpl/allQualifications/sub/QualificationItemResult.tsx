import {
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import Image from "next/image";
import React from "react";

function QualificationItemResult({ allRPL_QualificationItems }: any) {
  return (
    <>
      {allRPL_QualificationItems?.map((item: any, key: any) => (
        <div
          className="p-2 bg-white rounded-[24px] flex flex-col shadow border border-secondary/30 hover:border-secondary transition-all"
          key={key}
        >
          <AppImg
            src={item?.img}
            alt={item?.text}
            height={250}
            class_name="rounded-[16px] object-cover lg:h-[200px] sm:h-[200px] h-[250px] w-full"
          />

          <div className="my-4 flex-1">
            <AppDescriptionWithDangerouslySetInnerHTML
              text={item?.text}
              class_name="uppercase mb-2 font-bold text-secondary group-hover:!text-white text-center "
            />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={item?.description}
              class_name=" group-hover:!text-white font-light text-center line-clamp-3"
            />
          </div>
          <AppBtn
            text={"Contact Now"}
            class_name="commonBtnStyle w-full rounded-2xl mt-4"
          />
        </div>
      ))}
    </>
  );
}

export default QualificationItemResult;
