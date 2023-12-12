import CommonForm from "@/components/contactForm/CommonForm";
import { InformationTechnologySectionOne, InformationTechnologySectionThree, InformationTechnologySectionTwo } from "@/components/courses";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import { informationTechnologyBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'
import PopUpElement from "@/components/share/section/PopUpElement";

function InformationTechnologyPage() {
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead title="List of Top IT Courses in Global for International Students | Pathways to PR  - GMQ Global" description="List of Top IT Courses in Global for International Students | Pathways to PR  - GMQ Global" />
      <AppSliderBanner data={informationTechnologyBannerData} />
      <InformationTechnologySectionOne />
      <InformationTechnologySectionTwo />
      <InformationTechnologySectionThree />
      <CommonForm title="If you think we can help your dreams, make sure to fill it up!" des="Choose GMQ Global for professional educational counseling. Our vast expertise offers efficient guidance towards your objectives. Fill out the form and get in touch with one of our career counselors—you'll be glad you did!" />
      {/* <TestimonialSection /> */}
      {/* <PopUpElement data={popUpData} /> */}
    </>
  );
}

export default InformationTechnologyPage;
