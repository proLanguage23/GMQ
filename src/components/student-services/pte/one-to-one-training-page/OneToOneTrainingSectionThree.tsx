import { Container } from '@/components/share';
import { OneToOneTrainingDummyData } from '@/data/services/PTE_Data';
import React from 'react'
import ProgressiveApproach from '../GroupTrainingPage/subItems/ProgressiveApproach';
import WeHelpYouLearnBetter from '../GroupTrainingPage/subItems/WeHelpYouLearnBetter';

function OneToOneTrainingSectionThree() {
  const { OneToOneTrainingSectionThree } = OneToOneTrainingDummyData;
  const { left, right } = OneToOneTrainingSectionThree;
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

export default OneToOneTrainingSectionThree
