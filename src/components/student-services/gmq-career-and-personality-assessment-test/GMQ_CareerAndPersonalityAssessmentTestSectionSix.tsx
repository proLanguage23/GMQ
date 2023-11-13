import { AppDescriptionWithDangerouslySetInnerHTML, AppTitle, Container } from '@/components/share';
import { GMQ_CareerAndPersonalityAssessmentTestDummyData } from '@/data/GMQ_CareerAndPersonalityAssessmentTestData';
import React from 'react'

function GMQ_CareerAndPersonalityAssessmentTestSectionSix() {
    const { GMQ_CareerAndPersonalityAssessmentTestSectionSix } =
      GMQ_CareerAndPersonalityAssessmentTestDummyData;
    const { title, description } = GMQ_CareerAndPersonalityAssessmentTestSectionSix;
  return (
    <div className='py-14 bg-primary'>
      <Container>
        <div className="flex flex-col justify-center items-center gap-4">
            <AppTitle text={title} class_name="!text-white" />
            <AppDescriptionWithDangerouslySetInnerHTML text={description} class_name="text-center text-white" />
        </div>
      </Container>
    </div>
  )
}

export default GMQ_CareerAndPersonalityAssessmentTestSectionSix
