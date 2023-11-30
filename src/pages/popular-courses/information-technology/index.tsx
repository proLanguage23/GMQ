import CommonForm from "@/components/contactForm/CommonForm";
import { InformationTechnologySectionOne, InformationTechnologySectionThree, InformationTechnologySectionTwo } from "@/components/courses";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import { informationTechnologyBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";

function InformationTechnologyPage() {
  return (
    <>
      <DynamicHead title="List of Top IT Courses in Global for International Students | Pathways to PR  - GMQ Global" description="List of Top IT Courses in Global for International Students | Pathways to PR  - GMQ Global" />
      <AppSliderBanner data={informationTechnologyBannerData} />
      <InformationTechnologySectionOne />
      <InformationTechnologySectionTwo />
      <InformationTechnologySectionThree />
      <CommonForm />
      <TestimonialSection />
      <VisitedForm data={contactFormOfHome} />
    </>
  );
}

export default InformationTechnologyPage;
