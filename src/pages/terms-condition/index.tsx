import TermsConditionBody from '@/components/other/termsCondition/termsConditionBody'
import { DynamicHead } from '@/components/share'
import React from 'react'

function TermsConditionPage() {
  return (
    <>
      <DynamicHead title="Terms & Condition - GMQ Global" description="Terms & Condition - GMQ Global" />
      <TermsConditionBody />
    </>
  )
}

export default TermsConditionPage
