import { AppTitle, Container } from "@/components/share";
import { NursingCourseDummyData } from "@/data/popular-courses/NursingCourseData";
import Image from "next/image";
import React from "react";

function NursingCourseSectionThree() {
  const { NursingCourseSectionThree } = NursingCourseDummyData;
  const { title, img } = NursingCourseSectionThree;
  return (
    <div className="py-9">
      <Container>
        <div className="flex flex-col justify-center items-center gap-5">
          <AppTitle text={title} />
          <Image
            src={img}
            alt={"logo"}
            quality={100}
            loading="lazy"
            blurDataURL="true"
            className="w-full mt-6"
          />
        </div>
      </Container>
    </div>
  );
}

export default NursingCourseSectionThree;
