import { AppDescriptionWithDangerouslySetInnerHTML, AppTitle, Container } from '@/components/share';
import LeftToRight from '@/components/share/section/LeftToRight';
import { VisaAndMigrationCounsellingDummyData } from '@/data/VisaAndMigrationCounsellingData';
import React from 'react'

function VisaAndMigrationCounsellingSectionTwo() {
    const { VisaAndMigrationCounsellingSectionTwo } =
      VisaAndMigrationCounsellingDummyData;
    const { title, right, left, description } = VisaAndMigrationCounsellingSectionTwo;
    return (
      <div className="py-16 bg-grayCustom">
        <Container>
        <div className="flex justify-center items-center flex-col mb-7 gap-4">
          <AppTitle text={title} class_name="text-center" />
          <AppDescriptionWithDangerouslySetInnerHTML text={description} class_name="text-center" />
        </div>
        <LeftToRight
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
          leftImageToRight
        />
        </Container>
      </div>
    );
}

export default VisaAndMigrationCounsellingSectionTwo
