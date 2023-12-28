import { AppTitle, Container } from "@/components/share";
import { IndustrialOfPartner } from "@/data/IndustrialOfPartner";
import { motion } from "framer-motion";
import React from "react";
import PartnersItem from "./PartnersItem";
import AppH4Title from "@/components/share/appHadding/AppH4Title";

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
          <AppH4Title
            text={title}
            class_name="capitalize text-center"
            isAnimation
          />
          <div className="flex justify-center flex-wrap gap-2 mt-5">
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
                class_name="lg:w-[24%] md:w-[32%] sm:w-[33%] w-[95%]  max-w-full"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeIndustrialOfPartner;
