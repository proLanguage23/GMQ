import { AppBtn, AppDescriptionWithDangerouslySetInnerHTML, AppTitle, Container } from '@/components/share';
import { GMQ_CareerAndPersonalityAssessmentTestDummyData } from '@/data/GMQ_CareerAndPersonalityAssessmentTestData';
import React from 'react'

function GMQ_CareerAndPersonalityAssessmentTestSectionFive() {
    const { GMQ_CareerAndPersonalityAssessmentTestSectionFive } =
      GMQ_CareerAndPersonalityAssessmentTestDummyData;
    const { title, table, btn } = GMQ_CareerAndPersonalityAssessmentTestSectionFive;
  return (
    <div className='py-16'>
      <Container>
        <div className="flex flex-col justify-center items-center gap-6">
        <AppTitle text={title} class_name="text-center" />
        <AppDescriptionWithDangerouslySetInnerHTML text={table} class_name="border text-center lg:w-1/2 w-full" />
        <AppBtn text={btn?.text} class_name="commonBtnStyle rounded-full" />
        </div>
      </Container>
    </div>
  )
}

export default GMQ_CareerAndPersonalityAssessmentTestSectionFive
