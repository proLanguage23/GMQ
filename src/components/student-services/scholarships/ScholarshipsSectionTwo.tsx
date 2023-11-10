import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import { ScholarshipsDummyData } from "@/data/ScholarshipsData";
import React from "react";

function ScholarshipsSectionTwo() {
  const { ScholarshipsSectionTwo } = ScholarshipsDummyData;
  const { title, text, description } = ScholarshipsSectionTwo;
  return (
    <div className="py-16 bg-grayCustom">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <AppTitle text={title} />
          {description?.map((item, key) => (
            <AppDescriptionWithDangerouslySetInnerHTML
              key={key}
              text={item}
              class_name="text-center my-2 lg:w-2/3 w-full"
            />
          ))}
          <div className="w-full overflow-x-scroll bg-white p-1 rounded mt-7 shadow">
            <AppDescriptionWithDangerouslySetInnerHTML text={text} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ScholarshipsSectionTwo;
