import React from "react";
import Image from "next/image";
import AppImg from "./AppImg";

function AppBannerImg({ img, text }: any) {
  return (
    <div className="w-full h-auto -z-1">
      <AppImg src={img} alt={text} blurDataURL="false" />
    </div>
  );
}

export default AppBannerImg;
