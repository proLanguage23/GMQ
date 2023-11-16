import { AppDescriptionWithDangerouslySetInnerHTML, Container } from '@/components/share';
import { hospitality_and_cookeryDummyData } from '@/data/popular-courses/hospitality_and_cookeryData';
import React from 'react'

function CookeryCoursesSectionThree() {
  const { CookeryCoursesSectionThree } = hospitality_and_cookeryDummyData;
  const { text } = CookeryCoursesSectionThree;

  return (
    <div className='py-9'>
      <Container>
        <AppDescriptionWithDangerouslySetInnerHTML text={text} />
      </Container>
    </div>
  )
}

export default CookeryCoursesSectionThree
