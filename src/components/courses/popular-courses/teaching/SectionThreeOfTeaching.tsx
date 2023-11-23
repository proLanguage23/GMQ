import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
  Container,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { TeachingDummyData } from "@/data/popular-courses/TeachingData";
import React from "react";

function SectionThreeOfTeaching() {
  const { SectionThreeOfTeaching } = TeachingDummyData;
  const { title, img, data } = SectionThreeOfTeaching;
  return (
    <div className="py-9">
      <Container>
        <AppTitle text={title} class_name="text-center w-full" />
        <div className="mt-9 grid md:grid-cols-2 grid-cols-1 justify-center gap-5">
          <div className="flex justify-center items-start flex-wrap">
            <AppImg src={img} alt={title} class_name="rounded" />
          </div>
          <div className="mt-14">
            <AppSubTitle text={data?.title} class_name="text-[25px] mb-4 bg-primary text-white p-2 rounded " />
            {data?.CareerOutcomeText?.map((item: any, key: any) => (
              <AppDescriptionWithDangerouslySetInnerHTML
                key={key}
                text={key + 1 + ". " + item}
                class_name="mb-2 p-1"
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SectionThreeOfTeaching;
