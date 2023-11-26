import { AppTitle, Container } from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { NursingCourseDummyData } from "@/data/popular-courses/NursingCourseData";
import React from "react";
import { motion } from "framer-motion";

function NursingCourseSectionThree() {
  const { NursingCourseSectionThree } = NursingCourseDummyData;
  const { title, img } = NursingCourseSectionThree;
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="py-9">
        <Container>
          <div className="flex flex-col justify-center items-center gap-5">
            <AppTitle text={title} />
            <AppImg src={img} alt={title + " image"} className="w-full mt-6" />
          </div>
        </Container>
      </div>
    </motion.section>
  );
}

export default NursingCourseSectionThree;
