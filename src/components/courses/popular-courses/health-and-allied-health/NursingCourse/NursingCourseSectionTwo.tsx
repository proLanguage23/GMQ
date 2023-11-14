import CoursesItem from "@/components/home/courses/CoursesItem";
import OldCoursesItem from "@/components/home/courses/OldCoursesItem";
import { AppTitle, Container } from "@/components/share";
import { NursingCourseDummyData } from "@/data/popular-courses/NursingCourseData";
import React from "react";

function NursingCourseSectionTwo() {
  const { NursingCourseSectionTwo } = NursingCourseDummyData;
  const { title, data } = NursingCourseSectionTwo;

  const PopUpContact = () => {
    alert("Pop Up Contact");
  };
  return (
    <div className="py-9 bg-primary">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <AppTitle text={title} class_name="text-center text-white" />
          <div className="w-full grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-2 mt-6">
            {data?.map((item, key) => (
              <OldCoursesItem
                key={key}
                img={item?.img}
                title={item?.title}
                description={item?.text}
                iSPageLink={false}
                btn={item?.btn}
                handleClick={PopUpContact}
                btn_Class_name="rounded-full"
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NursingCourseSectionTwo;
