import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { VisaAndMigrationCounsellingDummyData } from "@/data/VisaAndMigrationCounsellingData";
import React from "react";

function VisaAndMigrationCounsellingSectionThree() {
  const { VisaAndMigrationCounsellingSectionThree } =
    VisaAndMigrationCounsellingDummyData;
  const { left, right } = VisaAndMigrationCounsellingSectionThree;
  return (
    <div className="py-16">
      <Container>
        <LeftToRight
          tiny_mceEditor={right?.text}
          sideImg={left?.img}
          
        />
      </Container>
    </div>
  );
}

export default VisaAndMigrationCounsellingSectionThree;
