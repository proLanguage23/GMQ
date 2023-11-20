import { DynamicHead } from '@/components/share';
import AppSliderBanner from '@/components/share/section/AppSliderBanner';
import { PTE_SectionOne, PTE_SectionTwo } from '@/components/student-services';
import { ProfessionalYearProgramData } from '@/data/BannerData';
import React from 'react'

function PTE_Page() {
  return (
    <>
      <DynamicHead title="Best PTE Online Courses |  - GMQ Global" />
      <AppSliderBanner data={ProfessionalYearProgramData} />
      <PTE_SectionOne />
      <PTE_SectionTwo />
    </>
  )
}

export default PTE_Page;
