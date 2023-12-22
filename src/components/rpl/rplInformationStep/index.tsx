import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
  Container,
} from "@/components/share";
import { RPL_StepDummyData, RPL_stepData } from "@/data/RPL_Data";
import React from "react";
import AppImg from "@/components/share/AppImg";
import rightArrowImg from "@/assets/right-arrow.png";
import checkMark from "@/assets/check-mark.png";
import { motion } from "framer-motion";
import RPL_StepItem from "./RPL_StepItem";

function RPL_informationStep() {
  // const { assets } = RPL_stepData;
  const { title, data, allInOne } = RPL_StepDummyData;
  return (
    // #126265
    <section className="py-9 w-full">
      <Container>
        {/* <div className="grid grid-cols-1 gap-9 justify-center items-center md:scale-90">
          {assets?.map((item, key) => (
            <AppImg key={key} src={item} class_name="w-full my-2" />
          ))}
        </div> */}
        <div className="flex flex-col justify-center gap-5">
          <AppTitle text={title} class_name="text-center" />
          <div className="df">
            <div className="hidden md:block">
              <AppImg src={allInOne} alt={title} class_name="w-full" />
            </div>
            <div className="block md:hidden">
              <div className="grid grid-cols-1 justify-center items-center w-full">
                {data?.map((item: any, key: any) => (
                  <AppImg src={item?.imagesImage} alt={item?.title} key={key} class_name="max:w-full !mx-auto" />
                ))}
              </div>
            </div>
          </div>

          {/* <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center pt-9">
            {data?.map((item: any, key: any) => (
              <RPL_StepItem key={key} {...item} />
            ))}
          </div> */}
        </div>
      </Container>
    </section>
  );
}

export default RPL_informationStep;
