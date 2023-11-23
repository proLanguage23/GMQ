import { Container } from '@/components/share';
import LeftToRight from '@/components/share/section/LeftToRight';
import { OneToOneTrainingDummyData } from '@/data/services/PTE_Data';
import React from 'react'

function OneToOneTrainingSectionOne() {
    const { OneToOneTrainingSectionOne } = OneToOneTrainingDummyData;
    const { left, right } = OneToOneTrainingSectionOne;
    return (
      <div className="py-9">
        <Container>
          <LeftToRight
            title={left?.title}
            tiny_mceEditor={left?.text}
            sideImg={right?.img}
            leftImageToRight
            heading
            alt={left?.title}
          />
        </Container>
      </div>
    );
}

export default OneToOneTrainingSectionOne
