import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead } from "@/components/share";
import AppBannerImg from "@/components/share/AppBannerImg";
import EducationCounsellingSectionOne from "@/components/student-services/education-counselling/EducationCounsellingSectionOne";
import TestimonialSection from "@/components/testimonial";
import { EducationCounsellingDummyData } from "@/data/EducationCounsellingData";
import React from "react";

function EducationCounsellingPage() {
  const { banner } = EducationCounsellingDummyData;
  return (
    <>
      <DynamicHead title="Education Counselling - GMQ Global" />
      <AppBannerImg img={banner} text="Education Counselling - GMQ Global" />
      <EducationCounsellingSectionOne />
      <CommonForm />
      <TestimonialSection />
    </>
  );
}

export default EducationCounsellingPage;
