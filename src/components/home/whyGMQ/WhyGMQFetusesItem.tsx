import { AppSubTitle } from "@/components/share";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function WhyGMQFetusesItem({ icon_img, text, ...rest }: any) {
  return (
    <motion.div
      className="flex flex-col justify-center items-center gap-3 p-2 group flex-wrap"
      {...rest}
    >
      <div className="bg-white flex justify-center items-center rounded-full w-20 h-20 ">
        <Image
          src={icon_img}
          alt={text}
          width={60}
          quality={100}
          // priority={true}
          loading="lazy"
          blurDataURL="true"
          className="p-1 group-hover:scale-100 scale-75 transition-all duration-500 ease-out hover:ease-in"
        />
      </div>
      <AppSubTitle
        text={text}
        class_name="text-white text-center"
      />
    </motion.div>
  );
}

export default WhyGMQFetusesItem;
