import { Container } from "@/components/share";
import React from "react";
import ProgressiveApproach from "./subItems/ProgressiveApproach";
import WeHelpYouLearnBetter from "./subItems/WeHelpYouLearnBetter";
import { GroupTrainingDummyData } from "@/data/services/PTE_Data";

function GROUP_TRAININGSectionThree() {
  const { GROUP_TRAININGSectionThree } = GroupTrainingDummyData;
  const { left, right } = GROUP_TRAININGSectionThree;
  return (
    <div className="py-9">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <ProgressiveApproach left={left} />
          <WeHelpYouLearnBetter right={right} />
        </div>
      </Container>
    </div>
  );
}

export default GROUP_TRAININGSectionThree;
