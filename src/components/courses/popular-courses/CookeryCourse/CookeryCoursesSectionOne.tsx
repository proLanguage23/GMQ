import { AppTitle, Container } from "@/components/share";
import React from "react";
import CookeryCoursesSectionOneItem from "./subItem/CookeryCoursesSectionOneItem";
import { hospitality_and_cookeryDummyData } from "@/data/popular-courses/hospitality_and_cookeryData";

function CookeryCoursesSectionOne() {
  const { CookeryCoursesSectionOne } = hospitality_and_cookeryDummyData;
  const { title, data } = CookeryCoursesSectionOne;
  return (
    <div className="py-9">
      <Container>
        <AppTitle text={title} heading class_name="text-center capitalize" />
        <div className="md:flex flex-wrap justify-center items-center gap-2 mt-9 grid sm:grid-cols-2 grid-cols-1">
          {data?.map((item:any, key:any) => (
            <CookeryCoursesSectionOneItem {...item} key={key} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CookeryCoursesSectionOne;
