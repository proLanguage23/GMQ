import React from "react";
import CourseItem from "./CourseItem";
import { Container } from "@/components/share";
import { RPL_QualificationItem } from "..";
import QualificationItemResult from "./sub/QualificationItemResult";

function Courses({ data }: any) {
  return (
    <div className="py-16 ">
      <Container>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-2">
            {/* {data?.map((item: any, key: any) => (
              <CourseItem key={key} {...item} />
            ))} */}

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full sm:px-5">
              <QualificationItemResult allRPL_QualificationItems={data} />
            </div>
          </div>
          <div className="form p-3 bg-slate-100">
            <p>form</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Courses;
