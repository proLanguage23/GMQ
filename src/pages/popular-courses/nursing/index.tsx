import CommonForm from "@/components/contactForm/CommonForm";
import NursingCourseSectionOne from "@/components/courses/popular-courses/NursingCourse/NursingCourseSectionOne";
import NursingCourseSectionThree from "@/components/courses/popular-courses/NursingCourse/NursingCourseSectionThree";
import NursingCourseSectionTwo from "@/components/courses/popular-courses/NursingCourse/NursingCourseSectionTwo";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import { NursingBannerData } from "@/data/BannerData";
import React from "react";

function NursingPage() {
  return (
    <>
      <DynamicHead title="Study Nursing Course in Australia: Top Nursing Courses, Colleges, Universities, Fees | - GMQ Global" />
      <AppSliderBanner data={NursingBannerData} />
      <NursingCourseSectionOne />
      <NursingCourseSectionTwo />
      <NursingCourseSectionThree />
      <CommonForm />
      <TestimonialSection />
      <VisitedForm />
    </>
  );
}

export default NursingPage;
