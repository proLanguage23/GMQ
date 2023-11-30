import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { ProfessionalYearProgramSectionOne, ProfessionalYearProgramSectionTwo } from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { ProfessionalYearProgramBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";

function ProfessionalYearProgramPage() {
  return (
    <>
      <DynamicHead title="Professional Year Program global | IT, Accounting &amp; Engineering |  - GMQ Global" description="Professional Year Program global | IT, Accounting &amp; Engineering |  - GMQ Global" />
      <AppSliderBanner data={ProfessionalYearProgramBannerData} />
      <ProfessionalYearProgramSectionOne />
      <ProfessionalYearProgramSectionTwo />
      <CommonForm />
      <TestimonialSection />
      <VisitedForm data={contactFormOfHome} />
    </>
  );
}

export default ProfessionalYearProgramPage;
