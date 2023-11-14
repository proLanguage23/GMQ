import React from 'react'
import { NursingCourseDummyDataOld } from '../../../../../data/popular-courses/NursingCourseData';
import { Container, PageLink } from '@/components/share';
import LeftToRight from '@/components/share/section/LeftToRight';

function NursingSectionFive() {
    const { NursingSectionFive } = NursingCourseDummyDataOld;
    const { left, right } = NursingSectionFive;
  return (
    <div className="py-16">
      <Container>
        <div>
          <LeftToRight
            title={right?.title}
            tiny_mceEditor={right?.text}
            sideImg={left?.img}
            leftImageToRight
            btn={right?.btn}
            isBtn
          />
        </div>
      </Container>
    </div>
  )
}

export default NursingSectionFive
