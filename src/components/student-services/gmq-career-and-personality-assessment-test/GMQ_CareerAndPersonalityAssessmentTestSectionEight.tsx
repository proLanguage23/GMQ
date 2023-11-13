import { AppBtn, AppTitle, Container, StepItem } from "@/components/share";
import { GMQ_CareerAndPersonalityAssessmentTestDummyData } from "@/data/GMQ_CareerAndPersonalityAssessmentTestData";
import React from "react";

function GMQ_CareerAndPersonalityAssessmentTestSectionEight() {
  const { GMQ_CareerAndPersonalityAssessmentTestSectionEight } =
    GMQ_CareerAndPersonalityAssessmentTestDummyData;
  const { title, data, btn } = GMQ_CareerAndPersonalityAssessmentTestSectionEight;
  return (
    <div className="py-16">
      <Container>
        <div className="flex flex-col justify-center items-center gap-8">
          <AppTitle text={title} class_name="w-2/3 text-center" />
          <div className="w-full md:px-9">
            {data?.map((item, key) => (
              <StepItem key={key} {...item} getLastValue={data?.length === key+1} />
            ))}
          </div>
          <AppBtn text={btn?.text} class_name="commonBtnStyle" />
        </div>
      </Container>
    </div>
  );
}

export default GMQ_CareerAndPersonalityAssessmentTestSectionEight;
