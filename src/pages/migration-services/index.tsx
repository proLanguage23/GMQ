import CommonForm from "@/components/contactForm/CommonForm";
import MigrationServicesSectionFour from "@/components/migration-services/sectionFour/MigrationServicesSectionFour";
import MigrationServicesSectionOne from "@/components/migration-services/sectionOne/MigrationServicesSectionOne";
import MigrationServicesSectionThree from "@/components/migration-services/sectionThree/MigrationServicesSectionThree";
import MigrationServicesSectionTwo from "@/components/migration-services/sectionTwo/MigrationServicesSectionTwo";
import { DynamicHead } from "@/components/share";
import AppBannerImg from "@/components/share/AppBannerImg";
import TestimonialSection from "@/components/testimonial";
import { ServiceMigrationServicesDummyData } from "@/data/ServiceMigrationServicesData";
import React from "react";

function MigrationServicesPage() {
    const {banner} = ServiceMigrationServicesDummyData
  return (
    <>
      <DynamicHead title="Migration Services-GMQ" />
      <AppBannerImg img={banner} text='Migration Services-GMQ' />
      <MigrationServicesSectionOne />
      <MigrationServicesSectionTwo />
      <MigrationServicesSectionFour />
      <MigrationServicesSectionThree />
      <CommonForm />
      <TestimonialSection />
    </>
  );
}

export default MigrationServicesPage;
