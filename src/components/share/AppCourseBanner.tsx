import React from 'react'
import { AppTitle } from '@/components/share'

function AppCourseBanner({text, class_name}:any) {
  return (
    <div className={`w-full bg-primary flex flex-col justify-center items-center py-24 ${class_name}`}>
      <AppTitle text={text} class_name="text-white !text-center w-full md:!text-[30px] capitalize manropeFont"  />
    </div>
  )
}

export default AppCourseBanner
