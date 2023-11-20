import {
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { GroupTrainingDummyData } from "@/data/services/PTE_Data";
import React from "react";

function GROUP_TRAININGSectionTwo() {
  const { GROUP_TRAININGSectionTwo } = GroupTrainingDummyData;
  const { title, description, data, btn } = GROUP_TRAININGSectionTwo;
  return (
    <div className="py-9 bg-primary">
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
            class_name="commonBtnStyle rounded-full hover:bg-transparent"
          />
        </div>
      </Container>
    </div>
  );
}

export default GROUP_TRAININGSectionTwo;
