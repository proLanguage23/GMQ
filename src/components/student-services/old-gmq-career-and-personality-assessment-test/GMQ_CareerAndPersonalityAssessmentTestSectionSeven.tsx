import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import { GMQ_CareerAndPersonalityAssessmentTestDummyData } from "@/data/GMQ_CareerAndPersonalityAssessmentTestData";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function GMQ_CareerAndPersonalityAssessmentTestSectionSeven() {
  const { GMQ_CareerAndPersonalityAssessmentTestSectionSeven } =
    GMQ_CareerAndPersonalityAssessmentTestDummyData;
  const { title, data } = GMQ_CareerAndPersonalityAssessmentTestSectionSeven;
  return (
    <div className="py-16">
      <Container>
        <AppTitle text={title} class_name="text-center mb-16" />
        <div className="fd">
          <Accordion>
            {data?.map((item, key) => (
              <div key={key}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item?.title}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <AppDescriptionWithDangerouslySetInnerHTML
                      text={item?.text}
                    />
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
}

export default GMQ_CareerAndPersonalityAssessmentTestSectionSeven;
