import CommonForm from "@/components/contactForm/CommonForm";
import NursingCourseSectionOne from "@/components/courses/popular-courses/health-and-allied-health/NursingCourse/NursingCourseSectionOne";
import NursingCourseSectionThree from "@/components/courses/popular-courses/health-and-allied-health/NursingCourse/NursingCourseSectionThree";
import NursingCourseSectionTwo from "@/components/courses/popular-courses/health-and-allied-health/NursingCourse/NursingCourseSectionTwo";
import NursingSectionOne from "@/components/courses/popular-courses/health-and-allied-health/nursing/NursingSectionOne";
import { DynamicHead } from "@/components/share";
import AppBannerImg from "@/components/share/AppBannerImg";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import { NursingBannerData } from "@/data/BannerData";
import { NursingCourseDummyData } from "@/data/popular-courses/NursingCourseData";
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
    </>
  );
}

export default NursingPage;
