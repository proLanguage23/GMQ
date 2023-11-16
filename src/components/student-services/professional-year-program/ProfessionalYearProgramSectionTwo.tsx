import { AppDescriptionWithDangerouslySetInnerHTML, Container } from '@/components/share';
import { ProfessionalYearProgramDummyData } from '@/data/services/ProfessionalYearProgramData';
import React from 'react'

function ProfessionalYearProgramSectionTwo() {
    const { ProfessionalYearProgramSectionTwo } = ProfessionalYearProgramDummyData;
    const { text } = ProfessionalYearProgramSectionTwo;
  return (
    <section className='py-9'>
      <Container>
        <AppDescriptionWithDangerouslySetInnerHTML text={text} />
      </Container>
    </section>
  )
}

export default ProfessionalYearProgramSectionTwo
