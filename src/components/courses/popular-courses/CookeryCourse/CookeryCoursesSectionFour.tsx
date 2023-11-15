import { AppTitle, Container } from "@/components/share";
import AppAccordion from "@/components/share/section/AppAccordion";
import { CookeryCoursesInAustraliaDummyData } from "@/data/popular-courses/cookeryCoursesInAustraliaData";
import React from "react";

function CookeryCoursesSectionFour() {
  const { CookeryCoursesSectionFour } = CookeryCoursesInAustraliaDummyData;
  const { title, data } = CookeryCoursesSectionFour;
  return (
    <div className="py-9">
      <Container>
        <div className="flex flex-col flex-wrap justify-center items-center">
          <AppTitle text={title} class_name="text-center" />
          <div className="w-full">
            <AppAccordion data={data} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CookeryCoursesSectionFour;
