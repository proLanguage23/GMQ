import Image from "next/image";
import React from "react";

function AppImg({ src, alt, class_name, ...rest }: any) {
  return (
    <Image
      src={src}
      alt={alt + ' image' || "image of GMQ Global"}
      quality={100}
      loading="lazy"
      placeholder='blur'
      blurDataURL="true"
      className={`max-w-full ${class_name}`}
      {...rest}
    />
  );
}

export default AppImg;
