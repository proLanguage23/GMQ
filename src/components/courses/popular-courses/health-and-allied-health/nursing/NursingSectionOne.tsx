import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { NursingCourseDummyData } from "@/data/popular-courses/NursingCourseData";
import React from "react";

function NursingSectionOne() {
  const { NursingSectionOne } = NursingCourseDummyData;
  const { left, right } = NursingSectionOne;
  return (
    <div className="py-16">
      <Container>
        <div className="df">
          <LeftToRight
            title={right?.title}
            tiny_mceEditor={right?.text}
            sideImg={left?.img}
          />
        </div>
      </Container>
    </div>
  );
}

export default NursingSectionOne;
