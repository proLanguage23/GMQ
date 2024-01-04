import { AppDescription, AppTitle, Container } from "@/components/share";
import AppDescriptionWithDangerouslySetInnerHTML from "@/components/share/AppDescriptionWithDangerouslySetInnerHTML";
import { ContactFormDummyData } from "@/data/HomeContactForm";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import AppImg from "@/components/share/AppImg";
import AppH3Title from "@/components/share/appHadding/AppH3Title";
function HomeContactForm() {
  const { right, left } = ContactFormDummyData;
  return (
    <section className="bg-[#FFFFFF] pt-28  w-full">
      <Container class_name="!pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-9 justify-center items-end">
          <div className="pb-16 flex justify-start h-full min-h-[700px] md:min-h-full ">
            <AppDescriptionWithDangerouslySetInnerHTML
              text={left?.form}
              class_name="h-full"
            />
          </div>
          <div className="pt-16">
            <AppH3Title
              text={right?.title}
              class_name=""
              isAnimation
            />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={right?.description}
              class_name=" mt-3 md:text-left text-center md:p-0 p-3"
              isAnimation
              animationSpeed={0.005}
            />

            <AppImg src={right?.secondaryImg} alt={right?.title} width={360} class_name="mx-auto mt-5" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeContactForm;
