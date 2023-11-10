import React from "react";
import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  PageLink,
} from "..";
import Image from "next/image";

function LeftToRight({
  title,
  description,
  tiny_mceEditor,
  sideImg,
  class_name,
  leftImageToRight = false,
  isBtn = false,
  btn = {},
}: any) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 justify-center items-center ${class_name}`}
    >
      <div
        className={`flex justify-center items-center ${
          leftImageToRight ? "order-last" : "order-first"
        }`}
      >
        <Image
          src={sideImg}
          alt={title || "img"}
          width={350}
          quality={100}
          priority={true}
        />
      </div>
      <div className="">
        <AppTitle text={title} class_name="font-medium" />
        <div className="mt-5 flex flex-col gap-2">
          {description &&
            description?.map((item: any, key: any) => (
              <AppDescriptionWithDangerouslySetInnerHTML
                key={key}
                text={item}
                class_name="text-center md:text-left"
              />
            ))}
          <div className="mt-5">
            {tiny_mceEditor && (
              <AppDescriptionWithDangerouslySetInnerHTML
                text={tiny_mceEditor}
                class_name="text-justify md:text-left"
              />
            )}
            {isBtn && <PageLink {...btn} class_name="commonBtnStyle mt-5" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftToRight;
