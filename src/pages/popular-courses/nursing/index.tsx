import CommonForm from "@/components/contactForm/CommonForm";
import NursingCourseSectionOne from "@/components/courses/popular-courses/NursingCourse/NursingCourseSectionOne";
import NursingCourseSectionThree from "@/components/courses/popular-courses/NursingCourse/NursingCourseSectionThree";
import NursingCourseSectionTwo from "@/components/courses/popular-courses/NursingCourse/NursingCourseSectionTwo";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import { NursingBannerData, NursingMobileBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from "@/assets/GetYourSkillsRecognized.png";
import PopUpElement from "@/components/share/section/PopUpElement";
import { NursingCourseAboutSection } from "@/components/courses";

function NursingPage() {
  const popUpData = {
    type: "image",
    img: GetYourSkillsRecognizedImg,
    text: "Get Your Skills Recognized",
    href: "/rpl/get-your-skills-recognized",
  };
  return (
    <>
      <DynamicHead
        title="Study Nursing Course in Australia: Top Nursing Courses, Colleges, Universities, Fees | - GMQ Global"
        description="Study Nursing Course in Australia: Top Nursing Courses, Colleges, Universities, Fees | - GMQ Global"
      />
      <div className="hidden md:block">
        <AppSliderBanner data={NursingBannerData} />
      </div>
      <div className="block md:hidden">
        <AppSliderBanner data={NursingMobileBannerData} />
      </div>
      {/* <NursingCourseSectionOne /> */}
      <NursingCourseAboutSection />
      <NursingCourseSectionTwo />
      <NursingCourseSectionThree />
      <CommonForm
        title="Help us in getting to know you better, fill it up!"
        des="Choose GMQ Global for professional educational counseling. Our vast expertise offers efficient guidance towards your objectives. Fill out the form and get in touch with one of our student counselors—you'll be glad you did!
"
      />
      {/* <TestimonialSection /> */}
      
    </>
  );
}

export default NursingPage;
