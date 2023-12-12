import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import {
  MockTestSectionOne,
  MockTestSectionThree,
  MockTestSectionTwo,
} from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { PTEMockTestBannerData } from "@/data/BannerData";
import { contactFormOfPTE } from "@/data/ShareData";
import React from "react";

import GetYourSkillsRecognizedImg from "@/assets/GetYourSkillsRecognized.png";
import PopUpElement from "@/components/share/section/PopUpElement";
function MockTestPage() {
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead
        title="Online Mock Test with Score | Practice Online Test |  - GMQ Global"
        description="Online Mock Test with Score | Practice Online Test |  - GMQ Global"
      />
      <AppSliderBanner data={PTEMockTestBannerData} />
      <MockTestSectionOne />
      <MockTestSectionTwo />
      <MockTestSectionThree />
      <CommonForm />
      <TestimonialSection />
      {/* <PopUpElement data={popUpData} /> */}
    </>
  );
}

export default MockTestPage;
