import { AppTitle, Container } from "@/components/share";
import React from "react";
import CookeryCoursesSectionOneItem from "../CookeryCourse/subItem/CookeryCoursesSectionOneItem";
import { InformationTechnologyDummyData } from "@/data/popular-courses/InformationTechnologyData";

function InformationTechnologySectionOne() {
  const { InformationTechnologySectionOne } = InformationTechnologyDummyData;
  const { title, data } = InformationTechnologySectionOne;
  return (
    <div className="py-9">
      <Container>
        <AppTitle text={title} heading class_name="text-center capitalize" />
        <div className="md:flex flex-wrap justify-center items-center gap-2 mt-9 grid sm:grid-cols-2 grid-cols-1">
          {data?.map((item: any, key: any) => (
            <CookeryCoursesSectionOneItem {...item} key={key} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default InformationTechnologySectionOne;
