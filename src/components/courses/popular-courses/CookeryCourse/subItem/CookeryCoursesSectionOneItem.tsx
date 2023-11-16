import {
  AppBgImg,
  AppSubTitle,
} from "@/components/share";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function CookeryCoursesSectionOneItem({ img, title, btn }: any) {
    const handelUopUP = () => {
        alert("I am a Click")
    }
  return (
    <div className="cursor-pointer relative rounded-2xl shadow border sm:w-[300px] h-[230px] w-full overflow-hidden flex items-end p-3 hover:opacity-95 transition-all" onClick={handelUopUP}>
      <div className="flex justify-between items-center gap-2 w-full">
        <AppSubTitle text={title} class_name="text-white flex-1" />
        <div className="w-8 h-8 bg-error hover:bg-white group flex justify-center items-center rounded-full transition-all">
          <FaArrowRight className="text-white group-hover:text-error transition-all" />
        </div>
      </div>

      <AppBgImg BgImg={img} />
    </div>
  );
}

export default CookeryCoursesSectionOneItem;
