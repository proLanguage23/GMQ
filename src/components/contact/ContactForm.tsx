import React from "react";
import {
  AppDescription,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
  Container,
} from "../share";
import { ContactDummyData } from "@/data/ContactData";
import { CommonFormDummyData } from "@/data/ContactAllForm";

function ContactForm() {
  const { left } = CommonFormDummyData;
  const { ContactSectionOne } = ContactDummyData;
  const { data } = ContactSectionOne;
  return (
    <div className="py-9 bg-secondary">
      <Container>
        <AppTitle text={'contact us'} class_name="mb-9 text-center text-white" />
        <div className="grid  grid-cols-1 gap-4 justify-center items-center">
        <AppDescriptionWithDangerouslySetInnerHTML text={left?.form} />
        </div>
      </Container>
    </div>
  );
}

export default ContactForm;
