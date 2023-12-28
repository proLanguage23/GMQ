import { AppBgImg, AppTitle, Container } from "@/components/share";
import { TeachingDummyData } from "@/data/popular-courses/TeachingData";
import React from "react";
import RequirementItem from "./SectionTwoOfTeachingDiv/RequirementItem";
import { motion } from "framer-motion";
import CookeryCoursesSectionOneItem from "../CookeryCourse/subItem/CookeryCoursesSectionOneItem";
import AppH2Title from "@/components/share/appHadding/AppH2Title";

function SectionTwoOfTeaching() {
  const { SectionTwoOfTeaching } = TeachingDummyData;
  const { title, data, secondaryImg } = SectionTwoOfTeaching;
  return (
    <section className="py-9 w-full bg-grayCustom">
      <Container>
        <div className="flex flex-col flex-wrap justify-center items-center">
          <AppH2Title text={title} class_name="text-center font-semibold" />

          <div className="md:flex flex-wrap justify-center items-center gap-2 mt-9 grid sm:grid-cols-2 grid-cols-1">
            {data?.map((item: any, key: any) => (
              <CookeryCoursesSectionOneItem {...item} key={key} />
            ))}
          </div>
        </div>
      </Container>
      {/* <AppBgImg BgImg={secondaryImg} class_name="opacity-75" /> */}
    </section>
  );
}

export default SectionTwoOfTeaching;
