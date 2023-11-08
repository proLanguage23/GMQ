import React from 'react'

function AppSubTitle({ text, class_name }: any) {
  return (
    <>
        <p className={`text-[18px] text-primary ${class_name}`}>{text || ''}</p>
    </>
  )
}

export default AppSubTitle