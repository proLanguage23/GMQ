/* eslint-disable react-hooks/exhaustive-deps */
import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container

} from "@/components/share";
import { RPL_QualificationData } from "@/data/RPL_Data";
import React, { useState, useLayoutEffect, useEffect } from "react";
import QualificationCategory from "./sub/QualificationCategory";
import QualificationSearch from "./sub/QualificationSearch";
import QualificationItemResult from "./sub/QualificationItemResult";

function ViewQualification() {
  const { title, RPL_QualificationItems } = RPL_QualificationData;
  const [allRPL_QualificationItems, setAllRPL_QualificationItems] =
    useState<any>([]);
  const [showQualificationItems, setShowQualificationItems] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [selectCatagory, setSelectCatagory] = useState("all");

  const [searchInput, setSearchInput] = useState("");

  const selectCatagoryHandler = (data: any) => {
    setSelectCatagory(data);
  };

  const getAllQualificationItems = (data: any) => {
    let result: any = [];
    // all category
    if (data == "all") {
      result = RPL_QualificationItems?.map((item: any, _: any) =>
        item?.content?.link?.map((mainItem: any, _: any) => mainItem)
      );
      setSearchInput('')
    } else {
      // other category
      const selectResult = RPL_QualificationItems?.filter(
        (item) => item?.content?.title.toLowerCase() === data.toLowerCase()
      );
      result = [selectResult[0]?.content?.link];
      setSearchInput('')
    }

    // End of push all items
    setAllRPL_QualificationItems(result.flat(Infinity));
  };

  const handleSearch = (e: any) => {
    let inputValue = e.target.value;
    inputValue = inputValue?.trim()?.toLowerCase();
    setSearchInput(inputValue);

    const search = allRPL_QualificationItems?.filter((item: any) =>
      item?.text?.toLowerCase()?.includes(inputValue)
    );

    setShowQualificationItems(search);
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

  useEffect(() => {
    getAllQualificationItems(selectCatagory);
  }, [selectCatagory, RPL_QualificationItems]);

  return (
    <div className="py-9 bg-white">
      <Container fullWidth>
        <div className="flex flex-col justify-center items-center">
          <AppTitle
            text={title}
            heading
            class_name="capitalize !text-center md:w-2/3 w-full"
          />
          <div className="w-full grid lg:grid-cols-9 mt-9 grid-cols-1 items-start gap-3">
            {/* .category  */}
            <div className="lg:col-span-2 p-3 mb-5 rounded-2xl bg-white shadow">
              <QualificationCategory
                categories={categories}
                selectCatagoryHandler={selectCatagoryHandler}
                selectCatagory={selectCatagory}
              />
            </div>
            {/* items and search  */}
            <div className="lg:col-span-7 px-3">
              {/* search  */}
              <QualificationSearch
                searchInput={searchInput}
                handleSearch={handleSearch}
              />
              {/* result item  */}
              <div className="mb-4 text-center">
                <AppDescriptionWithDangerouslySetInnerHTML
                  text={`${ searchInput ? showQualificationItems?.length : allRPL_QualificationItems?.length} Courses Found`}
                  class_name="text-center"
                />
              </div>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-3">
                {searchInput ? (
                  <QualificationItemResult
                    allRPL_QualificationItems={showQualificationItems}
                  />
                ) : (
                  <QualificationItemResult
                    allRPL_QualificationItems={allRPL_QualificationItems}
                  />
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
