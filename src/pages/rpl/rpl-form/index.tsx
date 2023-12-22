import { AppDescriptionWithDangerouslySetInnerHTML, AppTitle, Container } from '@/components/share'
import { contactFormOfRPL } from '@/data/ShareData'
import React from 'react'

function RPLFormPage() {
  return (
    <div className='py-16'>
        <Container>
            <div className="flex justify-center items-center flex-col">
              <AppTitle text={`Recognition of Prior Learning From`}/>
                <AppDescriptionWithDangerouslySetInnerHTML text={'<p class="text-center !mb-9">Hey, we’d like to know you better too! </p>'} />
                <AppDescriptionWithDangerouslySetInnerHTML text={contactFormOfRPL} class_name="h-[11300px]" />
            </div>
        </Container>
    </div>
  )
}

export default RPLFormPage