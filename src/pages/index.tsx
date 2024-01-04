import HomeIndustrialOfPartner from "@/components/home/IndustrialOfPartner";
import HomeAboutGMQ from "@/components/home/aboutGMQ";
import HomeContactForm from "@/components/home/contactForm";
import HomeCourses from "@/components/home/courses";
import HomeHelpOfGMQ from "@/components/home/helpOfGMQ";
import HomeBanner from "@/components/home/homeHero";
import HomeRWL from "@/components/home/rwl";
import HomeTestimonials from "@/components/home/testimonials";
import HomeWhyGMQ from "@/components/home/whyGMQ";
import { DynamicHead, VisitedForm } from "@/components/share";
import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'
import PopUpElement from "@/components/share/section/PopUpElement";
import HomeTopQualifications from "@/components/home/HomeTopQualifications";
import OurRenownIndustries from "@/components/home/OurRenownIndustries";

export default function Home() {
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead />
      <HomeBanner />
      <HomeCourses />
      {/* <ReferralJoinProgram /> */}
      <HomeAboutGMQ />
      {/* <HomeWhyGMQ /> */}
      <HomeTopQualifications />
      <HomeIndustrialOfPartner />
      <OurRenownIndustries />
      <HomeHelpOfGMQ />
      <HomeTestimonials />
      {/* <HomeRWL /> */}
      <HomeContactForm />
      <PopUpElement data={popUpData} />
    </>
  );
}
