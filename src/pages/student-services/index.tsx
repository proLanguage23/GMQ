import CommonForm from '@/components/contactForm/CommonForm';
import { DynamicHead } from '@/components/share';
import AppBannerImg from '@/components/share/AppBannerImg';
import StudentServicesSectionOne from '@/components/student-services/StudentServicesSectionOne';
import StudentServicesSectionThree from '@/components/student-services/StudentServicesSectionThree';
import StudentServicesSectionTwo from '@/components/student-services/StudentServicesSectionTwo';
import TestimonialSection from '@/components/testimonial';
import { StudentServicesDummyData } from '@/data/StudentServicesData';
import React from 'react'

function StudentServicesPage() {
    const { banner } = StudentServicesDummyData;
    return (
      <>
        <DynamicHead title="PTE - GMQ Global" />
        <AppBannerImg img={banner} text="PTE - GMQ" />
        <StudentServicesSectionOne />
        <StudentServicesSectionTwo />
        <StudentServicesSectionThree />
        <CommonForm/>
        <TestimonialSection />
      </>
    );
}

export default StudentServicesPage