import { Container } from "@/components/share";
import { RWLDummyData } from "@/data/HomeRWLData";
import React from "react";
import RWL_item from "./RWL_item";
import { motion } from "framer-motion";

function HomeRWL() {
  const { rwlData } = RWLDummyData;
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
    <div className="bg-primary py-16">
      <Container>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-1 items-center justify-center">
          {rwlData?.map((item: any, key: any) => (
            <RWL_item key={key} {...item} />
          ))}
        </div>
      </Container>
    </div></motion.div>
  );
}

export default HomeRWL;
