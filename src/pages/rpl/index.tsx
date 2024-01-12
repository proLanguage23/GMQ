import { RPL_Certificate_Process, ViewQualification } from "@/components/rpl";
import RPL_About from "@/components/rpl/about";
import RPLBanner from "@/components/rpl/banner";
import RPL_informationStep from "@/components/rpl/rplInformationStep";
import RPL_Benefits from "@/components/rpl/rpl_Benefits/RPL_Benefits";
import RPL_FAQS from "@/components/rpl/rpl_FAQS/RPL_FAQS";
import SkillsTest from "@/components/rpl/skillsTest";
import { DynamicHead, VisitedForm } from "@/components/share";
// import { contactFormOfRPL } from "@/data/ShareData";
import React from "react";

function RPL_Page() {
  return (
    <>
      <DynamicHead title="Recognition of Prior Learning - GMQ Global" description="Recognition of prior learning-GMQ Global" />
      <RPLBanner />
      <SkillsTest />
      <RPL_informationStep />
      <RPL_About />
      {/* <AllQualifications /> */}
      <ViewQualification />
      <RPL_Certificate_Process />
      <RPL_Benefits />
      <RPL_FAQS />
    </>
  );
}

export default RPL_Page;
