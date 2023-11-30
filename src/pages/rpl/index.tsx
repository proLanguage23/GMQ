import { ViewQualification } from "@/components/rpl";
import RPL_About from "@/components/rpl/about";
import RPLBanner from "@/components/rpl/banner";
import RPL_informationStep from "@/components/rpl/rplInformationStep";
import SkillsTest from "@/components/rpl/skillsTest";
import { DynamicHead, VisitedForm } from "@/components/share";
import { contactFormOfRPL } from "@/data/ShareData";
import React from "react";

function RPL_Page() {
  return (
    <>
      <DynamicHead title="RPL-GMQ Global" description="RPL-GMQ Global" />
      <RPLBanner />
      <SkillsTest />
      <RPL_informationStep />
      <RPL_About />
      {/* <AllQualifications /> */}
      <ViewQualification />
      {/* <VisitedForm data={contactFormOfRPL} /> */}
    </>
  );
}

export default RPL_Page;
