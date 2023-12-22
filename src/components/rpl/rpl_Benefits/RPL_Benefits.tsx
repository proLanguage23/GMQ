import { AppDescriptionWithDangerouslySetInnerHTML, AppTitle, Container, PageLink } from '@/components/share';
import { RPL_Certificate_BenefitsDummyData } from '@/data/RPL_Data';
import React from 'react'

function RPL_Benefits() {
    const { title, description } = RPL_Certificate_BenefitsDummyData;
    return (
      <section className="py-9">
        <Container>
          <div className="flex flex-col justify-center items-center gap-3">
            <AppTitle text={title} class_name="text-center" />
            <div className="grid grid-cols-1 items-center justify-center gap-4">
              <AppDescriptionWithDangerouslySetInnerHTML
                text={description}
                class_name="text-center p-2"
              />
            </div>
          </div>
          <div className=" pt-16 flex justify-center items-center">
            <PageLink text="apply Now" href="/rpl/rpl-form" class_name="border p-3 px-9 rounded-full bg-primary text-white" />
          </div>
        </Container>
      </section>
    );
}

export default RPL_Benefits
