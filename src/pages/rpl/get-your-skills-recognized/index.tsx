import { SkillsTestForm } from "@/components/rpl";
import { AppCourseBanner } from "@/components/share";
import React from "react";

function GetYourSkillsRecognized() {
  return (
    <>
      <AppCourseBanner text={"get your skills recognized"} />
      <div className="bg-grayCustom py-16">
        <SkillsTestForm class_name='!h-fit' />
      </div>
    </>
  );
}

export default GetYourSkillsRecognized;
