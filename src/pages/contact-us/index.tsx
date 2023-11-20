import { ContactMap } from "@/components/contact";
import CommonForm from "@/components/contactForm/CommonForm";
import { AppCourseBanner, DynamicHead } from "@/components/share";
import AppBannerImg from "@/components/share/AppBannerImg";
import React from "react";

function ContactPage() {
  return (
    <div>
      <>
        <DynamicHead title="Contact-us - GMQ Global" />
        <AppCourseBanner text={"contact us"} />
        <ContactMap />
        <CommonForm />
      </>
    </div>
  );
}

export default ContactPage;
