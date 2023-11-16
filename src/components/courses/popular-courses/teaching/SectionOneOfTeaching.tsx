import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { TeachingDummyData } from "@/data/popular-courses/TeachingData";
import React from "react";

function sectionOneOfTeaching() {
  const { SectionOneOfTeaching } = TeachingDummyData;
  const { left, right } = SectionOneOfTeaching;
  return (
    <div className="py-9">
      <Container>
        <LeftToRight tiny_mceEditor={left?.text} sideImg={right?.img} class_name="lg:gap-5" />
      </Container>
    </div>
  );
}

export default sectionOneOfTeaching;
