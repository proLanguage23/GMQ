import CookeryCoursesSectionOneItem from "@/components/courses/popular-courses/CookeryCourse/subItem/CookeryCoursesSectionOneItem";
import { AppTitle, Container } from "@/components/share";
import { HomeTopQualificationsData } from "@/data/HomeTopQualifications";
import { contactFormPopUpData } from "@/data/ShareData";
import React from "react";

function HomeTopQualifications() {
  const { title, data } = HomeTopQualificationsData;
  return (
    <div className="py-9">
      <Container fullWidth>
        <div className="flex flex-col justify-center items-center">
          <AppTitle text={title} />
          <div className="flex justify-center flex-wrap gap-2 mt-9">
            {data?.map((item, key) => (
              // <PteServiceItem key={key} {...item} />
              <CookeryCoursesSectionOneItem {...item} key={key} popUp_Element={contactFormPopUpData} class_name="sm:w-[270px]" />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeTopQualifications;
