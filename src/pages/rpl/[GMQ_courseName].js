import React, { useState } from "react";
import { useRouter } from "next/router";
import { AppCourseBanner } from "@/components/share";
import Courses from "@/components/rpl/allQualifications/Courses";
import { useLayoutEffect } from "react";
import { RPL_QualificationData } from "@/data/RPL_Data";
import { DynamicHead,VisitedForm } from "@/components/share";

function GMQ_coursePage() {
  const [pageData, setPageData] = useState();
  const router = useRouter();
  // GET SERVICE NAME FROM URL
  const { GMQ_courseName } = router.query;

  useLayoutEffect(() => {
    if (GMQ_courseName) {
      const { RPL_QualificationItems } = RPL_QualificationData;
      const getPageItem = RPL_QualificationItems?.filter((item) => {
        const flitter_path = item?.link?.href?.split("/");
        const get_oneSide_value = flitter_path[flitter_path.length - 1];
        return get_oneSide_value === GMQ_courseName;
      });

      if (getPageItem.length === 0 || getPageItem.length < 0) {
        router.push("/404");
        return;
      }

      setPageData(...getPageItem);
    }
  }, [GMQ_courseName, router]);

  return (
    <>
      <DynamicHead title={`${pageData?.content?.title}-GMQ Global`} />
      <AppCourseBanner text={pageData?.content?.title} />
      <Courses data={pageData?.content?.link} />
      <VisitedForm />
    </>
  );
}

export default GMQ_coursePage;
