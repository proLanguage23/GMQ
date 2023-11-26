import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { OneToOneTrainingDummyData } from "@/data/services/PTE_Data";
import React from "react";
import { motion } from "framer-motion";

function OneToOneTrainingSectionOne() {
  const { OneToOneTrainingSectionOne } = OneToOneTrainingDummyData;
  const { left, right } = OneToOneTrainingSectionOne;
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
      <div className="py-9">
        <Container>
          <LeftToRight
            title={left?.title}
            tiny_mceEditor={left?.text}
            sideImg={right?.img}
            leftImageToRight
            heading
            alt={left?.title}
          />
        </Container>
      </div>
    </motion.section>
  );
}

export default OneToOneTrainingSectionOne;
