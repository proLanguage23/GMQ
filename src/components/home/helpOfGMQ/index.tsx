import { AppTitle, Container } from "@/components/share";
import { HomeHelpOfGMQData } from "@/data/HomeHelpOfGMQData";
import React from "react";
import HelpOfGMQItem from "./HelpOfGMQItem";

function HomeHelpOfGMQ() {
  const { title, HelpOfGMQ } = HomeHelpOfGMQData;
  return (
    <div className="py-16">
      <Container>
        <div className="flex flex-col justify-center items-center flex-wrap">
          <AppTitle text={title} class_name="text-canter" />
          <div className="w-full mt-7 flex justify-between items-center flex-wrap gap-1">
            {HelpOfGMQ?.map((item, key) => (
              <HelpOfGMQItem key={key} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeHelpOfGMQ;
