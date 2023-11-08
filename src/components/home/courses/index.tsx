import { AppTitle, Container } from "@/components/share";
import { HomeCoursesDummyData } from "@/data/HomeCoursesData";
import React from "react";
import CoursesItem from "./CoursesItem";

function HomeCourses() {
  const { title, subTitle, CoursesData } = HomeCoursesDummyData;
  return (
    <div className="bg-grayCustom">
      <Container>
        <div className="flex flex-col justify-center items-center py-16 flex-wrap">
          <AppTitle text={title} class_name="!text-center" />
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-8 w-full">
            {CoursesData?.map((item, key) => (
              <CoursesItem key={key} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeCourses;
