import {
  AppBgImg,
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import { TeachingDummyData } from "@/data/popular-courses/TeachingData";
import React from "react";
import { motion } from "framer-motion";

function SectionFourOfTeaching() {
  const { SectionFourOfTeaching } = TeachingDummyData;
  const { title, text, btn, secondaryImg } = SectionFourOfTeaching;
  return (
    <section className="py-16 relative w-full">
      <Container>
        <div className="flex flex-wrap flex-col gap-5 md:w-2/3 w-full bg-primary rounded-lg p-9 justify-center items-center md:justify-start md:items-start">
          <AppTitle text={title} class_name=" text-white" />
          <AppDescriptionWithDangerouslySetInnerHTML
            text={text}
            class_name="text-white text-center md:text-left"
          />
          <AppBtn
            text={btn?.text}
            class_name="commonBtnStyle rounded-full border-none py-5"
          />
        </div>
      </Container>
      <AppBgImg
        BgImg={secondaryImg}
        alt={title + " background"}
        class_name="blur-[0px]"
      />
    </section>
  );
}

export default SectionFourOfTeaching;
