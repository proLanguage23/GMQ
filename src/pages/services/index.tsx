import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppBannerImg from "@/components/share/AppBannerImg";
import StudentServicesSectionOne from "@/components/student-services/StudentServicesSectionOne";
import StudentServicesSectionThree from "@/components/student-services/StudentServicesSectionThree";
import StudentServicesSectionTwo from "@/components/student-services/StudentServicesSectionTwo";
import TestimonialSection from "@/components/testimonial";
import { contactFormOfHome } from "@/data/ShareData";
import { StudentServicesDummyData } from "@/data/StudentServicesData";
import React from "react";
import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'

function StudentServicesPage() {
  const { banner } = StudentServicesDummyData;
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead title="Student Services - GMQ Global" />
      <AppBannerImg img={banner} text="Student Services - GMQ Global" />
      <StudentServicesSectionOne />
      <StudentServicesSectionTwo />
      <StudentServicesSectionThree />
      <CommonForm />
      <TestimonialSection />
      {/* <VisitedForm data={popUpData} /> */}
    </>
  );
}

export default StudentServicesPage;
