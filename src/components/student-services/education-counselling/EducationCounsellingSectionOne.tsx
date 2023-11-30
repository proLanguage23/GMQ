import { AppDescription, AppTitle, Container } from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { EducationCounsellingDummyData } from "@/data/EducationCounsellingData";
import React from "react";
import { motion } from "framer-motion";

function EducationCounsellingSectionOne() {
  const { EducationCounsellingSectionOne } = EducationCounsellingDummyData;
  const { title, item, description } = EducationCounsellingSectionOne;
  return (
    <section className="py-9 w-full">
      <Container>
        <div className="df">
          <AppTitle text={title} heading class_name="text-center" />
          <AppDescription text={description} class_name="text-center mt-4" />
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-5">
            {item?.map((item, key) => (
              <AppImg key={key} src={item?.img} alt={item?.text} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default EducationCounsellingSectionOne;
