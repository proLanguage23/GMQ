import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { NaatiSectionOne, NaatiSectionThree, NaatiSectionTwo } from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { NAATIBannerData, NAATIMobileBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'
import PopUpElement from "@/components/share/section/PopUpElement";

function NAATI_PAGE() {
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead title="Best PTE Online Courses |  - GMQ Global" />
      {/* <AppSliderBanner data={NAATIBannerData} /> */}
      <div className="hidden md:block">
        <AppSliderBanner data={NAATIBannerData} />
      </div>
      <div className="block md:hidden">
        <AppSliderBanner data={NAATIMobileBannerData} />
      </div>
      <NaatiSectionOne />
      <NaatiSectionTwo />
      <NaatiSectionThree />
      {/* <CommonForm /> */}
      {/* <TestimonialSection /> */}
      
    </>
  );
}

export default NAATI_PAGE;
