import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { NaatiSectionOne, NaatiSectionThree, NaatiSectionTwo } from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { ProfessionalYearProgramBannerData } from "@/data/BannerData";
import React from "react";

function NAATI_PAGE() {
  return (
    <>
      <DynamicHead title="Best PTE Online Courses |  - GMQ Global" />
      <AppSliderBanner data={ProfessionalYearProgramBannerData} />
      <NaatiSectionOne />
      <NaatiSectionTwo />
      <NaatiSectionThree />
      <CommonForm />
      <TestimonialSection />
      <VisitedForm />
    </>
  );
}

export default NAATI_PAGE;
