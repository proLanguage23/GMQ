import {
  AppBgImg,
  AppDescriptionWithDangerouslySetInnerHTML,
  Container,
} from "@/components/share";
import { RPL_AboutData } from "@/data/RPL_Data";
import React from "react";
import { motion } from "framer-motion";

function RPL_About() {
  const { description, img } = RPL_AboutData;

  return (
    <section className="py-16 relative w-full">
      <Container>
        <div className=" text-white rounded lg:p-12 lg:w-2/3 w-full p-3">
          {description?.map((item, key) => (
            <div key={key}>
              <AppDescriptionWithDangerouslySetInnerHTML
                text={item}
                class_name=" text-white my-3 manropeFont"
              />
            </div>
          ))}
        </div>
      </Container>
      <AppBgImg BgImg={img} placeholder="empty" />
    </section>
  );
}

export default RPL_About;
