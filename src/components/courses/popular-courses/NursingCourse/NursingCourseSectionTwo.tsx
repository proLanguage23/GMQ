import QualificationItemResult from "@/components/rpl/allQualifications/sub/QualificationItemResult";
import { AppTitle, Container } from "@/components/share";
import { NursingCourseDummyData } from "@/data/popular-courses/NursingCourseData";
import React from "react";
import { motion } from "framer-motion";

function NursingCourseSectionTwo() {
  const { NursingCourseSectionTwo } = NursingCourseDummyData;
  const { title, data } = NursingCourseSectionTwo;

  const PopUpContact = () => {
    alert("Pop Up Contact");
  };
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
      <div className="py-9 bg-grayCustom">
        <Container>
          <div className="flex flex-col justify-center items-center">
            <AppTitle
              text={title}
              class_name="text-center text-primary"
              heading
            />
            <div className="w-full gap-2 mt-6 flex justify-center flex-wrap">
              <QualificationItemResult allRPL_QualificationItems={data} class_name="lg:w-[24%] md:w-[32%] sm:w-[48%] w-[95%] max-w-[380px]" />
            </div>
          </div>
        </Container>
      </div>
    </motion.section>
  );
}

export default NursingCourseSectionTwo;
