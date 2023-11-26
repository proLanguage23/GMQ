import {
  AppDescriptionWithDangerouslySetInnerHTML,
  Container,
} from "@/components/share";
import { InformationTechnologyDummyData } from "@/data/popular-courses/InformationTechnologyData";
import React from "react";
import { motion } from "framer-motion";

function InformationTechnologySectionThree() {
  const { InformationTechnologySectionThree } = InformationTechnologyDummyData;
  const { text } = InformationTechnologySectionThree;

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

export default InformationTechnologySectionThree;
