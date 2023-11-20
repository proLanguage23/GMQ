import { Container } from "@/components/share";
import React from "react";
import AdvantagesOfPTEAcademicExam from "./pteSubItem/AdvantagesOfPTEAcademicExam";
import WhyChooseGMQ from "./pteSubItem/WhyChooseGMQ";

function PTE_SectionThree() {
  return (
    <div className="py-9 bg-primary">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <AdvantagesOfPTEAcademicExam />
          <WhyChooseGMQ />
        </div>
      </Container>
    </div>
  );
}

export default PTE_SectionThree;
