import { AppTitle, Container } from "@/components/share";
import AppDescriptionWithDangerouslySetInnerHTML from "@/components/share/AppDescriptionWithDangerouslySetInnerHTML";
import { ContactFormDummyData } from "@/data/HomeContactForm";
import Image from "next/image";
import React from "react";

function HomeContactForm() {
  const { right, left } = ContactFormDummyData;
  return (
    <div className="bg-secondary pt-28">
      <Container class_name="pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-9 justify-center items-end">
          <div className="pb-16">
            <AppDescriptionWithDangerouslySetInnerHTML text={left?.form} />
          </div>
          <div className="">
            <AppTitle text={right?.title} class_name="!text-white " />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={right?.description}
              class_name="!text-white mt-3 md:text-left text-center md:p-0 p-3"
            />
            <Image
              src={right?.secondaryImg}
              alt={"logo"}
              width={360}
              quality={100}
              // priority={true}
              loading="lazy"
              blurDataURL="true"
              className="mx-auto mt-6"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeContactForm;
