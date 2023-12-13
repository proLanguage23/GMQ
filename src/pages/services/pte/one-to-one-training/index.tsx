import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import {
  OneToOneTrainingSectionOne,
  OneToOneTrainingSectionThree,
  OneToOneTrainingSectionTwo,
} from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { PTEOneToOneTrainingBannerData } from "@/data/BannerData";
import { contactFormOfPTE } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from "@/assets/GetYourSkillsRecognized.png";
import PopUpElement from "@/components/share/section/PopUpElement";

function OneToOneTrainingPage() {
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead
        title="Online PTE Training |  - GMQ Global"
        description="Online PTE Training |  - GMQ Global"
      />
      <AppSliderBanner data={PTEOneToOneTrainingBannerData} />
      <OneToOneTrainingSectionOne />
      <OneToOneTrainingSectionTwo />
      <OneToOneTrainingSectionThree />
      <CommonForm />
      <TestimonialSection />
      <PopUpElement data={popUpData} />
    </>
  );
}

export default OneToOneTrainingPage;
