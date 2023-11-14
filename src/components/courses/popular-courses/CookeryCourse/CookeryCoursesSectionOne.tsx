import { AppTitle, Container } from "@/components/share";
import { CookeryCoursesInAustraliaDummyData } from "@/data/popular-courses/cookeryCoursesInAustraliaData";
import React from "react";
import CookeryCoursesSectionOneItem from "./subItem/CookeryCoursesSectionOneItem";

function CookeryCoursesSectionOne() {
  const { CookeryCoursesSectionOne } = CookeryCoursesInAustraliaDummyData;
  const { title, data } = CookeryCoursesSectionOne;
  return (
    <div className="py-9">
      <Container>
        <AppTitle text={title} class_name="text-center" />
        <div className="md:flex flex-wrap justify-center items-center gap-2 mt-9 grid sm:grid-cols-2 grid-cols-1">
          {data?.map((item, key) => (
            <CookeryCoursesSectionOneItem {...item} key={key} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CookeryCoursesSectionOne;
