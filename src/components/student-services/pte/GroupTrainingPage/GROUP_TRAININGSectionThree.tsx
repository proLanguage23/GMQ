import { Container } from "@/components/share";
import React from "react";
import ProgressiveApproach from "./subItems/ProgressiveApproach";
import WeHelpYouLearnBetter from "./subItems/WeHelpYouLearnBetter";

function GROUP_TRAININGSectionThree() {
  return (
    <div className="py-9">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <ProgressiveApproach />
          <WeHelpYouLearnBetter />
        </div>
      </Container>
    </div>
  );
}

export default GROUP_TRAININGSectionThree;
