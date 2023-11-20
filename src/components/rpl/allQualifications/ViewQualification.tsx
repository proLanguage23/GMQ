import {
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
  Container,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { createPagination } from "@/components/share/lib";
import { RPL_QualificationData } from "@/data/RPL_Data";
import Image from "next/image";
import React, { useState, useLayoutEffect, useEffect } from "react";

function ViewQualification() {
  const { title, RPL_QualificationItems } = RPL_QualificationData;
  const [allRPL_QualificationItems, setAllRPL_QualificationItems] = useState(
    RPL_QualificationItems
  );
  const [categories, setCategories] = useState<any>([]);
  const [selectCatagory, setSelectCatagory] = useState("all");


  const selectCatagoryHandler = (data: any) => {
    setSelectCatagory(data);
    if (data === "all") {
      setAllRPL_QualificationItems(RPL_QualificationItems);
      return;
    } else {
      const selectResult = RPL_QualificationItems?.filter(
        (item) => item?.content?.title.toLowerCase() === data.toLowerCase()
      );
      setAllRPL_QualificationItems(selectResult);
      return;
    }
  };

  useLayoutEffect(() => {

    const result = [
      "all",
      ...RPL_QualificationItems?.map((item) =>
        item?.content?.title.toLowerCase()
      ),
    ];
    setCategories(result);
    // =======

  }, [RPL_QualificationItems]);

  return (
    <div className="py-9 bg-primary">
      <Container fullWidth>
        <div className="flex flex-col justify-center items-center">
          <AppTitle
            text={title}
            class_name="capitalize !text-center md:w-2/3 w-full text-white"
          />
          <div className="w-full grid md:grid-cols-9 mt-9 items-start">
            {/* .category  */}
            <div className="col-span-2 p-3 rounded-2xl bg-white shadow">
              <AppSubTitle
                text="Categories"
                class_name="p-3 text-center bg-slate-100 rounded"
              />
              <div className="mt-3">
                {categories?.map((item: any, key: any) => (
                  <AppBtn
                    key={key}
                    text={item}
                    class_name={`capitalize text-[18px] p-2 my-1 w-full text-left hover:bg-secondary rounded hover:text-white transition-all border-b ${selectCatagory === item ? 'bg-secondary text-white': 'bg-white'}`}
                    handleClick={() => selectCatagoryHandler(item || "all")}
                  />
                ))}
              </div>
            </div>
            <div className="col-span-7 px-9">
              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {allRPL_QualificationItems[0]?.content?.link?.map(
                  (item: any, key: any) => (
                    <div
                      className="p-2 bg-white m-2 rounded-2xl flex flex-col shadow border border-secondary/30 hover:border-secondary transition-all"
                      key={key}
                    >
                      <Image
                        quality={100}
                        placeholder="blur"
                        src={item?.img}
                        alt={item?.text}
                        height={250}
                        className="rounded-2xl object-cover h-[200px] w-full"
                        loading="lazy"
                        blurDataURL="true"
                      />
                      <div className="my-4 flex-1">
                        <AppDescriptionWithDangerouslySetInnerHTML
                          text={item?.text}
                          class_name="uppercase mb-2 font-bold text-secondary group-hover:!text-white text-center "
                        />
                        <AppDescriptionWithDangerouslySetInnerHTML
                          text={item?.description}
                          class_name=" group-hover:!text-white font-light text-center line-clamp-3"
                        />
                      </div>
                      <AppBtn
                        text={"Contact Now"}
                        class_name="commonBtnStyle w-full rounded-full"
                      />
                    </div>
                  )
                )}
              </div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ViewQualification;
