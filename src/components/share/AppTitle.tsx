import React from "react";
import { capitalizeSentences } from "./lib";

function AppTitle({ text, class_name }: any) {
  return (
    <h1 className={`appTitle ${class_name}`}>
      {
        capitalizeSentences(text || "")
      }
    </h1>
  );
}

export default AppTitle;
