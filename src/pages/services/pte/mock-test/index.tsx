import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { MockTestSectionOne, MockTestSectionThree, MockTestSectionTwo } from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { ProfessionalYearProgramData } from "@/data/BannerData";
import React from "react";

function MockTestPage() {
  return (
    <>
      <DynamicHead title="Online Mock Test with Score | Practice Online Test |  - GMQ Global" />
      <AppSliderBanner data={ProfessionalYearProgramData} />
      <MockTestSectionOne />
      <MockTestSectionTwo />
      <MockTestSectionThree />
      <CommonForm />
      <TestimonialSection />
    </>
  );
}

export default MockTestPage;
