import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { OneToOneTrainingSectionOne, OneToOneTrainingSectionThree, OneToOneTrainingSectionTwo } from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { ProfessionalYearProgramData } from "@/data/BannerData";
import React from "react";

function OneToOneTrainingPage() {
  return (
    <>
      <DynamicHead title="Online PTE Training |  - GMQ Global" />
      <AppSliderBanner data={ProfessionalYearProgramData} />
      <OneToOneTrainingSectionOne />
      <OneToOneTrainingSectionTwo />
      <OneToOneTrainingSectionThree />
      <CommonForm />
      <TestimonialSection />
      <VisitedForm />
    </>
  );
}

export default OneToOneTrainingPage;
