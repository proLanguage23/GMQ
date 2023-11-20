import { DynamicHead } from '@/components/share';
import AppBannerImg from '@/components/share/AppBannerImg';
import GMQ_CareerAndPersonalityAssessmentTestSectionEight from '@/components/student-services/GMQ-career-and-personality-assessment-test/GMQ_CareerAndPersonalityAssessmentTestSectionEight';
import GMQ_CareerAndPersonalityAssessmentTestSectionFive from '@/components/student-services/GMQ-career-and-personality-assessment-test/GMQ_CareerAndPersonalityAssessmentTestSectionFive';
import GMQ_CareerAndPersonalityAssessmentTestSectionFour from '@/components/student-services/GMQ-career-and-personality-assessment-test/GMQ_CareerAndPersonalityAssessmentTestSectionFour';
import GMQ_CareerAndPersonalityAssessmentTestSectionOne from '@/components/student-services/GMQ-career-and-personality-assessment-test/GMQ_CareerAndPersonalityAssessmentTestSectionOne';
import GMQ_CareerAndPersonalityAssessmentTestSectionSeven from '@/components/student-services/GMQ-career-and-personality-assessment-test/GMQ_CareerAndPersonalityAssessmentTestSectionSeven';
import GMQ_CareerAndPersonalityAssessmentTestSectionSix from '@/components/student-services/GMQ-career-and-personality-assessment-test/GMQ_CareerAndPersonalityAssessmentTestSectionSix';
import GMQ_CareerAndPersonalityAssessmentTestSectionThree from '@/components/student-services/GMQ-career-and-personality-assessment-test/GMQ_CareerAndPersonalityAssessmentTestSectionThree';
import GMQ_CareerAndPersonalityAssessmentTestSectionTwo from '@/components/student-services/GMQ-career-and-personality-assessment-test/GMQ_CareerAndPersonalityAssessmentTestSectionTwo';
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
      <GMQ_CareerAndPersonalityAssessmentTestSectionFive />
      <GMQ_CareerAndPersonalityAssessmentTestSectionSix />
      <GMQ_CareerAndPersonalityAssessmentTestSectionSeven />
      <GMQ_CareerAndPersonalityAssessmentTestSectionEight />
    </>
  );
}

export default GMQ_CareerAndPersonalityAssessmentTestPage
