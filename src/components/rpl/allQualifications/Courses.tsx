import React from "react";
import CourseItem from "./CourseItem";
import { Container } from "@/components/share";

function Courses({ data }: any) {
  return (
    <div className="py-16 ">
      <Container>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-2">
            {data?.map((item: any, key: any) => (
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

export default Courses;
