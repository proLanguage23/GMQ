import { AppTitle, Container } from "@/components/share";
import AppAccordion from "@/components/share/section/AppAccordion";
import { hospitality_and_cookeryDummyData } from "@/data/popular-courses/hospitality_and_cookeryData";
import React from "react";

function CookeryCoursesSectionFour() {
  const { CookeryCoursesSectionFour } = hospitality_and_cookeryDummyData;
  const { title, data } = CookeryCoursesSectionFour;
  return (
    <div className="py-9">
      <Container>
        <div className="flex flex-col flex-wrap justify-center items-center">
          <AppTitle text={title} class_name="text-center" />
          <div className="w-full mt-9">
            <AppAccordion data={data} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CookeryCoursesSectionFour;
