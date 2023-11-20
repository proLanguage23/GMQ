import { Container } from '@/components/share';
import { MockTestDummyData } from '@/data/services/PTE_Data';
import React from 'react'
import ProgressiveApproach from '../GroupTrainingPage/subItems/ProgressiveApproach';
import WeHelpYouLearnBetter from '../GroupTrainingPage/subItems/WeHelpYouLearnBetter';

function MockTestSectionThree() {
    const { MockTestSectionThree } = MockTestDummyData;
    const { left, right } = MockTestSectionThree;
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

export default MockTestSectionThree
