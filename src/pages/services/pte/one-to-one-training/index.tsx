import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { OneToOneTrainingSectionOne, OneToOneTrainingSectionThree, OneToOneTrainingSectionTwo } from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { PTEOneToOneTrainingBannerData } from "@/data/BannerData";
import { contactFormOfPTE } from "@/data/ShareData";
import React from "react";

function OneToOneTrainingPage() {
  return (
    <>
      <DynamicHead title="Online PTE Training |  - GMQ Global" />
      <AppSliderBanner data={PTEOneToOneTrainingBannerData} />
      <OneToOneTrainingSectionOne />
      <OneToOneTrainingSectionTwo />
      <OneToOneTrainingSectionThree />
      <CommonForm />
      <TestimonialSection />
      <VisitedForm data={contactFormOfPTE} />
    </>
  );
}

export default OneToOneTrainingPage;
