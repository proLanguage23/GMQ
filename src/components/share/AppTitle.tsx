import React from "react";
import { capitalizeSentences } from "./lib";

function AppTitle({ text, class_name }: any) {
  return (
    <h1 className={`lg:text-[45px] text-[30px] text-primary text-center md:text-left ${class_name}`}>
      {
        capitalizeSentences(text || "")
      }
    </h1>
  );
}

export default AppTitle;
