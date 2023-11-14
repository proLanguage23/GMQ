import CommonForm from '@/components/contactForm/CommonForm';
import NursingCourseSectionOne from '@/components/courses/popular-courses/health-and-allied-health/NursingCourse/NursingCourseSectionOne';
import NursingSectionOne from '@/components/courses/popular-courses/health-and-allied-health/nursing/NursingSectionOne';
import { DynamicHead } from '@/components/share'
import AppBannerImg from '@/components/share/AppBannerImg'
import TestimonialSection from '@/components/testimonial';
import { NursingCourseDummyData } from '@/data/popular-courses/NursingCourseData';
import React from 'react'

function NursingPage() {
    const { banner } = NursingCourseDummyData;
  return (
    <>
      <DynamicHead title="Study Nursing Course in Australia: Top Nursing Courses, Colleges, Universities, Fees | - GMQ Global" />
      <AppBannerImg img={banner} text="Study Nursing Course in Australia: Top Nursing Courses, Colleges, Universities, Fees | - GMQ Global" />
      <NursingCourseSectionOne />
      <CommonForm />
      <TestimonialSection />
    </>
  )
}

export default NursingPage
