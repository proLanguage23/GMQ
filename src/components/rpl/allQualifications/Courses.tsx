import React from "react";
import { Container } from "@/components/share";
import QualificationItemResult from "./sub/QualificationItemResult";
import { motion } from "framer-motion";

function Courses({ data = [] }: any) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="py-16 ">
        <Container>
          <div className="grid md:grid-cols-3 grid-cols-1">
            <div className="col-span-2">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full sm:px-5">
                <QualificationItemResult allRPL_QualificationItems={data} class_nameOfBtn = "sm:col-span-2 col-span-1 " />
              </div>
            </div>
            <div className="form p-3 bg-slate-100">
              <p>form</p>
            </div>
          </div>
        </Container>
      </div>
    </motion.section>
  );
}

export default Courses;
