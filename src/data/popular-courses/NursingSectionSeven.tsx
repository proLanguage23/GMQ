import React from "react";
import { NursingCourseDummyData } from "./NursingCourseData";
import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function NursingSectionSeven() {
  const { NursingSectionSeven } = NursingCourseDummyData;
  const { title, data } = NursingSectionSeven;
  return (
    <div className="py-16">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <AppTitle text={title} class_name="text-center md:w-2/3 w-full" />
          <div className="w-full mt-16">
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
        </div>
      </Container>
    </div>
  );
}

export default NursingSectionSeven;
