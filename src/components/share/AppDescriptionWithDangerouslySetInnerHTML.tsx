import { motion } from "framer-motion";
import React from "react";

function AppDescriptionWithDangerouslySetInnerHTML({ text, class_name }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity:1, }}
      transition={{
        delay: 0.05,
        duration: 0.1,
      }}
      viewport={{
        once: true,
      }}
      className={`text-base text-text ${class_name} `}
      dangerouslySetInnerHTML={{ __html: text }}
    ></motion.div>
  );
}

export default AppDescriptionWithDangerouslySetInnerHTML;
