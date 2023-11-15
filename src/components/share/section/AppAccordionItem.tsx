import React from "react";
import { LuMoveDown, LuMoveUp } from "react-icons/lu";

function AppAccordionItem({ obj, app_accordionHandler, value }: any) {
  return (
    <div
      className={`border  group cursor-pointer `}
      onClick={() => app_accordionHandler(obj[Object.keys(obj)[0]])}
    >
      <div className="accordionHeader">
        <div
          className={`flex justify-between items-center flex-wrap p-4 group-hover:bg-primary/90  transition-all ${
            value === obj[Object.keys(obj)[0]] ? "bg-primary/90" : "bg-secondary"
          }`}
        >
          <div className="flex-1 text-white">
            <strong>{obj[Object.keys(obj)[0]]}</strong>
          </div>
          <div className="icon w-9 h-9 rounded-full bg-slate-100 flex justify-center items-center group-hover:bg-primary group-hover:text-white transition-all border-2">
            {value === obj[Object.keys(obj)[0]] ? <LuMoveUp /> : <LuMoveDown />}
          </div>
        </div>
      </div>
      {value === obj[Object.keys(obj)[0]] && (
        <div className="accordionBody p-4 ">
          <div
            className={`text-base text-text  `}
            dangerouslySetInnerHTML={{ __html: obj[Object.keys(obj)[1]] }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default AppAccordionItem;
