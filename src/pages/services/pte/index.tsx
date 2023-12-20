import CommonForm from '@/components/contactForm/CommonForm';
import { DynamicHead, VisitedForm } from '@/components/share';
import AppSliderBanner from '@/components/share/section/AppSliderBanner';
import { PTE_SectionOne, PTE_SectionThree, PTE_SectionTwo } from '@/components/student-services';
import TestimonialSection from '@/components/testimonial';
import {PTEBannerData, PTEMobileBannerData } from '@/data/BannerData';
import { contactFormOfPTE } from '@/data/ShareData';
import React from 'react'
import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'
import PopUpElement from '@/components/share/section/PopUpElement';

function PTE_Page() {
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead title="Best PTE Online Courses |  - GMQ Global" description="Best PTE Online Courses |  - GMQ Global" />
      {/* <AppSliderBanner data={PTEBannerData} /> */}
      <div className="hidden md:block">
        <AppSliderBanner data={PTEBannerData} />
      </div>
      <div className="block md:hidden">
        <AppSliderBanner data={PTEMobileBannerData} />
      </div>
      <PTE_SectionOne />
      <PTE_SectionTwo />
      <PTE_SectionThree />
      {/* <CommonForm /> */}
      {/* <TestimonialSection /> */}
      <PopUpElement data={popUpData} />
    </>
  )
}

export default PTE_Page;
