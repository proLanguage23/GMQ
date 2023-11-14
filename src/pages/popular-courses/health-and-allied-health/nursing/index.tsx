import CommonForm from '@/components/contactForm/CommonForm';
import NursingSectionOne from '@/components/courses/popular-courses/health-and-allied-health/nursing/NursingSectionOne';
import { DynamicHead } from '@/components/share'
import AppBannerImg from '@/components/share/AppBannerImg'
import TestimonialSection from '@/components/testimonial';
import NursingSectionFive from '@/components/courses/popular-courses/health-and-allied-health/nursing/NursingSectionFive';
import NursingSectionFour from '@/components/courses/popular-courses/health-and-allied-health/nursing/NursingSectionFour';
import NursingSectionSeven from '@/components/courses/popular-courses/health-and-allied-health/nursing/NursingSectionSeven';
import NursingSectionSix from '@/components/courses/popular-courses/health-and-allied-health/nursing/NursingSectionSix';
import NursingSectionThree from '@/components/courses/popular-courses/health-and-allied-health/nursing/NursingSectionThree';
import NursingSectionTwo from '@/components/courses/popular-courses/health-and-allied-health/nursing/NursingSectionTwo';
import React from 'react'
import { NursingCourseDummyDataOld } from '@/data/popular-courses/NursingCourseData';

function NursingPage() {
    const { banner } = NursingCourseDummyDataOld;
  return (
    <>
      <DynamicHead title="ENursing in Australia: Structure, Exams - GMQ Global" />
      <AppBannerImg img={banner} text="Nursing in Australia: Structure, Exams - GMQ Global" />
      <NursingSectionOne />
      <NursingSectionTwo />
      <NursingSectionThree />
      <NursingSectionFour />
      <NursingSectionFive />
      <NursingSectionSix />
      <NursingSectionSeven />
      <CommonForm />
      <TestimonialSection />
    </>
  )
}

export default NursingPage
