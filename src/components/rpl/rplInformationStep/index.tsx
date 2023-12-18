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

function RPL_informationStep() {
  // const { assets } = RPL_stepData;
  const { title, data } = RPL_StepDummyData;
  return (
    // #126265
    <section className="py-9 w-full">
      <Container>
        {/* <div className="grid grid-cols-1 gap-9 justify-center items-center md:scale-90">
          {assets?.map((item, key) => (
            <AppImg key={key} src={item} class_name="w-full my-2" />
          ))}
        </div> */}
        <div className="">
          <AppTitle text={title} class_name="text-center" />
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center gap-1 pt-9">
            {data?.map((item: any, key: any) => (
              <div
                className="border border-secondary rounded-2xl hover:shadow-md flex justify-between flex-col"
                key={key}
              >
                <div className="">
                  <AppSubTitle
                    text={item?.title}
                    class_name="text-[25px] font-medium mb-3 border-b bg-primary rounded-t-2xl p-3 px-5 text-white text-center"
                  />
                  <AppDescriptionWithDangerouslySetInnerHTML
                    text={item?.description}
                    class_name="px-5 pb-9 text-center"
                  />
                </div>
                <div className="p-3 flex justify-between items-center bg-secondary rounded-2xl flex-wrap">

                 <div className="flex justify-start items-center gap-2">
                 <AppDescriptionWithDangerouslySetInnerHTML text={key+1} class_name='text-right bg-primary !w-[30px] h-[30px] text-white flex justify-center items-center rounded-full' />
                 <AppDescriptionWithDangerouslySetInnerHTML text={"Step"} class_name="flex-1 !text-white" />
                 </div>

                  {key !== 3 ? (
                    <AppImg
                      src={rightArrowImg}
                      width="35"
                      class_name="border-4 border-white rounded-full p-1 bg-white"
                    />
                  )
                  :
                  (
                    <AppImg
                      src={checkMark}
                      width="35"
                      class_name="rounded-full p-1"
                    />
                  )
                }
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default RPL_informationStep;
