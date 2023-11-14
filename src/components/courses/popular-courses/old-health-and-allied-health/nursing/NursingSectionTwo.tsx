import React from 'react'
import { NursingCourseDummyDataOld } from '../../../../../data/popular-courses/NursingCourseData';
import { Container } from '@/components/share';
import LeftToRight from '@/components/share/section/LeftToRight';

function NursingSectionTwo() {
    const { NursingSectionTwo } = NursingCourseDummyDataOld;
    const { left, right } = NursingSectionTwo;
  return (
    <div className="py-16">
      <Container>
        <div>
          <LeftToRight
            title={right?.title}
            tiny_mceEditor={right?.text}
            sideImg={left?.img}
            leftImageToRight
          />
        </div>
      </Container>
    </div>
  )
}

export default NursingSectionTwo
