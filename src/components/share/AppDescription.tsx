import React from 'react'
import { capitalizeSentences } from './lib'

function AppDescription({text, class_name}:any) {
  return (
    <p className={`text-text text-base ${class_name}`}>{capitalizeSentences(text)}</p>
  )
}

export default AppDescription