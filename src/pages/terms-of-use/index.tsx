import TermsOfUseBody from '@/components/other/TermsOfUse/TermsOfUseBody'
import { DynamicHead } from '@/components/share'
import React from 'react'

function TermsOfUsePage() {
    
  return (
    <>
      <DynamicHead title="Terms of Use - GMQ Global" description="Terms of Use - GMQ Global" />
      <TermsOfUseBody />
    </>
  )
}

export default TermsOfUsePage
