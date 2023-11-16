import { AppDescriptionWithDangerouslySetInnerHTML, Container } from '@/components/share';
import { InformationTechnologyDummyData } from '@/data/popular-courses/InformationTechnologyData';
import React from 'react'

function InformationTechnologySectionThree() {
  const { InformationTechnologySectionThree } = InformationTechnologyDummyData;
  const { text } = InformationTechnologySectionThree;

  return (
    <div className='py-9'>
      <Container>
        <AppDescriptionWithDangerouslySetInnerHTML text={text} />
      </Container>
    </div>
  )
}

export default InformationTechnologySectionThree