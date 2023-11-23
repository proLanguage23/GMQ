import { Container } from '@/components/share';
import LeftToRight from '@/components/share/section/LeftToRight';
import { NAATI_Dummy_Data } from '@/data/services/NAATI_Data';
import React from 'react'

function NaatiSectionOne() {
    const { NaatiSectionOne } = NAATI_Dummy_Data;
    const { left, right } = NaatiSectionOne;
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

export default NaatiSectionOne
