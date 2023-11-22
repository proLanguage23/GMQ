import React from "react";
import { capitalizeSentences } from "./lib";

function AppTitle({ text, class_name, heading = false }: any) {
  return (
    <>
      {heading ? (
        <h1 className={`appTitle ${class_name}`}>
          {capitalizeSentences(text || "")}
        </h1>
      ) : (
        <h3 className={`appTitle ${class_name}`}>
          {capitalizeSentences(text || "")}
        </h3>
      )}
    </>
  );
}

export default AppTitle;
