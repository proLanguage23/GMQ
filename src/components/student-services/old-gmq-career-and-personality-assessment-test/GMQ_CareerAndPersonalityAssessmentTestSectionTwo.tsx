import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { GMQ_CareerAndPersonalityAssessmentTestDummyData } from "@/data/GMQ_CareerAndPersonalityAssessmentTestData";
import React from "react";

function GMQ_CareerAndPersonalityAssessmentTestSectionTwo() {
  const { GMQ_CareerAndPersonalityAssessmentTestSectionTwo } =
    GMQ_CareerAndPersonalityAssessmentTestDummyData;
  const { right, left } = GMQ_CareerAndPersonalityAssessmentTestSectionTwo;
  return (
    <div className="">
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

export default GMQ_CareerAndPersonalityAssessmentTestSectionTwo;
