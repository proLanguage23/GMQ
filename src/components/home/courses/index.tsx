import { AppTitle, Container } from "@/components/share";
import { HomeCoursesDummyData } from "@/data/HomeCoursesData";
import React from "react";
import CoursesItem from "./CoursesItem";
import { motion } from "framer-motion";
import OldCoursesItem from "./OldCoursesItem";

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
            <div className="w-full mt-8 flex justify-center gap-2 flex-wrap">
              {/* {CoursesData?.map((item, key) => (
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
              ))} */}
              {CoursesData?.map((item, key) => (
                <OldCoursesItem
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
                  class_name="rounded-2xl md:w-[32%] sm:w-[48%] w-full max-w-full"
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
