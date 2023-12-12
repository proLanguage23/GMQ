import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
  Container,
} from "@/components/share";
import { PTE_Dummy_data } from "@/data/services/PTE_Data";
import React from "react";
import PteServiceItem from "./pteSubItem/PteServiceItem";
import { motion } from "framer-motion";

function PTE_SectionOne() {
  const { PTE_SectionOne } = PTE_Dummy_data;
  const { title, subTitle, description, data } = PTE_SectionOne;
  return (
    <section className="py-9 w-full">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <AppTitle text={title} class_name="text-center" />
          <AppSubTitle
            text={subTitle}
            class_name="text-center"
          />
          <div className="flex justify-evenly flex-wrap gap-2 mt-9">
            {data?.map((item, key) => (
              <PteServiceItem key={key} {...item} />
            ))}
          </div>
          <AppDescriptionWithDangerouslySetInnerHTML
            text={description}
            class_name="text-center mt-9 !text-[18px] md:w-2/3 w-full"
          />
        </div>
      </Container>
    </section>
  );
}

export default PTE_SectionOne;
