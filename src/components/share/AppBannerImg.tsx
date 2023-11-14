import React from "react";
import Image from "next/image";

function AppBannerImg({ img, text }: any) {
  return (
    <div className="w-full h-auto -z-1">
      <Image
        src={img}
        alt={text || "AppBannerImg"}
        quality={100}
        className="w-full"
        placeholder="blur"
        loading="lazy"
        blurDataURL="true"
      />
    </div>
  );
}

export default AppBannerImg;
