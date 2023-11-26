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
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-2 mt-6">
              <QualificationItemResult allRPL_QualificationItems={data} />
            </div>
          </div>
        </Container>
      </div>
    </motion.section>
  );
}

export default NursingCourseSectionTwo;
