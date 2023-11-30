import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { MockTestSectionOne, MockTestSectionThree, MockTestSectionTwo } from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { PTEMockTestBannerData } from "@/data/BannerData";
import { contactFormOfPTE } from "@/data/ShareData";
import React from "react";

function MockTestPage() {
  return (
    <>
      <DynamicHead title="Online Mock Test with Score | Practice Online Test |  - GMQ Global" description="Online Mock Test with Score | Practice Online Test |  - GMQ Global" />
      <AppSliderBanner data={PTEMockTestBannerData} />
      <MockTestSectionOne />
      <MockTestSectionTwo />
      <MockTestSectionThree />
      <CommonForm />
      <TestimonialSection />
      <VisitedForm data={contactFormOfPTE} />
    </>
  );
}

export default MockTestPage;
