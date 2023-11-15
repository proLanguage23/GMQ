import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { AppDescriptionWithDangerouslySetInnerHTML } from "..";

function AppAccordion({ data }: any) {
  return (
    <Accordion preExpanded={[0]}>
      {data?.map((item: any, key: any) => (
        <div key={key}>
          <AccordionItem uuid={key}>
            <AccordionItemHeading>
              <AccordionItemButton >{item?.title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <AppDescriptionWithDangerouslySetInnerHTML text={item?.text} />
            </AccordionItemPanel>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
}

export default AppAccordion;
