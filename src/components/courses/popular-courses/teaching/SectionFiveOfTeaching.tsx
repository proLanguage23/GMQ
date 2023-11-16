import { AppTitle, Container } from "@/components/share";
import AppAccordion from "@/components/share/section/AppAccordion";
import { TeachingDummyData } from "@/data/popular-courses/TeachingData";
import React from "react";

function SectionFiveOfTeaching() {
  const { SectionFiveOfTeaching } = TeachingDummyData;
  const { title, data } = SectionFiveOfTeaching;
  return (
    <div className="py-9">
      <Container>
        <AppTitle text={title} class_name="text-center" />
        <div className="mt-9">
          <AppAccordion data={data} />
        </div>
      </Container>
    </div>
  );
}

export default SectionFiveOfTeaching;
