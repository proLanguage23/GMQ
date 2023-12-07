import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import {
  GROUP_TRAININGSectionOne,
  GROUP_TRAININGSectionThree,
  GROUP_TRAININGSectionTwo,
} from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { PTEGroupTrainingBannerData } from "@/data/BannerData";
import { contactFormOfPTE } from "@/data/ShareData";
import React from "react";

import GetYourSkillsRecognizedImg from "@/assets/GetYourSkillsRecognized.png";
function GroupTrainingPage() {
  const popUpData = {
    type: "image",
    img: GetYourSkillsRecognizedImg,
    text: "Get Your Skills Recognized",
  };
  return (
    <>
      <DynamicHead
        title="PTE Online Group Coaching |  - GMQ Global"
        description="PTE Online Group Coaching |  - GMQ Global"
      />
      <AppSliderBanner data={PTEGroupTrainingBannerData} />
      <GROUP_TRAININGSectionOne />
      <GROUP_TRAININGSectionTwo />
      <GROUP_TRAININGSectionThree />
      <CommonForm />
      <TestimonialSection />
      <VisitedForm data={popUpData} />
    </>
  );
}

export default GroupTrainingPage;
