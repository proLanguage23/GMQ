import { Container } from "@/components/share";
import React from "react";
import ProgressiveApproach from "./subItems/ProgressiveApproach";
import WeHelpYouLearnBetter from "./subItems/WeHelpYouLearnBetter";
import { GroupTrainingDummyData } from "@/data/services/PTE_Data";
import { motion } from "framer-motion";

function GROUP_TRAININGSectionThree() {
  const { GROUP_TRAININGSectionThree } = GroupTrainingDummyData;
  const { left, right } = GROUP_TRAININGSectionThree;
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

export default GROUP_TRAININGSectionThree;
