import { Container } from "@/components/share";
import { MockTestDummyData } from "@/data/services/PTE_Data";
import React from "react";
import ProgressiveApproach from "../GroupTrainingPage/subItems/ProgressiveApproach";
import WeHelpYouLearnBetter from "../GroupTrainingPage/subItems/WeHelpYouLearnBetter";
import { motion } from "framer-motion";

function MockTestSectionThree() {
  const { MockTestSectionThree } = MockTestDummyData;
  const { left, right } = MockTestSectionThree;
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
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <ProgressiveApproach left={left} />
            <WeHelpYouLearnBetter right={right} />
          </div>
        </Container>
      </div>
    </motion.section>
  );
}

export default MockTestSectionThree;
