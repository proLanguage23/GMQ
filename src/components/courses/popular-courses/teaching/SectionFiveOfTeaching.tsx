import { AppTitle, Container } from "@/components/share";
import AppAccordion from "@/components/share/section/AppAccordion";
import { TeachingDummyData } from "@/data/popular-courses/TeachingData";
import React from "react";
import { motion } from "framer-motion";

function SectionFiveOfTeaching() {
  const { SectionFiveOfTeaching } = TeachingDummyData;
  const { title, data } = SectionFiveOfTeaching;
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
          <AppTitle text={title} class_name="text-center" />
          <div className="mt-9">
            <AppAccordion data={data} />
          </div>
        </Container>
      </div>
    </motion.section>
  );
}

export default SectionFiveOfTeaching;
