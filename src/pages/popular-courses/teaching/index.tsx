import CommonForm from "@/components/contactForm/CommonForm";
import { SectionFourOfTeaching, SectionOneOfTeaching, SectionThreeOfTeaching, SectionTwoOfTeaching } from "@/components/courses";
import { DynamicHead } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import { teachingBannerData } from "@/data/BannerData";
import React from "react";

function teaching() {
  return (
    <>
      <DynamicHead title="Study Nursing Course in Australia: Top Nursing Courses, Colleges, Universities, Fees | - GMQ Global" />
      <AppSliderBanner data={teachingBannerData} />
      <SectionOneOfTeaching />
      <SectionTwoOfTeaching />
      <SectionThreeOfTeaching />
      <SectionFourOfTeaching />
      <CommonForm />
      <TestimonialSection />
    </>
  );
}

export default teaching;
