import AppDescriptionWithDangerouslySetInnerHTML from "@/components/share/AppDescriptionWithDangerouslySetInnerHTML";
import Image from "next/image";
import React from "react";

function LogoArea({ whiteLogo, text, abn }: any) {
  return (
    <div className="flex flex-col gap-2 flex-wrap items-left lg:items-center">
      <div className="w-full flex justify-center lg:justify-start">
        <Image
          src={whiteLogo}
          alt={"logo"}
          width={180}
          quality={100}
          // priority={true}
          loading="lazy"
          blurDataURL="true"
        />
      </div>
      <AppDescriptionWithDangerouslySetInnerHTML
        text={abn}
        class_name="text-white lg:text-left text-center w-full"
      />
      <AppDescriptionWithDangerouslySetInnerHTML
        text={text}
        class_name="text-white lg:text-left text-center w-full"
      />
    </div>
  );
}

export default LogoArea;
