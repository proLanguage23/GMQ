import React from "react";
import { Container } from "../share";
import LeftToRight from "../share/section/LeftToRight";
import { StudentServicesDummyData } from "@/data/StudentServicesData";

function StudentServicesSectionOne() {
  const { StudentServicesSectionOne } = StudentServicesDummyData;
  const { left, right } = StudentServicesSectionOne;
  return (
    <div className="py-16">
      <Container>
        <LeftToRight
          title={left?.title}
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
          leftImageToRight
        />
      </Container>
    </div>
  );
}

export default StudentServicesSectionOne;
