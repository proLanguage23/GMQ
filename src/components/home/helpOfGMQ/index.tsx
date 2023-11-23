import { AppTitle, Container } from "@/components/share";
import { HomeHelpOfGMQData } from "@/data/HomeHelpOfGMQData";
import React from "react";
import HelpOfGMQItem from "./HelpOfGMQItem";
import { AllQualifications } from "@/components/rpl";

function HomeHelpOfGMQ() {
  const { title, HelpOfGMQ } = HomeHelpOfGMQData;
  return (
    <>
      <AllQualifications PropsText={title} />
    </>
  );
}

export default HomeHelpOfGMQ;
