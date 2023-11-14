import { AppDescriptionWithDangerouslySetInnerHTML, AppTitle, Container } from '@/components/share'
import React from 'react'
import { NursingCourseDummyDataOld } from '../../../../../data/popular-courses/NursingCourseData';

function NursingSectionThree() {
    const { NursingSectionThree } = NursingCourseDummyDataOld;
    const { title, text } = NursingSectionThree;
  return (
    <div className='py-16'>
      <Container>
        <div className="df">
            <AppTitle text={title} class_name="!font-medium" />
            <AppDescriptionWithDangerouslySetInnerHTML text={text} />
        </div>
      </Container>
    </div>
  )
}

export default NursingSectionThree
