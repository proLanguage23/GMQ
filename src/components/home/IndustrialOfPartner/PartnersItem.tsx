import { AppOptimizeImage, AppSubTitle } from "@/components/share";
import AppImg from "@/components/share/AppImg";
import React from "react";
import subImgIcon from "@/assets/Partner/subImg.png";
import { motion } from "framer-motion";
import Image from "next/image";

function PartnersItem({
  img,
  subImg,
  partnersName,
  cricosNumber,
  class_name,
  ...rest
}: any) {
  return (
    <motion.div
      className={`w-full border p-5 rounded-2xl flex justify-center items-center flex-wrap gap-2 flex-col shadow hover:shadow-md bg-white relative ${class_name}`}
      {...rest}
    >
      <div className="w-full  flex justify-center items-center mb-4">
        <AppImg
          src={img}
          alt={partnersName}
          width={100}
          height={80}
          style={{ width: "100", height: "80px", objectFit: "contain" }}
        />
      </div>
      <div className="df">
        <AppSubTitle
          text={partnersName}
          class_name="text-center !text-[16px] font-medium"
        />
        <AppSubTitle
          text={"CRICOS NO: " + cricosNumber}
          class_name="text-center !text-[16px] "
        />
      </div>
      {subImg && (
        <AppImg
          src={subImgIcon}
          width={18}
          class_name="absolute top-3 right-3"
          isPlaceholder={false}
        />
      )}
    </motion.div>
  );
}

export default PartnersItem;
