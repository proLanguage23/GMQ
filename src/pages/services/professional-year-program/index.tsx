import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { ProfessionalYearProgramSectionOne, ProfessionalYearProgramSectionTwo } from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { ProfessionalYearProgramData } from "@/data/BannerData";
import React from "react";

function ProfessionalYearProgramPage() {
  return (
    <>
      <DynamicHead title="Professional Year Program global | IT, Accounting &amp; Engineering |  - GMQ Global" />
      <AppSliderBanner data={ProfessionalYearProgramData} />
      <ProfessionalYearProgramSectionOne />
      <ProfessionalYearProgramSectionTwo />
      <CommonForm />
      <TestimonialSection />
    </>
  );
}

export default ProfessionalYearProgramPage;