import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
  DynamicHead,
} from "@/components/share";
import { contactFormOfPTE } from "@/data/ShareData";
import React from "react";

function PTEFormPage() {
  return (
    <>
      <DynamicHead />
      <Container>
        <div className="py-14">
          <div className="flex justify-center items-center flex-col">
            <AppTitle text={` Pearson Test of English From`} />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={
                '<p class="text-center !mb-9">Hey, we’d like to know you better too! </p>'
              }
            />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={contactFormOfPTE}
              class_name="h-[3100px]"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default PTEFormPage;
