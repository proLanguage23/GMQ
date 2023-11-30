import { AppBgImg, AppTitle, Container } from "@/components/share";
import { TeachingDummyData } from "@/data/popular-courses/TeachingData";
import React from "react";
import RequirementItem from "./SectionTwoOfTeachingDiv/RequirementItem";
import { motion } from "framer-motion";

function SectionTwoOfTeaching() {
  const { SectionTwoOfTeaching } = TeachingDummyData;
  const { title, data, secondaryImg } = SectionTwoOfTeaching;
  return (
    <section className="py-9 relative w-full">
      <Container>
        <div className="flex flex-col flex-wrap justify-center items-center">
          <AppTitle text={title} class_name="text-center font-semibold" />
          <div className="w-full mt-9 grid md:grid-cols-2 grid-cols-1 gap-5">
            {data?.map((item, key) => (
              <RequirementItem key={key} {...item} />
            ))}
          </div>
        </div>
      </Container>
      <AppBgImg BgImg={secondaryImg} class_name="opacity-75" />
    </section>
  );
}

export default SectionTwoOfTeaching;
