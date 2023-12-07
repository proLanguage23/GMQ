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
import { teachingBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";

import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'
import PopUpElement from "@/components/share/section/PopUpElement";
function teaching() {
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead title="Study Nursing Course in Australia: Top Nursing Courses, Colleges, Universities, Fees | - GMQ Global" description="Study Nursing Course in Australia: Top Nursing Courses, Colleges, Universities, Fees | - GMQ Global" />
      <AppSliderBanner data={teachingBannerData} />
      <SectionOneOfTeaching />
      <SectionTwoOfTeaching />
      <SectionThreeOfTeaching />
      <SectionFourOfTeaching />
      <SectionFiveOfTeaching />
      <CommonForm />
      <TestimonialSection />
      <PopUpElement data={popUpData} />
    </>
  );
}

export default teaching;
