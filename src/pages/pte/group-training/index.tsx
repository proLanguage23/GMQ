import CommonForm from '@/components/contactForm/CommonForm'
import { DynamicHead } from '@/components/share'
import AppSliderBanner from '@/components/share/section/AppSliderBanner'
import { GROUP_TRAININGSectionOne, GROUP_TRAININGSectionThree, GROUP_TRAININGSectionTwo } from '@/components/student-services'
import TestimonialSection from '@/components/testimonial'
import { ProfessionalYearProgramData } from '@/data/BannerData'
import React from 'react'

function GroupTrainingPage() {
  return (
    <>
      <DynamicHead title="PTE Online Group Coaching |  - GMQ Global" />
      <AppSliderBanner data={ProfessionalYearProgramData} />
      <GROUP_TRAININGSectionOne />
      <GROUP_TRAININGSectionTwo />
      <GROUP_TRAININGSectionThree />
      <CommonForm />
      <TestimonialSection />
    </>
  )
}

export default GroupTrainingPage
