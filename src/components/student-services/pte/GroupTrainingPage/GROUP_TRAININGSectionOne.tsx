import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { GroupTrainingDummyData } from "@/data/services/PTE_Data";
import React from "react";
import { motion } from "framer-motion";

function GROUP_TRAININGSectionOne() {
  const { GROUP_TRAININGSectionOne } = GroupTrainingDummyData;
  const { left, right } = GROUP_TRAININGSectionOne;
  return (
    <motion.div
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
    </motion.div>
  );
}

export default GROUP_TRAININGSectionOne;
