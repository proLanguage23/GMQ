import { ViewQualification } from "@/components/rpl";
import RPL_About from "@/components/rpl/about";
import AllQualifications from "@/components/rpl/allQualifications";
import RPLBanner from "@/components/rpl/banner";
import RPL_informationStep from "@/components/rpl/rplInformationStep";
import SkillsTest from "@/components/rpl/skillsTest";
import { DynamicHead } from "@/components/share";
import React from "react";

function RPL_Page() {
  return (
    <>
      <DynamicHead title="RPL-GMQ Global" />
      <RPLBanner />
      <SkillsTest />
      <RPL_informationStep />
      <RPL_About />
      <AllQualifications />
      <ViewQualification />
    </>
  );
}

export default RPL_Page;
