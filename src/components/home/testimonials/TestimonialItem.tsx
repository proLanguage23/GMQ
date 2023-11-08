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
    <div className="border rounded md:p-6 p-3">
      <AppDescriptionWithDangerouslySetInnerHTML
        text={messages}
        class_name="!text-text manropeFont"
      />
      <div className="mt-9 flex justify-between items-center flex-wrap">
        <div className=" flex justify-start items-center gap-3 flex-wrap">
          <Image
            src={avatar}
            alt={"logo"}
            width={50}
            height={50}
            quality={100}
            priority={true}
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
          priority={true}
        />
      </div>
    </div>
  );
}

export default TestimonialItem;
