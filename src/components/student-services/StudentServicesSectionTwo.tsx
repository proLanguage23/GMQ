import React from "react";
import { Container } from "../share";
import LeftToRight from "../share/section/LeftToRight";
import { StudentServicesDummyData } from "@/data/StudentServicesData";

function StudentServicesSectionTwo() {
  const { StudentServicesSectionTwo } = StudentServicesDummyData;
  const { left, right } = StudentServicesSectionTwo;
  return (
    <div className="py-16">
      <Container>
        <LeftToRight
          title={left?.title}
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
        />
      </Container>
    </div>
  );
}

export default StudentServicesSectionTwo;
