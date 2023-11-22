import { AppBtn, AppSubTitle } from "@/components/share";
import React from "react";

function QualificationCategory({
  categories,
  selectCatagoryHandler,
  selectCatagory,
}: any) {
  return (
    <div>
      <AppSubTitle
        text="Categories"
        class_name="p-3 text-center bg-slate-100 rounded"
      />
      <div className="mt-3 flex flex-wrap justify-center items-center gap-2">
        {categories?.map((item: any, key: any) => (
          <AppBtn
            key={key}
            text={item}
            class_name={`capitalize text-[18px] p-2 my-1 lg:w-full text-left hover:bg-secondary rounded hover:text-white transition-all border-b ${
              selectCatagory === item
                ? "bg-secondary text-white"
                : "bg-white border lg:border-none"
            }`}
            handleClick={() => selectCatagoryHandler(item || "all")}
          />
        ))}
      </div>
    </div>
  );
}

export default QualificationCategory;
