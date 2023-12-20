import { AppTitle, Container } from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { NursingCourseDummyData } from "@/data/popular-courses/NursingCourseData";
import React from "react";
import { motion } from "framer-motion";

function NursingCourseSectionThree() {
  const { NursingCourseSectionThree } = NursingCourseDummyData;
  const { title, img } = NursingCourseSectionThree;
  return (
    <section className="pt-9 w-full">
      <Container>
        <div className="flex flex-col justify-center items-center gap-5">
          <AppTitle text={title} class_name="" />
          <AppImg src={img} alt={title + " image"} className="w-full" />
        </div>
      </Container>
    </section>
  );
}

export default NursingCourseSectionThree;
