import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { ScholarshipsDummyData } from "@/data/ScholarshipsData";
import React from "react";

function ScholarshipsSectionOne() {
  const { ScholarshipsSectionOne } = ScholarshipsDummyData;
  const { left, right } = ScholarshipsSectionOne;
  return (
    <div className=" py-16">
      <Container>
        <LeftToRight
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
          leftImageToRight
        />
      </Container>
    </div>
  );
}

export default ScholarshipsSectionOne;
