import RPL_AllQualificationsList from '@/components/rpl/allQualifications/RPL_AllQualificationsList';
import { AppCourseBanner, DynamicHead, VisitedForm } from '@/components/share'
import React from 'react'

function Qualifications() {
  return (
    <>
      <DynamicHead title="RPL Qualifications-GMQ Global" description="RPL Qualifications-GMQ Global" />
      <AppCourseBanner text={"RPL Qualifications"} />
      <RPL_AllQualificationsList />
      <VisitedForm />
    </>
  )
}

export default Qualifications
