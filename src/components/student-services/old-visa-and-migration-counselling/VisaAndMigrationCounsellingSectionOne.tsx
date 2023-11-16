import { AppDescriptionWithDangerouslySetInnerHTML, AppTitle, Container } from "@/components/share";
import { VisaAndMigrationCounsellingDummyData } from "@/data/VisaAndMigrationCounsellingData";
import React from "react";

function VisaAndMigrationCounsellingSectionOne() {
  const { VisaAndMigrationCounsellingSectionOne } =
    VisaAndMigrationCounsellingDummyData;
  const { title, text } = VisaAndMigrationCounsellingSectionOne;
  return (
    <div className="py-16">
      <Container>
        <div className="">
          <AppTitle text={title} class_name="text-center mb-9" />
          <AppDescriptionWithDangerouslySetInnerHTML text={text} />
        </div>
      </Container>
    </div>
  );
}

export default VisaAndMigrationCounsellingSectionOne;
