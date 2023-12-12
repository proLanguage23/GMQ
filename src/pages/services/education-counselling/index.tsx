import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import {
  EducationCounsellingSectionThree,
  EducationCounsellingSectionTwo,
} from "@/components/student-services";
import EducationCounsellingSectionOne from "@/components/student-services/education-counselling/EducationCounsellingSectionOne";
import TestimonialSection from "@/components/testimonial";
import { EducationCounsellingBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from "@/assets/GetYourSkillsRecognized.png";
import PopUpElement from "@/components/share/section/PopUpElement";

function EducationCounsellingPage() {
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead
        title="Education Counselling - GMQ Global"
        description="Education Counselling - GMQ Global"
      />
      <AppSliderBanner data={EducationCounsellingBannerData} />
      <EducationCounsellingSectionOne />
      <EducationCounsellingSectionTwo />
      <EducationCounsellingSectionThree />
      {/* <CommonForm /> */}
      {/* <TestimonialSection /> */}
      {/* <PopUpElement data={popUpData} /> */}
    </>
  );
}

export default EducationCounsellingPage;
