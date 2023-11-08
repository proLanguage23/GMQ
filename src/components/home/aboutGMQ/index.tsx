import { AppDescription, AppTitle, Container, PageLink } from "@/components/share";
import AppDescriptionWithDangerouslySetInnerHTML from "@/components/share/AppDescriptionWithDangerouslySetInnerHTML";
import { HomeAboutDummyData } from "@/data/HomeAboutData";
import Image from "next/image";
import React from "react";

function HomeAboutGMQ() {
  const { left, right } = HomeAboutDummyData;
  return (
    <div className="py-16">
      <Container>
        <div className="flex md:justify-between justify-center items-center flex-wrap gap-4 py-4">
          <div className="flex justify-center items-center mx-auto flex-wrap">
            <Image
              src={left?.image}
              alt={"logo"}
              quality={100}
              priority={true}
              className="w-full h-auto p-5 md:p-0"
            />
          </div>
          <div className="flex flex-col gap-3 md:p-6 px-3 lg:flex-1 text-justify items-center md:items-start flex-wrap">
            <AppTitle text={right?.title} class_name="lg:!text-[70px] manropeFont !text-bluePrimary" />
            <AppDescriptionWithDangerouslySetInnerHTML  text={right?.description} class_name="md:!text-[18px]"  />
            <PageLink {...right?.btn} class_name="commonBtnStyle" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeAboutGMQ;
