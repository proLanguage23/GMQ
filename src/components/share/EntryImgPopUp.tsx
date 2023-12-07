import React from "react";
import { motion } from "framer-motion";
import { AppDescriptionWithDangerouslySetInnerHTML } from ".";
import AppImg from "./AppImg";
import Link from "next/link";

function EntryImgPopUp({ data, class_name }: any) {
  return (
    <motion.div
      className={`border bg-white rounded overflow-auto w-fit md:max-w-2/3 max-w-full p-3 m-2 h-fit max-h-[90vh] md:mt-11 mt-6 ${class_name}`}
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
      <Link href={data?.href || "#"}>
        <AppImg
          src={data?.img}
          alt={data?.text}
          class_name="w-[500px] max-w-full rounded"
        />
      </Link>
    </motion.div>
  )
}

export default EntryImgPopUp
