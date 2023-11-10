import CommonForm from '@/components/contactForm/CommonForm';
import { DynamicHead } from '@/components/share';
import AppBannerImg from '@/components/share/AppBannerImg';
import VisaAndMigrationCounsellingSectionOne from '@/components/student-services/visa-and-migration-counselling/VisaAndMigrationCounsellingSectionOne';
import TestimonialSection from '@/components/testimonial';
import { VisaAndMigrationCounsellingDummyData } from '@/data/VisaAndMigrationCounsellingData';
import React from 'react'

function VisaAndMigrationCounsellingPage() {
  const { banner } = VisaAndMigrationCounsellingDummyData;
return (
  <>
    <DynamicHead title="visa and migration counselling - GMQ Global" />
    <AppBannerImg img={banner} text="visa and migration counselling - GMQ Global" />
    <VisaAndMigrationCounsellingSectionOne />
    <CommonForm />
    <TestimonialSection />
  </>
);
}

export default VisaAndMigrationCounsellingPage
