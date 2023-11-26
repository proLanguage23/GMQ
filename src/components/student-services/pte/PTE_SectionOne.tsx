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
    <motion.section
      className="py-9"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <Container>
        <div className="">
          <AppTitle text={title} class_name="text-center" />
          <AppSubTitle
            text={subTitle}
            class_name="text-center text-secondary"
          />
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-9">
            {data?.map((item, key) => (
              <PteServiceItem key={key} {...item} />
            ))}
          </div>
          <AppDescriptionWithDangerouslySetInnerHTML
            text={description}
            class_name="text-center mt-9 !text-[18px]"
          />
        </div>
      </Container>
    </motion.section>
  );
}

export default PTE_SectionOne;
