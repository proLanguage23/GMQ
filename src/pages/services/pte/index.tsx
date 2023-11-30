import CommonForm from '@/components/contactForm/CommonForm';
import { DynamicHead, VisitedForm } from '@/components/share';
import AppSliderBanner from '@/components/share/section/AppSliderBanner';
import { PTE_SectionOne, PTE_SectionThree, PTE_SectionTwo } from '@/components/student-services';
import TestimonialSection from '@/components/testimonial';
import {PTEBannerData } from '@/data/BannerData';
import { contactFormOfPTE } from '@/data/ShareData';
import React from 'react'

function PTE_Page() {
  return (
    <>
      <DynamicHead title="Best PTE Online Courses |  - GMQ Global" description="Best PTE Online Courses |  - GMQ Global" />
      <AppSliderBanner data={PTEBannerData} />
      <PTE_SectionOne />
      <PTE_SectionTwo />
      <PTE_SectionThree />
      <CommonForm />
      <TestimonialSection />
      <VisitedForm data={contactFormOfPTE} />
    </>
  )
}

export default PTE_Page;
