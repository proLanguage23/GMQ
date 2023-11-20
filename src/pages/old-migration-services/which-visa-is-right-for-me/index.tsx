import CommonForm from '@/components/contactForm/CommonForm';
import WhichVisaIsRightForMeSectionEight from '@/components/migration-services/which-visa-is-right-for-me/WhichVisaIsRightForMeSectionEight';
import WhichVisaIsRightForMeSectionEleven from '@/components/migration-services/which-visa-is-right-for-me/WhichVisaIsRightForMeSectionEleven';
import WhichVisaIsRightForMeSectionFive from '@/components/migration-services/which-visa-is-right-for-me/WhichVisaIsRightForMeSectionFive';
import WhichVisaIsRightForMeSectionFour from '@/components/migration-services/which-visa-is-right-for-me/WhichVisaIsRightForMeSectionFour';
import WhichVisaIsRightForMeSectionNine from '@/components/migration-services/which-visa-is-right-for-me/WhichVisaIsRightForMeSectionNine';
import WhichVisaIsRightForMeSectionSeven from '@/components/migration-services/which-visa-is-right-for-me/WhichVisaIsRightForMeSectionSeven';
import WhichVisaIsRightForMeSectionSix from '@/components/migration-services/which-visa-is-right-for-me/WhichVisaIsRightForMeSectionSix';
import WhichVisaIsRightForMeSectionTen from '@/components/migration-services/which-visa-is-right-for-me/WhichVisaIsRightForMeSectionTen';
import WhichVisaIsRightForMeSectionThirteen from '@/components/migration-services/which-visa-is-right-for-me/WhichVisaIsRightForMeSectionThirteen';
import WhichVisaIsRightForMeSectionThree from '@/components/migration-services/which-visa-is-right-for-me/WhichVisaIsRightForMeSectionThree';
import WhichVisaIsRightForMeSectionTwelve from '@/components/migration-services/which-visa-is-right-for-me/WhichVisaIsRightForMeSectionTwelve';
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
      <DynamicHead title="Visa Services | Migration Services-GMQ Global" />
      <AppBannerImg img={banner} text="Visa Services | Migration Services-GMQ Global" />
      <WhichVisaIsRightForMeSectionTwo />
      <WhichVisaIsRightForMeSectionThree />
      <WhichVisaIsRightForMeSectionFour />
      <WhichVisaIsRightForMeSectionFive />
      <WhichVisaIsRightForMeSectionSix />
      <WhichVisaIsRightForMeSectionSeven />
      <WhichVisaIsRightForMeSectionEight />
      <WhichVisaIsRightForMeSectionNine />
      <WhichVisaIsRightForMeSectionTen />
      <WhichVisaIsRightForMeSectionEleven />
      <WhichVisaIsRightForMeSectionTwelve />
      <WhichVisaIsRightForMeSectionThirteen />
      <CommonForm />
      <TestimonialSection />
    </>
  );
}

export default WhichVisaIsRightForMePage
