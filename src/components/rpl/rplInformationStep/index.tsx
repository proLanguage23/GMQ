import { Container } from "@/components/share";
import { RPL_stepData } from "@/data/RPL_Data";
import React from "react";
import AppImg from "@/components/share/AppImg";
import { motion } from "framer-motion";

function RPL_informationStep() {
  const { assets } = RPL_stepData;
  return (
    // #126265
    <section className=" w-full">
      <Container>
        <div className="grid grid-cols-1 gap-9 justify-center items-center md:scale-90">
          {assets?.map((item, key) => (
            <AppImg key={key} src={item} class_name="w-full my-2" />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default RPL_informationStep;
