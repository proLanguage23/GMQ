import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { CookeryCoursesInAustraliaDummyData } from "@/data/popular-courses/cookeryCoursesInAustraliaData";
import React from "react";

function CookeryCoursesSectionTwo() {
  const { CookeryCoursesSectionTwo } = CookeryCoursesInAustraliaDummyData;
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
