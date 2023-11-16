import React from "react";
import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "../share";
import Image from "next/image";
import { CommonFormDummyData } from "@/data/ContactAllForm";

function CommonForm() {
  const { right, left } = CommonFormDummyData;
  return (
    <div className="bg-secondary pt-28">
      <Container class_name="!pb-0 !mb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-9 justify-center items-end">
          <div className="pb-16">
            <AppDescriptionWithDangerouslySetInnerHTML text={left?.form} />
          </div>
          <div className="">
            <AppTitle
              text={right?.title}
              class_name="!text-white md:w-2/3 w-full"
            />
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
              className="mx-auto mt-6 md:mt-16"
              loading="lazy"
              blurDataURL="true"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CommonForm;
