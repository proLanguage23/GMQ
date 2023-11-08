import CommonForm from '@/components/contactForm/CommonForm';
import { DynamicHead } from '@/components/share';
import AppBannerImg from '@/components/share/AppBannerImg';
import TestimonialSection from '@/components/testimonial';
import { WhichVisaIsRightForMeDummyData } from '@/data/ServiceMigrationServicesData';
import React from 'react'

function WhichVisaIsRightForMe() {
  const { banner } = WhichVisaIsRightForMeDummyData;
  return (
    <>
      <DynamicHead title="Visa Services | Migration Services-GMQ" />
      <AppBannerImg img={banner} text="Visa Services | Migration Services-GMQ" />
      <CommonForm />
      <TestimonialSection />
    </>
  );
}

export default WhichVisaIsRightForMe
