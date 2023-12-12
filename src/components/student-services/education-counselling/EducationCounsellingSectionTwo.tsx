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
  const { left, right, title, } = EducationCounsellingSectionTwo;
  return (

      <section className="py-9 w-full">
        <Container>
          <div className="flex justify-center items-center flex-col mb-7 gap-4">
            <AppTitle text={title} class_name="text-center" />
          </div>
          <LeftToRight
            tiny_mceEditor={left?.text}
            sideImg={right?.img}
            leftImageToRight
            alt={title}
          />
        </Container>
      </section>
  );
}

export default EducationCounsellingSectionTwo;
