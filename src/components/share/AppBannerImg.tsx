import React from "react";
import Image from "next/image";

function AppBannerImg({ img, text }: any) {
  return (
    <div className="w-full h-auto">
      <Image
        src={img}
        alt={text || "AppBannerImg"}
        quality={100}
        priority={true}
        className="w-full"
        placeholder="blur"
      />
    </div>
  );
}

export default AppBannerImg;
