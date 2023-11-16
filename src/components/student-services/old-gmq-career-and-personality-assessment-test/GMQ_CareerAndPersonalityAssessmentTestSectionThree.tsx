import { Container } from "@/components/share";
import { GMQ_CareerAndPersonalityAssessmentTestDummyData } from "@/data/GMQ_CareerAndPersonalityAssessmentTestData";
import React from "react";
import GMQ_CareerAndPersonalityAssessmentTestSectionThree_Item from "./GMQ_CareerAndPersonalityAssessmentTestSection_Three/GMQ_CareerAndPersonalityAssessmentTestSectionThree_Item";

function GMQ_CareerAndPersonalityAssessmentTestSectionThree() {
  const { GMQ_CareerAndPersonalityAssessmentTestSectionThree } =
    GMQ_CareerAndPersonalityAssessmentTestDummyData;
  const { data } = GMQ_CareerAndPersonalityAssessmentTestSectionThree;
  return (
    <div className="py-16 bg-secondaryLight">
      <Container>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-4">
          {data?.map((item, key) => (
            <GMQ_CareerAndPersonalityAssessmentTestSectionThree_Item
              {...item}
              key={key}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default GMQ_CareerAndPersonalityAssessmentTestSectionThree;
