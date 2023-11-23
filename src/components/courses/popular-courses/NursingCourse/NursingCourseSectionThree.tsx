import { AppTitle, Container } from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { NursingCourseDummyData } from "@/data/popular-courses/NursingCourseData";
import React from "react";

function NursingCourseSectionThree() {
  const { NursingCourseSectionThree } = NursingCourseDummyData;
  const { title, img } = NursingCourseSectionThree;
  return (
    <div className="py-9">
      <Container>
        <div className="flex flex-col justify-center items-center gap-5">
          <AppTitle text={title} />
          <AppImg src={img} alt={title + ' image'} className="w-full mt-6" />
        </div>
      </Container>
    </div>
  );
}

export default NursingCourseSectionThree;
