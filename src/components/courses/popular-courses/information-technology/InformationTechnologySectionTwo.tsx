import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { InformationTechnologyDummyData } from "@/data/popular-courses/InformationTechnologyData";
import React from "react";
import { motion } from "framer-motion";

function InformationTechnologySectionTwo() {
  const { InformationTechnologySectionTwo } = InformationTechnologyDummyData;
  const { left, right } = InformationTechnologySectionTwo;
  return (
    <section className="py-9 w-full">
      <Container>
        <LeftToRight
          title={left?.title}
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
          leftImageToRight
          alt={left?.title}
        />
      </Container>
    </section>
  );
}

export default InformationTechnologySectionTwo;
