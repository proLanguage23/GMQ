import { Container } from '@/components/share';
import LeftToRight from '@/components/share/section/LeftToRight';
import { ScholarshipsDummyData } from '@/data/ScholarshipsData';
import React from 'react'

function ScholarshipsSectionThree() {
    const { ScholarshipsSectionThree } = ScholarshipsDummyData;
    const { left, right } = ScholarshipsSectionThree;
    return (
      <div className=" py-16">
        <Container>
          <LeftToRight
            tiny_mceEditor={left?.text}
            sideImg={right?.img}
            
          />
        </Container>
      </div>
    );
}

export default ScholarshipsSectionThree
