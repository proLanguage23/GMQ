import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { GroupTrainingDummyData } from "@/data/services/PTE_Data";
import React from "react";

function GROUP_TRAININGSectionOne() {
  const { GROUP_TRAININGSectionOne } = GroupTrainingDummyData;
  const { left, right } = GROUP_TRAININGSectionOne;
  return (
    <div className="py-9">
      <Container>
        <LeftToRight
          title={left?.title}
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
          leftImageToRight
          heading
        />
      </Container>
    </div>
  );
}

export default GROUP_TRAININGSectionOne;
