import { AppTitle, Container } from "@/components/share";
import { IndustrialOfPartner } from "@/data/IndustrialOfPartner";
import { motion } from "framer-motion";
import React from "react";
import PartnersItem from "./PartnersItem";

const defaultVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (key: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.07 * key,
      duration: 0.05 * key,
    },
  }),
};

function HomeIndustrialOfPartner() {
  const { one } = IndustrialOfPartner;
  const { title, PartnersData } = one;

  return (
    <section className="py-9 bg-grayCustom w-full">
      <Container>
        <div className="">
          <AppTitle
            text={title}
            class_name="capitalize text-center"
            isAnimation
          />
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2 mt-5">
            {PartnersData?.map((item: any, key: any) => (
              <PartnersItem
                key={key}
                {...item}
                variants={defaultVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={key}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeIndustrialOfPartner;
