import { ContactForm, ContactMap } from "@/components/contact";
import ContactArea from "@/components/contact/ContactArea";
import { AppCourseBanner, DynamicHead } from "@/components/share";
import React from "react";

function ContactPage() {
  return (
    <div>
      <>
        <DynamicHead title="Contact-us - GMQ Global" />
        <AppCourseBanner text={"contact us"} />
        <ContactArea />
        <ContactMap />
        {/* <ContactForm /> */}
      </>
    </div>
  );
}

export default ContactPage;
