import { AppTitle, Container } from '@/components/share'
import { TradeCourseDummyData } from '@/data/popular-courses/trade_courseData'
import React from 'react'
import CookeryCoursesSectionOneItem from '../CookeryCourse/subItem/CookeryCoursesSectionOneItem'

function TradeCourseSectionOne() {
   const {TradeCourseSectionOne} = TradeCourseDummyData
   const {title, data} = TradeCourseSectionOne
  return (
    <div className="py-9">
      <Container>
        <AppTitle text={title} class_name="text-center" />
        <div className="md:flex flex-wrap justify-center items-center gap-2 mt-9 grid sm:grid-cols-2 grid-cols-1">
          {data?.map((item:any, key:any) => (
            <CookeryCoursesSectionOneItem {...item} key={key} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default TradeCourseSectionOne
