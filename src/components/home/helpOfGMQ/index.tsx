import { HomeHelpOfGMQData } from "@/data/HomeHelpOfGMQData";
import React from "react";
import { AllQualifications } from "@/components/rpl";
import { motion } from "framer-motion";

function HomeHelpOfGMQ() {
  const { title } = HomeHelpOfGMQData;
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <AllQualifications PropsText={title} />
    </motion.div>
  );
}

export default HomeHelpOfGMQ;
