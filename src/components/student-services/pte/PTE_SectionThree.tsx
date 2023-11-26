import { Container } from "@/components/share";
import React from "react";
import AdvantagesOfPTEAcademicExam from "./pteSubItem/AdvantagesOfPTEAcademicExam";
import WhyChooseGMQ from "./pteSubItem/WhyChooseGMQ";
import { motion } from "framer-motion";

function PTE_SectionThree() {
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
      <div className="py-9 bg-primary">
        <Container>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <AdvantagesOfPTEAcademicExam />
            <WhyChooseGMQ />
          </div>
        </Container>
      </div>
    </motion.div>
  );
}

export default PTE_SectionThree;
