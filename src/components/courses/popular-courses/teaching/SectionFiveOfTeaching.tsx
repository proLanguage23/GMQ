import { AppTitle, Container } from "@/components/share";
import AppAccordion from "@/components/share/section/AppAccordion";
import { TeachingDummyData } from "@/data/popular-courses/TeachingData";
import React from "react";
import { motion } from "framer-motion";

function SectionFiveOfTeaching() {
  const { SectionFiveOfTeaching } = TeachingDummyData;
  const { title, data } = SectionFiveOfTeaching;
  return (
    <section className="py-9 w-full">
      <Container>
        <AppTitle text={title} class_name="text-center" />
        <div className="mt-9">
          <AppAccordion data={data} />
        </div>
      </Container>
    </section>
  );
}

export default SectionFiveOfTeaching;
