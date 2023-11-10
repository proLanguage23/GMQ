import { StudentServicesDummyData } from "@/data/StudentServicesData";
import React from "react";
import { Container } from "../share";
import CoursesItem from "../home/courses/CoursesItem";

function StudentServicesSectionThree() {
  const { StudentServicesSectionThree } = StudentServicesDummyData;
  const { courses } = StudentServicesSectionThree;
  return (
    <div className="py-16">
      <Container fullWidth>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mt-8 w-full">
          {courses?.map((item, key) => (
            <CoursesItem key={key} {...item} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default StudentServicesSectionThree;
