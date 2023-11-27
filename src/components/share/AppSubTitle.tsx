import React from "react";
import { TextAnimation } from "./section/TextAnimation";
import { capitalizeSentences } from "./lib";

function AppSubTitle({ text, class_name }: any) {
  return (
    <>
      <p className={`text-[18px] text-primary ${class_name}`}>
        {TextAnimation(capitalizeSentences(text || ""))}
      </p>
    </>
  );
}

export default AppSubTitle;
