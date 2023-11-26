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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="py-16 relative">
        <Container>
          <div className=" text-white rounded lg:p-12 p-9 lg:w-2/3 w-full bg-primary shadow">
            {description?.map((item, key) => (
              <div key={key} >
                <AppDescriptionWithDangerouslySetInnerHTML
                  text={item}
                  class_name=" text-white my-3"
                />
              </div>
            ))}
          </div>
        </Container>
        <AppBgImg BgImg={img} placeholder="empty" />
      </div>
    </motion.section>
  );
}

export default RPL_About;
