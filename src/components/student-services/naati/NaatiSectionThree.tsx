import { Container } from '@/components/share';
import { NAATI_Dummy_Data } from '@/data/services/NAATI_Data';
import React from 'react'
import ProgressiveApproach from '../pte/GroupTrainingPage/subItems/ProgressiveApproach';
import WeHelpYouLearnBetter from '../pte/GroupTrainingPage/subItems/WeHelpYouLearnBetter';

function NaatiSectionThree() {
    const { NaatiSectionThree } = NAATI_Dummy_Data;
    const { left, right } = NaatiSectionThree;
    return (
      <div className="py-9">
        <Container>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <ProgressiveApproach left={left} />
            <WeHelpYouLearnBetter right={right} />
          </div>
        </Container>
      </div>
    );
}

export default NaatiSectionThree
