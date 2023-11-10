import { AppDescription, AppTitle, Container } from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { EducationCounsellingDummyData } from "@/data/EducationCounsellingData";
import React from "react";

function EducationCounsellingSectionOne() {
  const { EducationCounsellingSectionOne } = EducationCounsellingDummyData;
  const { title, item, description } = EducationCounsellingSectionOne;
  return (
    <div className="py-16">
      <Container>
        <div className="df">
          <AppTitle text={title} class_name="text-center" />
          <AppDescription text={description} class_name="text-center mt-4" />
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-5">
            {item?.map((item, key) => (
              <AppImg key={key} src={item?.img} alt={title} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default EducationCounsellingSectionOne;
