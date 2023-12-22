import { AppTitle, Container } from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { NursingCourseDummyData } from "@/data/popular-courses/NursingCourseData";
import React from "react";
import { motion } from "framer-motion";
import PathwayItem from "./subSectionItem/PathwayItem";

function NursingCourseSectionThree() {
  const { NursingCourseSectionThree } = NursingCourseDummyData;
  const { title, img, data } = NursingCourseSectionThree;
  return (
    <section className="py-9 w-full">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <AppTitle text={title} class_name="" />
          <AppImg src={img} alt={title + " image"} className="!w-full md:mt-2" />
          {/* <div className="gri grid-cols-1 mt-9">
          {
            data?.map((item:any, key:any)=> <PathwayItem key={key} {...item} /> )
          }
          </div> */}
        </div>
      </Container>
    </section>
  );
}

export default NursingCourseSectionThree;
