import CommonForm from "@/components/contactForm/CommonForm";
import {
  SectionFiveOfTeaching,
  SectionFourOfTeaching,
  SectionOneOfTeaching,
  SectionThreeOfTeaching,
  SectionTwoOfTeaching,
} from "@/components/courses";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import {
  teachingBannerData,
  teachingMobileBannerData,
} from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";

import GetYourSkillsRecognizedImg from "@/assets/GetYourSkillsRecognized.png";
import PopUpElement from "@/components/share/section/PopUpElement";
function teaching() {
  const popUpData = {
    type: "image",
    img: GetYourSkillsRecognizedImg,
    text: "Get Your Skills Recognized",
    href: "/rpl/get-your-skills-recognized",
  };
  return (
    <>
      <DynamicHead
        title="Teaching - GMQ Global"
        description="Teaching - GMQ Global"
      />
      <div className="hidden md:block">
        <AppSliderBanner data={teachingBannerData} />
      </div>
      <div className="block md:hidden">
        <AppSliderBanner data={teachingMobileBannerData} />
      </div>
      <SectionOneOfTeaching />
      <SectionTwoOfTeaching />
      <SectionThreeOfTeaching />
      <SectionFourOfTeaching />
      <SectionFiveOfTeaching />
      {/* <CommonForm /> */}
      {/* <TestimonialSection /> */}
      
    </>
  );
}

export default teaching;
