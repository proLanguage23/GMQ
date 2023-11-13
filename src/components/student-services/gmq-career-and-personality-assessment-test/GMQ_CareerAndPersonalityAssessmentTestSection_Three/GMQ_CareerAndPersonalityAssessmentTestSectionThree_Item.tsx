import { AppDescriptionWithDangerouslySetInnerHTML } from '@/components/share'
import AppImg from '@/components/share/AppImg'
import React from 'react'

function GMQ_CareerAndPersonalityAssessmentTestSectionThree_Item({text, img}:any) {
  return (
    <div className='p-4 flex flex-col justify-center items-center gap-3 shadow rounded-3xl bg-white border-secondary border-4' >
      <AppImg src={img} alt={text} class_name="rounded-full p-1 w-[150px] h-[150px]" />
      <AppDescriptionWithDangerouslySetInnerHTML text={text} class_name="font-bold" />
    </div>
  )
}

export default GMQ_CareerAndPersonalityAssessmentTestSectionThree_Item
