import { RPL_Certificate_Process, ViewQualification } from "@/components/rpl";
import RPL_About from "@/components/rpl/about";
import RPLBanner from "@/components/rpl/banner";
import RPL_informationStep from "@/components/rpl/rplInformationStep";
import SkillsTest from "@/components/rpl/skillsTest";
import { DynamicHead, VisitedForm } from "@/components/share";
// import { contactFormOfRPL } from "@/data/ShareData";
import React from "react";
// import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'

function RPL_Page() {
  // const popUpData = {
  //   type: "image",
  //   img : GetYourSkillsRecognizedImg,
  //   text: 'Get Your Skills Recognized',
  //   href: '/rpl'
  // }
  return (
    <>
      <DynamicHead title="RPL-GMQ Global" description="RPL-GMQ Global" />
      <RPLBanner />
      <SkillsTest />
      <RPL_informationStep />
      <RPL_About />
      {/* <AllQualifications /> */}
      <ViewQualification />
      <RPL_Certificate_Process />
      {/* <VisitedForm data={popUpData} /> */}
    </>
  );
}

export default RPL_Page;
