import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
  Container,
} from "@/components/share";
import { GMQ_CareerAndPersonalityAssessmentTestDummyData } from "@/data/GMQ_CareerAndPersonalityAssessmentTestData";
import React from "react";

function GMQ_CareerAndPersonalityAssessmentTestSectionFour() {
  const { GMQ_CareerAndPersonalityAssessmentTestSectionFour } =
    GMQ_CareerAndPersonalityAssessmentTestDummyData;
  const { title, data } = GMQ_CareerAndPersonalityAssessmentTestSectionFour;
  return (
    <div className="py-16">
      <Container>
        <AppTitle text={title} class_name="text-center" />
        <div className="py-9 grid sm:grid-cols-2 gap-3 grid-cols-1">
          {data?.map((item, key) => (
            <div
              className="p-5 rounded border shadow group hover:bg-secondary transition-all flex justify-between items-center gap-2 flex-col sm:flex-row"
              key={key}
            >
              <div className="flex justify-center items-center bg-primary rounded-full w-16 h-16">
                <AppDescriptionWithDangerouslySetInnerHTML
                  text={key+1}
                  class_name="font-medium text-primary group-hover:text-white transition-all !text-[32px] text-white"
                />
              </div>
              <div className="flex-1">
                <AppDescriptionWithDangerouslySetInnerHTML
                  text={item?.title}
                  class_name="font-medium text-primary group-hover:text-white transition-all !text-[18px] mb-1 text-center sm:text-left"
                />
                <AppDescriptionWithDangerouslySetInnerHTML
                  text={item?.text}
                  class_name="group-hover:text-white transition-all text-center sm:text-left"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default GMQ_CareerAndPersonalityAssessmentTestSectionFour;
