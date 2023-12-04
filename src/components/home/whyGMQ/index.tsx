import { AppDescription, AppTitle, Container } from "@/components/share";
import { WhyGMQ_DummyData } from "@/data/HomeWhyGMQ";
import React from "react";
import WhyGMQFetusesItem from "./WhyGMQFetusesItem";
import AppBgImg from "@/components/share/AppBgImg";
import { motion } from "framer-motion";

const defaultVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (key: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * key,
      duration: 0.5 ,
    },
  }),
};

function HomeWhyGMQ() {
  const { title, description, whyGMQFetuses, secondaryImg } = WhyGMQ_DummyData;
  return (
    <section className="py-24 relative w-full">
      <Container>
        <div className="flex flex-col flex-wrap">
          <div className="flex justify-center md:justify-start flex-wrap">
            <AppTitle
              text={title + " GMQ"}
              class_name="!text-white md:!text-[80px] uppercase manropeFont"
              heading
              isAnimation
              animationSpeed={0.1}
            />
          </div>
          <AppDescription
            text={description}
            class_name="!text-white !text-[18px] lg:w-2/3 w-full text-center md:text-left"
            isAnimation
            animationSpeed={0.01}
          />
          <div className="flex flex-wrap w-full items-center gap-2 mt-8 md:gap-6 justify-center md:justify-start">
            {whyGMQFetuses?.map((item, key) => (
              <WhyGMQFetusesItem
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
      <AppBgImg BgImg={secondaryImg} />
    </section>
  );
}

export default HomeWhyGMQ;
