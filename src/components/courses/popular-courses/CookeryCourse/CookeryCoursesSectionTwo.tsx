import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { hospitality_and_cookeryDummyData } from "@/data/popular-courses/hospitality_and_cookeryData";
import React from "react";

function CookeryCoursesSectionTwo() {
  const { CookeryCoursesSectionTwo } = hospitality_and_cookeryDummyData;
  const { left, right } = CookeryCoursesSectionTwo;
  return (
    <div className="py-9">
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

export default CookeryCoursesSectionTwo;
