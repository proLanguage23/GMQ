import { AppSubTitle } from "@/components/share";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function WhyGMQFetusesItem({ icon_img, text, ...rest }: any) {
  return (
    <motion.div
      className="flex justify-center items-center gap-1 p-2 group max-w-full w-full"
      {...rest}
    >
      <div className="bg-secondary flex justify-center items-center rounded-full w-16 h-16">
        <Image
          src={icon_img}
          alt={text}
          width={50}
          quality={100}
          // priority={true}
          loading="lazy"
          blurDataURL="true"
          className="p-1 group-hover:scale-95 scale-75 transition-all duration-500 ease-out hover:ease-in"
        />
      </div>
      <div className="flex-1 px-2">
      <AppSubTitle
        text={text}
        class_name=""
      />
      </div>
    </motion.div>
  );
}

export default WhyGMQFetusesItem;
