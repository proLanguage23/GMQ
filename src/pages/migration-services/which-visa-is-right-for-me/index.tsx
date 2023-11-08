import CommonForm from '@/components/contactForm/CommonForm';
import WhichVisaIsRightForMeSectionFour from '@/components/migration-services/which-visa-is-right-for-me/WhichVisaIsRightForMeSectionFour';
import WhichVisaIsRightForMeSectionThree from '@/components/migration-services/which-visa-is-right-for-me/WhichVisaIsRightForMeSectionThree';
import WhichVisaIsRightForMeSectionTwo from '@/components/migration-services/which-visa-is-right-for-me/WhichVisaIsRightForMeSectionTwo';
import { DynamicHead } from '@/components/share';
import AppBannerImg from '@/components/share/AppBannerImg';
import TestimonialSection from '@/components/testimonial';
import { WhichVisaIsRightForMeDummyData } from '@/data/ServiceMigrationServicesData';
import React from 'react'

function WhichVisaIsRightForMePage() {
  const { banner } = WhichVisaIsRightForMeDummyData;
  return (
    <>
      <DynamicHead title="Visa Services | Migration Services-GMQ" />
      <AppBannerImg img={banner} text="Visa Services | Migration Services-GMQ" />
      <WhichVisaIsRightForMeSectionTwo />
      <WhichVisaIsRightForMeSectionThree />
      <WhichVisaIsRightForMeSectionFour />
      <CommonForm />
      <TestimonialSection />
    </>
  );
}

export default WhichVisaIsRightForMePage
