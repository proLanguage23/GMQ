import {
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { NAATI_Dummy_Data } from "@/data/services/NAATI_Data";
import React from "react";

function NaatiSectionTwo() {
  const { NaatiSectionTwo } = NAATI_Dummy_Data;
  const { title, description, data, btn } = NaatiSectionTwo;
  return (
    <div className="py-9 bg-secondary">
      <Container>
        <div className="flex flex-col justify-center items-center gap-5">
          <AppTitle text={title} class_name="text-center text-white" />
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {data?.map((item, key) => (
              <div className="border rounded bg-white" key={key}>
                <AppImg src={item?.img} />
              </div>
            ))}
          </div>
          <AppDescriptionWithDangerouslySetInnerHTML
            text={description}
            class_name="text-white"
          />
          <AppBtn
            text={btn?.text}
            class_name="NewCommonBtnStyle rounded-full "
          />
        </div>
      </Container>
    </div>
  );
}

export default NaatiSectionTwo;