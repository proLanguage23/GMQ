import { Container } from '@/components/share';
import React from 'react'
import { NursingCourseDummyDataOld } from '../../../../../data/popular-courses/NursingCourseData';
import LeftToRight from '@/components/share/section/LeftToRight';

function NursingSectionSix() {
    const { NursingSectionSix } = NursingCourseDummyDataOld;
    const { left, right } = NursingSectionSix;
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

export default NursingSectionSix