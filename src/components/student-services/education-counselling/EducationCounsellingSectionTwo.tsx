import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { EducationCounsellingDummyData } from "@/data/EducationCounsellingData";
import React from "react";
import { motion } from "framer-motion";

function EducationCounsellingSectionTwo() {
  const { EducationCounsellingSectionTwo } = EducationCounsellingDummyData;
  const { left, right, title, description } = EducationCounsellingSectionTwo;
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
      <div className="py-16">
        <Container>
          <div className="flex justify-center items-center flex-col mb-7 gap-4">
            <AppTitle text={title} class_name="text-center" />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={description}
              class_name="text-center"
            />
          </div>
          <LeftToRight
            tiny_mceEditor={left?.text}
            sideImg={right?.img}
            leftImageToRight
            alt={title}
          />
        </Container>
      </div>
    </motion.section>
  );
}

export default EducationCounsellingSectionTwo;
