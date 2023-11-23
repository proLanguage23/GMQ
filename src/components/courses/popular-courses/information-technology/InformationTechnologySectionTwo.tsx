import { Container } from '@/components/share';
import LeftToRight from '@/components/share/section/LeftToRight';
import { InformationTechnologyDummyData } from '@/data/popular-courses/InformationTechnologyData';
import React from 'react'

function InformationTechnologySectionTwo() {
    const { InformationTechnologySectionTwo } = InformationTechnologyDummyData;
    const { left, right } = InformationTechnologySectionTwo;
    return (
      <div className="py-9">
        <Container>
          <LeftToRight
            title={left?.title}
            tiny_mceEditor={left?.text}
            sideImg={right?.img}
            leftImageToRight
            alt={left?.title}
          />
        </Container>
      </div>
    );
}

export default InformationTechnologySectionTwo