import {
  AppDescriptionWithDangerouslySetInnerHTML,
  Container,
} from "@/components/share";
import { ProfessionalYearProgramDummyData } from "@/data/services/ProfessionalYearProgramData";
import React from "react";

import { motion } from "framer-motion";

function ProfessionalYearProgramSectionTwo() {
  const { ProfessionalYearProgramSectionTwo } =
    ProfessionalYearProgramDummyData;
  const { text } = ProfessionalYearProgramSectionTwo;
  return (
    <motion.section
      className="py-9"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <Container>
        <AppDescriptionWithDangerouslySetInnerHTML text={text} />
      </Container>
    </motion.section>
  );
}

export default ProfessionalYearProgramSectionTwo;
