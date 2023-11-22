import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { ProfessionalYearProgramDummyData } from "@/data/services/ProfessionalYearProgramData";
import React from "react";

function ProfessionalYearProgramSectionOne() {
  const { ProfessionalYearProgramSectionOne } =
    ProfessionalYearProgramDummyData;
  const { left, right } = ProfessionalYearProgramSectionOne;
  return (
    <section className="py-9">
      <Container>
        <LeftToRight
          title={left?.title}
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
          leftImageToRight
          heading
        />
      </Container>
    </section>
  );
}

export default ProfessionalYearProgramSectionOne;
