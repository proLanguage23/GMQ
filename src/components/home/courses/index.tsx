import { AppTitle, Container } from "@/components/share";
import { HomeCoursesDummyData } from "@/data/HomeCoursesData";
import React from "react";
import CoursesItem from "./CoursesItem";
import { motion } from "framer-motion";

const defaultVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (key: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * key,
      duration: 0.5 * key,
    },
  }),
};

function HomeCourses() {
  const { title, CoursesData } = HomeCoursesDummyData;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      {" "}
      <div className="bg-grayCustom py-9">
        <Container>
          <div className="flex flex-col justify-center items-center flex-wrap">
            <AppTitle text={title} class_name="!text-center" isAnimation />
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-8 w-full">
              {CoursesData?.map((item, key) => (
                <CoursesItem
                  key={key}
                  {...item}
                  index={key}
                  variants={defaultVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={key}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </motion.div>
  );
}

export default HomeCourses;
