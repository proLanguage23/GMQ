import { AppBtn, AppDescriptionWithDangerouslySetInnerHTML, Container } from '@/components/share'
import { GMQ_CareerAndPersonalityAssessmentTestDummyData } from '@/data/GMQ_CareerAndPersonalityAssessmentTestData'
import React from 'react'

function GMQ_CareerAndPersonalityAssessmentTestSectionOne() {
    const { GMQ_CareerAndPersonalityAssessmentTestSectionOne } = GMQ_CareerAndPersonalityAssessmentTestDummyData
    const { text,btn } = GMQ_CareerAndPersonalityAssessmentTestSectionOne
  return (
    <div className='py-16'>
      <Container>
            <div className="flex flex-col justify-center items-center gap-4">
                <AppDescriptionWithDangerouslySetInnerHTML text={text} />
                <AppBtn text={btn?.text} class_name="commonBtnStyle rounded-full" />
            </div>
      </Container>
    </div>
  )
}

export default GMQ_CareerAndPersonalityAssessmentTestSectionOne
