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
import { contactFormOfHome } from "@/data/ShareData";


export default function Home() {
  return (
    <>
      <DynamicHead />
      <HomeBanner />
      <HomeCourses />
      {/* <ReferralJoinProgram /> */}
      <HomeWhyGMQ />
      {/* <HomeAboutGMQ /> */}
      <HomeIndustrialOfPartner />
      <HomeContactForm />
      <HomeHelpOfGMQ />
      <HomeTestimonials />
      <HomeRWL />
      <VisitedForm data={contactFormOfHome} />
    </>
  );
}
