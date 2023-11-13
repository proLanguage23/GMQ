import { AppDescriptionWithDangerouslySetInnerHTML, AppTitle, Container } from '@/components/share'
import React from 'react'
import { NursingCourseDummyData } from './NursingCourseData';

function NursingSectionThree() {
    const { NursingSectionThree } = NursingCourseDummyData;
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
