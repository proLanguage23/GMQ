import { AppDescription, AppSubTitle } from "@/components/share";
import AppDescriptionWithDangerouslySetInnerHTML from "@/components/share/AppDescriptionWithDangerouslySetInnerHTML";
import Image from "next/image";
import React from "react";

function TestimonialItem({
  id,
  avatar,
  name,
  bio,
  messages,
  secondaryImg,
}: any) {
  return (
    <div className="border w-full rounded md:p-6 p-3 md:h-[300px] flex flex-col justify-between gap-1">
      <AppDescriptionWithDangerouslySetInnerHTML
        text={messages}
        class_name="!text-text manropeFont flex-1"
      />
      <div className="mt-9 flex md:justify-between justify-around items-center flex-wrap gap-2">
        <div className=" flex justify-start items-center gap-3 flex-wrap">
          <Image
            src={avatar}
            alt={"logo"}
            width={50}
            height={50}
            quality={100}
            // priority={true}
            loading="lazy"
            blurDataURL="true"
            className="border-4 rounded-full border-secondary"
          />
          <div className="">
            <AppSubTitle text={name} class_name="uppercase font-bold" />
            <AppDescription text={bio} />
          </div>
        </div>
        <Image
          src={secondaryImg}
          alt={"logo"}
          width={80}
          quality={100}
          // priority={true}
          loading="lazy"
          blurDataURL="true"
        />
      </div>
    </div>
  );
}

export default TestimonialItem;
