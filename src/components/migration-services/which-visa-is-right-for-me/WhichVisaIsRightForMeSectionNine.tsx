import { Container } from '@/components/share';
import LeftToRight from '@/components/share/section/LeftToRight';
import { WhichVisaIsRightForMeDummyData } from '@/data/ServiceMigrationServicesData';
import React from 'react'

function WhichVisaIsRightForMeSectionNine() {
    const { sectionNine } = WhichVisaIsRightForMeDummyData;
    const { left, right } = sectionNine;
    return (
      <div className="py-16">
        <Container>
          <LeftToRight
            title={right?.title}
            tiny_mceEditor={right?.text}
            sideImg={left?.img}
            isBtn
            btn={right?.btn}
            leftImageToRight
          />
        </Container>
      </div>
    );
}

export default WhichVisaIsRightForMeSectionNine
