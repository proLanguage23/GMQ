import CommonForm from '@/components/contactForm/CommonForm'
import { DynamicHead } from '@/components/share'
import AppSliderBanner from '@/components/share/section/AppSliderBanner'
import TestimonialSection from '@/components/testimonial'
import { teachingBannerData } from '@/data/BannerData'
import React from 'react'

function teaching() {
  return (
    <>
      <DynamicHead title="Study Nursing Course in Australia: Top Nursing Courses, Colleges, Universities, Fees | - GMQ Global" />
      <AppSliderBanner data={teachingBannerData} />

      <CommonForm />
      <TestimonialSection />
    </>
  )
}

export default teaching
