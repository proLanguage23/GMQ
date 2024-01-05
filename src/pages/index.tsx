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
import CommonForm from "@/components/contactForm/CommonForm";

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
      <OurRenownIndustries />
      <HomeTopQualifications />
      <HomeIndustrialOfPartner />
      {/* <HomeHelpOfGMQ /> */}
      <HomeTestimonials />
      {/* <HomeRWL /> */}
      <HomeContactForm />
      {/* <CommonForm
        title="Help us in getting to know you better, fill it up!"
        des="Choose GMQ Global for professional educational counseling. Our vast expertise offers efficient guidance towards your objectives. Fill out the form and get in touch with one of our student counselors—you'll be glad you did!
"
      /> */}
      <PopUpElement data={popUpData} />
    </>
  );
}
