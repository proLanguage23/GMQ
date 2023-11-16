import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { TradeCourseDummyData } from "@/data/popular-courses/trade_courseData";
import React from "react";

function TradeCourseSectionTwo() {
  const { TradeCourseSectionTwo } = TradeCourseDummyData;
  const { left, right } = TradeCourseSectionTwo;
  return (
    <div className="py-9">
      <Container>
        <LeftToRight
          title={left?.title}
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
          leftImageToRight
        />
      </Container>
    </div>
  );
}

export default TradeCourseSectionTwo;
