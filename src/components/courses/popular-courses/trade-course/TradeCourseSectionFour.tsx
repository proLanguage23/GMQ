import { AppTitle, Container } from '@/components/share'
import AppAccordion from '@/components/share/section/AppAccordion'
import { TradeCourseDummyData } from '@/data/popular-courses/trade_courseData'
import React from 'react'

function TradeCourseSectionFour() {
    const {TradeCourseSectionFour} = TradeCourseDummyData
    const {title, data} = TradeCourseSectionFour
  return (
    <div className='py-9'>
      <Container>
        <AppTitle text={title} class_name="text-center" />
        <div className="mt-9">
            <AppAccordion data={data} />
        </div>
      </Container>
    </div>
  )
}

export default TradeCourseSectionFour
