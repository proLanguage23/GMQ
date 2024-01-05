import React from "react";
import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
  Container,
} from "../share";
import { ContactDummyData } from "@/data/ContactData";
import { CommonFormDummyData } from "@/data/ContactAllForm";
import { FaRegClock } from "react-icons/fa";

function ContactArea() {
  const { left } = CommonFormDummyData;
  const { ContactSectionOne } = ContactDummyData;
  const { title, text, data } = ContactSectionOne;
  return (
    <div className="overflow-hidden pt-1 ">
      <div className="">
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center gap-2">
          <div className="2 w-full pt-14 md:px-9 bg-primary rounded-r-lg">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-1">
              {data?.map((item, key) => (
                <div
                  className={`flex justify-between items-start flex-wrap gap-4 rounded p-2 bg-primary border border-secondary/40 ${
                    key === 2 ? "lg:col-span-2 mt-5" : "col-span-1"
                  }`}
                  key={key}
                >
                  <div className=" bg-secondary p-3 rounded">
                    {item?.asserts}
                  </div>
                  <div className="flex-1 ">
                    <AppSubTitle text={item?.title} class_name="text-[22px] text-white" />
                    <AppDescriptionWithDangerouslySetInnerHTML
                      text={item?.text}
                      class_name="!text-[18px] text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pb-24 pt-10 md:px-5 px-2 ">
            <div className=" h-full">
              <AppTitle
                text={"Get In Touch"}
                class_name="text-center pb-3 border-b "
                isAnimation
              />
              <AppDescriptionWithDangerouslySetInnerHTML
                text={left?.form}
                class_name="h-[820px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactArea;
