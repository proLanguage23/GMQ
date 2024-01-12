import { SkillsTestForm } from "@/components/rpl";
import { AppCourseBanner, DynamicHead } from "@/components/share";
import React from "react";

function GetYourSkillsRecognized() {
  return (
    <>
      <DynamicHead
        title="Get Your Skills Recognized - GMQ Global"
        description="Get Your Skills Recognized - GMQ Global"
      />
      <AppCourseBanner text={"get your skills recognized"} />
      <div className="bg-grayCustom py-16">
        <SkillsTestForm class_name="!h-fit" />
      </div>
    </>
  );
}

export default GetYourSkillsRecognized;
