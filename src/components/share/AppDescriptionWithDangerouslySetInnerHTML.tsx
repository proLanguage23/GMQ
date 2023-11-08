import React from "react";
import { capitalizeSentences } from "./lib";

function AppDescriptionWithDangerouslySetInnerHTML({ text, class_name }: any) {
  return (
    <div
      className={`text-base text-text ${class_name} `}
      dangerouslySetInnerHTML={{ __html: text }}
    ></div>
  );
}

export default AppDescriptionWithDangerouslySetInnerHTML;
