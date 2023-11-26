import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { ProfessionalYearProgramDummyData } from "@/data/services/ProfessionalYearProgramData";
import React from "react";
import { motion } from "framer-motion";

function ProfessionalYearProgramSectionOne() {
  const { ProfessionalYearProgramSectionOne } =
    ProfessionalYearProgramDummyData;
  const { left, right } = ProfessionalYearProgramSectionOne;
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
        <LeftToRight
          title={left?.title}
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
          leftImageToRight
          heading
          alt={left?.title}
        />
      </Container>
    </motion.section>
  );
}

export default ProfessionalYearProgramSectionOne;
