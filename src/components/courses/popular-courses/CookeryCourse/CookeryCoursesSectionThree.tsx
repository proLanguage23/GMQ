import {
  AppDescriptionWithDangerouslySetInnerHTML,
  Container,
} from "@/components/share";
import { hospitality_and_cookeryDummyData } from "@/data/popular-courses/hospitality_and_cookeryData";
import React from "react";
import { motion } from "framer-motion";

function CookeryCoursesSectionThree() {
  const { CookeryCoursesSectionThree } = hospitality_and_cookeryDummyData;
  const { text } = CookeryCoursesSectionThree;

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
          <AppDescriptionWithDangerouslySetInnerHTML text={text} />
        </Container>
      </div>
    </motion.section>
  );
}

export default CookeryCoursesSectionThree;
