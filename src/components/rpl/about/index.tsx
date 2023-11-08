import { AppBgImg, AppDescriptionWithDangerouslySetInnerHTML, Container } from "@/components/share";
import { RPL_AboutData } from "@/data/RPL_Data";
import React from "react";

function RPL_About() {
  const { description, img } = RPL_AboutData;
  console.log('===123=================================');
  console.log(img);
  console.log('====================================');
  return (
    <div className="py-16 relative">
      <Container>
        <div className=" text-white rounded lg::p-12 p-5 lg:w-1/2 w-full bg-primary shadow">
          {description?.map((item, key) => (
            <div key={key}>
              <AppDescriptionWithDangerouslySetInnerHTML text={item} class_name=" text-white my-3" />
            </div>
          ))}
        </div>
      </Container>
      <AppBgImg BgImg={img} placeholder="empty" />
    </div>
  );
}

export default RPL_About;
