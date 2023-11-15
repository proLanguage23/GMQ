import { AppDescriptionWithDangerouslySetInnerHTML, Container } from '@/components/share';
import { CookeryCoursesInAustraliaDummyData } from '@/data/popular-courses/cookeryCoursesInAustraliaData';
import React from 'react'

function CookeryCoursesSectionThree() {
  const { CookeryCoursesSectionThree } = CookeryCoursesInAustraliaDummyData;
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
