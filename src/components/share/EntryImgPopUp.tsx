import React from "react";
import { motion } from "framer-motion";
import { AppBgImg, AppDescriptionWithDangerouslySetInnerHTML, AppTitle, PageLink } from ".";
import AppImg from "./AppImg";
import Link from "next/link";
import { GeyYourSkillsRecognized } from "@/data/ShareData";

function EntryImgPopUp({ data, class_name }: any) {
  return (
    <motion.div
      className={`relative  rounded overflow-auto w-fit md:max-w-2/3 max-w-full m-2 h-fit max-h-[90vh] md:mt-11 mt-6 ${class_name}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.3,
      }}
      viewport={{
        once: true,
      }}
    >
      {/* <Link href={data?.href || "#"}>
        <AppImg
          src={data?.img}
          alt={data?.text}
          class_name="w-[500px] max-w-full rounded"
        />
      </Link> */}
      <div className=" md:w-[500px] sm:w-[430px] max-w-full py-14 md:px-9 p-5 flex flex-col justify-center items-start gap-3">
        <AppTitle text={GeyYourSkillsRecognized?.title} class_name="md:text-[45px] text-white appShadow text-left"  />
        <AppDescriptionWithDangerouslySetInnerHTML text={GeyYourSkillsRecognized?.description} class_name=" text-white appShadow w-2/3"  />
        <PageLink {...GeyYourSkillsRecognized?.btn} class_name="bg-primary py-3 md:w-fit w-full md:px-5 rounded-full text-white" />
      </div>
      <AppBgImg src={data?.img}
          alt={data?.text} />
    </motion.div>
  )
}

export default EntryImgPopUp
