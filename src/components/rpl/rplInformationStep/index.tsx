import { AppBgImg, Container } from "@/components/share";
import { RPL_SliderData } from "@/data/RPL_Data";
import React from "react";
import InformationItem from "./InformationItem";

function RPL_informationStep() {
  const { items, BG_Img } = RPL_SliderData;
  return (
    <div className="py-16 relative bg-grayCustom">
      <Container>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
          {items?.map((item, key) => (
            <InformationItem
              key={key}
              {...item}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default RPL_informationStep;
