import {
  AppDescriptionWithDangerouslySetInnerHTML,
  Container,
} from "@/components/share";
import { TradeCourseDummyData } from "@/data/popular-courses/trade_courseData";
import React from "react";

function TradeCourseSectionThree() {
  const { TradeCourseSectionThree } = TradeCourseDummyData;
  const { text } = TradeCourseSectionThree;

  return (
    <div className="py-9">
      <Container>
        <AppDescriptionWithDangerouslySetInnerHTML text={text} />
      </Container>
    </div>
  );
}

export default TradeCourseSectionThree;
