import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { ProfessionalYearProgramSectionOne, ProfessionalYearProgramSectionTwo } from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { ProfessionalYearProgramBannerBannerData, ProfessionalYearProgramBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'
import PopUpElement from "@/components/share/section/PopUpElement";

function ProfessionalYearProgramPage() {
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead title="Professional Year Program global | IT, Accounting &amp; Engineering |  - GMQ Global" description="Professional Year Program global | IT, Accounting &amp; Engineering |  - GMQ Global" />
      {/* <AppSliderBanner data={ProfessionalYearProgramBannerData} /> */}
      <div className="hidden md:block">
        <AppSliderBanner data={ProfessionalYearProgramBannerData} />
      </div>
      <div className="block md:hidden">
        <AppSliderBanner data={ProfessionalYearProgramBannerBannerData} />
      </div>
      <ProfessionalYearProgramSectionOne />
      <ProfessionalYearProgramSectionTwo />
      {/* <CommonForm /> */}
      {/* <TestimonialSection /> */}
      
    </>
  );
}

export default ProfessionalYearProgramPage;
