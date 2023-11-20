import Image from "next/image";
import React from "react";

function AppImg({ src, alt, class_name, ...rest }: any) {
  return (
    <Image
      src={src}
      alt={alt || "GMQ Global Image"}
      quality={100}
      loading="lazy"
      blurDataURL="true"
      placeholder='blur'
      className={`max-w-full ${class_name}`}
      {...rest}
    />
  );
}

export default AppImg;
