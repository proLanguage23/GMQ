import React from 'react'
import { NursingCourseDummyData } from './NursingCourseData';
import { Container } from '@/components/share';
import LeftToRight from '@/components/share/section/LeftToRight';

function NursingSectionFour() {
  const { NursingSectionFour } = NursingCourseDummyData;
  const { left, right } = NursingSectionFour;
  return (
    <div className="py-16 bg-grayCustom">
      <Container>
        <div>
          <LeftToRight
            title={right?.title}
            tiny_mceEditor={right?.text}
            sideImg={left?.img}
            
          />
        </div>
      </Container>
    </div>
  )
}

export default NursingSectionFour
