import { AppTitle, Container } from "@/components/share";
import React, {useState, useLayoutEffect} from "react";
import CookeryCoursesSectionOneItem from "../CookeryCourse/subItem/CookeryCoursesSectionOneItem";
import { InformationTechnologyDummyData } from "@/data/popular-courses/InformationTechnologyData";
import { RPL_QualificationData } from "@/data/RPL_Data";
import QualificationItemResult from "@/components/rpl/allQualifications/sub/QualificationItemResult";

function InformationTechnologySectionOne() {
  const { InformationTechnologySectionOne } = InformationTechnologyDummyData;
  const { title, data } = InformationTechnologySectionOne;

  const [informationTechnologyData, setInformationTechnologyData] = useState<any>([]);
  const { RPL_QualificationItems } = RPL_QualificationData;

  useLayoutEffect(() => {
    const result = RPL_QualificationItems?.filter(
      (item) => item.content?.title?.toLocaleLowerCase() === "information technology"
    );
    setInformationTechnologyData(result[0]?.content?.link);
  }, [RPL_QualificationItems]);



  return (
    <div className="py-9 bg-grayCustom/50">
      <Container>
        <AppTitle text={title} heading class_name="text-center capitalize" />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-3 mt-9">
          <QualificationItemResult allRPL_QualificationItems={informationTechnologyData} />
        </div>
      </Container>
    </div>
  );
}

export default InformationTechnologySectionOne;
