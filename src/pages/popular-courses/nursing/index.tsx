import CommonForm from "@/components/contactForm/CommonForm";
import NursingCourseSectionOne from "@/components/courses/popular-courses/NursingCourse/NursingCourseSectionOne";
import NursingCourseSectionThree from "@/components/courses/popular-courses/NursingCourse/NursingCourseSectionThree";
import NursingCourseSectionTwo from "@/components/courses/popular-courses/NursingCourse/NursingCourseSectionTwo";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import { NursingBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'
import PopUpElement from "@/components/share/section/PopUpElement";

function NursingPage() {
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead title="Study Nursing Course in Australia: Top Nursing Courses, Colleges, Universities, Fees | - GMQ Global" description="Study Nursing Course in Australia: Top Nursing Courses, Colleges, Universities, Fees | - GMQ Global" />
      <AppSliderBanner data={NursingBannerData} />
      <NursingCourseSectionOne />
      <NursingCourseSectionTwo />
      <NursingCourseSectionThree />
      <CommonForm />
      <TestimonialSection />
      <PopUpElement data={popUpData} />
    </>
  );
}

export default NursingPage;
