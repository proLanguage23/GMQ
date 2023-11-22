import {
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
} from "@/components/share";
import Image from "next/image";
import React from "react";

function QualificationItemResult({ allRPL_QualificationItems }: any) {
  return (
    <>
      {allRPL_QualificationItems?.map(
        (item: any, key: any) => (
          <div
            className="p-2 pb-4 bg-white rounded-2xl flex flex-col shadow border border-secondary/30 hover:border-secondary transition-all"
            key={key}
          >
            <Image
              quality={100}
              placeholder="blur"
              src={item?.img}
              alt={item?.text}
              height={250}
              className="rounded-2xl object-cover lg:h-[200px] sm:h-[200px] h-[250px] w-full"
              loading="lazy"
              blurDataURL="true"
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
              class_name="commonBtnStyle w-full rounded-full mt-4"
            />
          </div>
        )
      )}
    </>
  );
}

export default QualificationItemResult;
