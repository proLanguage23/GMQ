import { AppTitle, Container } from '@/components/share'
import { OurRenownIndustriesData } from '@/data/OurRenownIndustries'
import React from 'react'

function OurRenownIndustries() {
    const {title, data} = OurRenownIndustriesData
  return (
    <div className='py-9'>
        <Container>
            <div className="flex justify-center items-center">
                <AppTitle text={title} />
            </div> 
        </Container>
    </div>
  )
}

export default OurRenownIndustries