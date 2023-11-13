import CommonForm from '@/components/contactForm/CommonForm';
import NursingSectionOne from '@/components/courses/popular-courses/health-and-allied-health/nursing/NursingSectionOne';
import { DynamicHead } from '@/components/share'
import AppBannerImg from '@/components/share/AppBannerImg'
import TestimonialSection from '@/components/testimonial';
import { NursingCourseDummyData } from '@/data/popular-courses/NursingCourseData';
import NursingSectionFive from '@/data/popular-courses/NursingSectionFive';
import NursingSectionFour from '@/data/popular-courses/NursingSectionFour';
import NursingSectionSeven from '@/data/popular-courses/NursingSectionSeven';
import NursingSectionSix from '@/data/popular-courses/NursingSectionSix';
import NursingSectionThree from '@/data/popular-courses/NursingSectionThree';
import NursingSectionTwo from '@/data/popular-courses/NursingSectionTwo';
import React from 'react'

function NursingPage() {
    const { banner } = NursingCourseDummyData;
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
