import { Container } from "@/components/share";
import { RPL_QualificationData } from "@/data/RPL_Data";
import React, { useState, useLayoutEffect } from "react";
import CourseItem from "./CourseItem";

function RPL_AllQualificationsList() {
  const [RPL_AllQualificationsListData, setRPL_AllQualificationsListData] =
    useState<any>();
  const { RPL_QualificationItems } = RPL_QualificationData;

  useLayoutEffect(() => {
    if (RPL_QualificationItems) {
      const firstResult = RPL_QualificationItems?.map(
        (item) => item?.content?.link
      );

      setRPL_AllQualificationsListData(firstResult.flat(Infinity));
    }
  }, [RPL_QualificationItems]);

  return (
    <div className="py-16">
      <Container>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-2">
            {RPL_AllQualificationsListData &&
              RPL_AllQualificationsListData?.map((item: any, key: any) => (
                <CourseItem key={key} {...item} />
              ))}
          </div>
          <div className="form p-3 bg-slate-100">
            <p>form</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default RPL_AllQualificationsList;