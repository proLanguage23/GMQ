import CommonForm from "@/components/contactForm/CommonForm";
import VisaServicesSectionFour from "@/components/migration-services/visaServices/VisaServicesSectionFour";
import VisaServicesSectionThree from "@/components/migration-services/visaServices/VisaServicesSectionThree";
import VisaServicesSectionTwo from "@/components/migration-services/visaServices/VisaServicesSectionTwo";
import { DynamicHead } from "@/components/share";
import AppBannerImg from "@/components/share/AppBannerImg";
import TestimonialSection from "@/components/testimonial";
import { ServiceMigrationServicesDummyData } from "@/data/ServiceMigrationServicesData";
import React from "react";

function VisaServicesPage() {
  const { banner } = ServiceMigrationServicesDummyData;
  return (
    <>
      <DynamicHead title="Visa Services | Migration Services-GMQ" />
      <AppBannerImg img={banner} text="Visa Services | Migration Services-GMQ" />
      <VisaServicesSectionTwo />
      <VisaServicesSectionThree />
      <VisaServicesSectionFour />
      <CommonForm />
      <TestimonialSection />
    </>
  );
}

export default VisaServicesPage;
