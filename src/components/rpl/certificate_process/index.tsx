import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import { RPL_Certificate_ProcessDummyData } from "@/data/RPL_Data";
import React from "react";

function RPL_Certificate_Process() {
  const { title, description } = RPL_Certificate_ProcessDummyData;
  return (
    <section className="py-9 bg-primary">
      <Container>
        <div className="flex flex-col justify-center items-center gap-3">
          <AppTitle text={title} class_name="text-center text-white" />
          <div className="grid grid-cols-1 items-center justify-center gap-4">
            <AppDescriptionWithDangerouslySetInnerHTML
              text={description}
              class_name="text-center p-2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default RPL_Certificate_Process;
