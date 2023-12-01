import PrivacyPolicyBody from '@/components/other/PrivacyPolicy/PrivacyPolicyBody'
import { DynamicHead } from '@/components/share'
import React from 'react'

function PrivacyPolicyPage() {
  return (
    <>
      <DynamicHead title="Privacy Policy - GMQ Global" description="Privacy Policy - GMQ Global" />
      <PrivacyPolicyBody />
    </>
  )
}

export default PrivacyPolicyPage
