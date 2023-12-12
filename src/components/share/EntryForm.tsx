import React from "react";
import { motion } from "framer-motion";
import { AppDescriptionWithDangerouslySetInnerHTML } from ".";

function EntryForm({data}:any) {
  return (
    <motion.div
      className="border bg-[#F3F3FE] rounded overflow-hidden md:w-2/3 w-full p-3 m-2 h-[95vh] mt-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.3
      }}
      viewport={{
        once: true,
      }}
    >
      <AppDescriptionWithDangerouslySetInnerHTML text={data} class_name="h-full" />
    </motion.div>
  );
}

export default EntryForm;