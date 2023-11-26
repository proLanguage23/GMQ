import { Container } from "@/components/share";
import { RPL_stepData } from "@/data/RPL_Data";
import React from "react";
import AppImg from "@/components/share/AppImg";
import { motion } from "framer-motion";

function RPL_informationStep() {
  const { assets } = RPL_stepData;
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="py-16 relative bg-grayCustom">
        <Container>
          {/* <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
          {items?.map((item, key) => (
            <InformationItem
              key={key}
              {...item}
            />
          ))}
        </div> */}
          <div className="grid grid-cols-1 gap-9 justify-center items-center">
            {assets?.map((item, key) => (
              <AppImg key={key} src={item} class_name="w-full my-2" />
            ))}
          </div>
        </Container>
      </div>
    </motion.section>
  );
}

export default RPL_informationStep;
