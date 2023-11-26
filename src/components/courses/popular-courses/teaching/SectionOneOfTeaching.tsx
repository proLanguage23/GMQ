import { AppTitle, Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { TeachingDummyData } from "@/data/popular-courses/TeachingData";
import React from "react";
import { motion } from "framer-motion";

function sectionOneOfTeaching() {
  const { SectionOneOfTeaching } = TeachingDummyData;
  const { left, right } = SectionOneOfTeaching;
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
          <div className="df">
            <AppTitle
              text={left?.title}
              heading
              class_name="text-center mb-3"
            />
          </div>
          <LeftToRight
            tiny_mceEditor={left?.text}
            sideImg={right?.img}
            alt={left?.title}
            class_name="lg:gap-5"
          />
        </Container>
      </div>
    </motion.section>
  );
}

export default sectionOneOfTeaching;
