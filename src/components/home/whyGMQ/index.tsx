import { AppDescription, AppTitle, Container } from "@/components/share";
import { WhyGMQ_DummyData } from "@/data/HomeWhyGMQ";
import React from "react";
import WhyGMQFetusesItem from "./WhyGMQFetusesItem";
import AppBgImg from "@/components/share/AppBgImg";
import { motion } from "framer-motion";

function HomeWhyGMQ() {
  const { title, description, whyGMQFetuses, secondaryImg } = WhyGMQ_DummyData;
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="py-24 relative">
        <Container>
          <div className="flex flex-col gap-6 flex-wrap">
            <div className="flex gap-7 justify-center md:justify-start flex-wrap">
              <AppTitle
                text={title + " GMQ"}
                class_name="!text-secondary md:!text-[80px] uppercase manropeFont"
                heading
              />
            </div>
            <AppDescription
              text={description}
              class_name="!text-white !text-[18px] lg:w-2/3 w-full text-center md:text-left"
            />
            <div className="flex flex-wrap w-full items-center gap-2 md:gap-6 justify-center md:justify-start">
              {whyGMQFetuses?.map((item, key) => (
                <WhyGMQFetusesItem key={key} {...item} />
              ))}
            </div>
          </div>
        </Container>
        <AppBgImg BgImg={secondaryImg} />
      </div>
    </motion.div>
  );
}

export default HomeWhyGMQ;
