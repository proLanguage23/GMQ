import { AppTitle, Container } from "@/components/share";
import React, { useLayoutEffect, useState } from "react";
import { hospitality_and_cookeryDummyData } from "@/data/popular-courses/hospitality_and_cookeryData";
import { RPL_QualificationData } from "@/data/RPL_Data";
import QualificationItemResult from "@/components/rpl/allQualifications/sub/QualificationItemResult";
import { motion } from "framer-motion";

function CookeryCoursesSectionOne() {
  const [cookeryHospitalityData, setCookeryHospitalityData] = useState<any>([]);
  const { CookeryCoursesSectionOne } = hospitality_and_cookeryDummyData;
  const { title } = CookeryCoursesSectionOne;
  const { RPL_QualificationItems } = RPL_QualificationData;

  useLayoutEffect(() => {
    const result = RPL_QualificationItems?.filter(
      (item) =>
        item.content?.title?.toLocaleLowerCase() ===
        "commercial cookery & hospitality"
    );
    setCookeryHospitalityData(result[0]?.content?.link);
  }, [RPL_QualificationItems]);
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
      <div className="py-9 bg-grayCustom/50">
        <Container>
          <AppTitle text={title} heading class_name="text-center capitalize" />
          {/* <div className="md:flex flex-wrap justify-center items-center gap-2 mt-9 grid sm:grid-cols-2 grid-cols-1">
          {cookeryHospitalityData?.map((item: any, key: any) => (
            <CookeryCoursesSectionOneItem {...item} key={key} />
          ))}
        </div> */}
          <div className="flex justify-center flex-wrap gap-2 mt-9">
            <QualificationItemResult
              allRPL_QualificationItems={cookeryHospitalityData}
              outPutItemNumber={8}
              class_name="lg:w-[24%] md:w-[32%] sm:w-[48%] w-[95%] max-w-[380px]"
            />
          </div>
        </Container>
      </div>
    </motion.section>
  );
}

export default CookeryCoursesSectionOne;
