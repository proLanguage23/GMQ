import { DynamicHead } from '@/components/share';
import AppBannerImg from '@/components/share/AppBannerImg';
import GMQ_CareerAndPersonalityAssessmentTestSectionFour from '@/components/student-services/gmq-career-and-personality-assessment-test/GMQ_CareerAndPersonalityAssessmentTestSectionFour';
import GMQ_CareerAndPersonalityAssessmentTestSectionOne from '@/components/student-services/gmq-career-and-personality-assessment-test/GMQ_CareerAndPersonalityAssessmentTestSectionOne';
import GMQ_CareerAndPersonalityAssessmentTestSectionThree from '@/components/student-services/gmq-career-and-personality-assessment-test/GMQ_CareerAndPersonalityAssessmentTestSectionThree';
import GMQ_CareerAndPersonalityAssessmentTestSectionTwo from '@/components/student-services/gmq-career-and-personality-assessment-test/GMQ_CareerAndPersonalityAssessmentTestSectionTwo';
import { GMQ_CareerAndPersonalityAssessmentTestDummyData } from '@/data/GMQ_CareerAndPersonalityAssessmentTestData';
import React from 'react'

function GMQ_CareerAndPersonalityAssessmentTestPage() {
  const { banner } = GMQ_CareerAndPersonalityAssessmentTestDummyData;
  return (
    <>
      <DynamicHead title="16 Free Personality Tests to Help You Figure Yourself Out - GMQ Global" />
      <AppBannerImg img={banner} text="16 Free Personality Tests to Help You Figure Yourself Out - GMQ Global" />
      <GMQ_CareerAndPersonalityAssessmentTestSectionOne />
      <GMQ_CareerAndPersonalityAssessmentTestSectionTwo />
      <GMQ_CareerAndPersonalityAssessmentTestSectionThree />
      <GMQ_CareerAndPersonalityAssessmentTestSectionFour />
    </>
  );
}

export default GMQ_CareerAndPersonalityAssessmentTestPage
