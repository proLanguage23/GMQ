import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { NaatiSectionOne, NaatiSectionThree, NaatiSectionTwo } from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { ProfessionalYearProgramData } from "@/data/BannerData";
import React from "react";

function NAATI_PAGE() {
  return (
    <>
      <DynamicHead title="Best PTE Online Courses |  - GMQ Global" />
      <AppSliderBanner data={ProfessionalYearProgramData} />
      <NaatiSectionOne />
      <NaatiSectionTwo />
      <NaatiSectionThree />
      <CommonForm />
      <TestimonialSection />
    </>
  );
}

export default NAATI_PAGE;
