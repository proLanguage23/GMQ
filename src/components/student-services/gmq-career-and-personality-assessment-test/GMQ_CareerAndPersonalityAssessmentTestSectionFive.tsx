import { AppDescriptionWithDangerouslySetInnerHTML, AppTitle, Container } from '@/components/share';
import { GMQ_CareerAndPersonalityAssessmentTestDummyData } from '@/data/GMQ_CareerAndPersonalityAssessmentTestData';
import React from 'react'

function GMQ_CareerAndPersonalityAssessmentTestSectionFive() {
    const { GMQ_CareerAndPersonalityAssessmentTestSectionFive } =
      GMQ_CareerAndPersonalityAssessmentTestDummyData;
    const { title, table } = GMQ_CareerAndPersonalityAssessmentTestSectionFive;
  return (
    <div className='py-16'>
      <Container>
        <div className="flex flex-col justify-center items-center gap-6">
        <AppTitle text={title} class_name="text-center" />
        <AppDescriptionWithDangerouslySetInnerHTML text={table} class_name="border text-center w-1/2 " />
        </div>
      </Container>
    </div>
  )
}

export default GMQ_CareerAndPersonalityAssessmentTestSectionFive
