import RPL_AllQualificationsList from '@/components/rpl/allQualifications/RPL_AllQualificationsList';
import { AppCourseBanner, DynamicHead } from '@/components/share'
import { RPL_QualificationData } from '@/data/RPL_Data';
import React from 'react'

function Qualifications() {
  return (
    <>
      <DynamicHead title="RPL Qualifications-GMQ" />
      <AppCourseBanner text={"RPL Qualifications"} />
      <RPL_AllQualificationsList />
    </>
  )
}

export default Qualifications
