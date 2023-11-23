import { AppBgImg, Container } from "@/components/share";
import { RPL_SliderData, RPL_stepData } from "@/data/RPL_Data";
import React from "react";
import InformationItem from "./InformationItem";
import AppImg from "@/components/share/AppImg";

function RPL_informationStep() {
  const { assets } = RPL_stepData;
  return (
    <div className="py-16 relative bg-grayCustom">
      <Container>
        {/* <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
          {items?.map((item, key) => (
            <InformationItem
              key={key}
              {...item}
            />
          ))}
        </div> */}
        <div className="grid grid-cols-1 gap-9 justify-center items-center">
        {assets?.map((item, key) => (
          <AppImg key={key} src={item} class_name='w-full my-2' />
        ))}
        </div>
      </Container>
    </div>
  );
}

export default RPL_informationStep;
