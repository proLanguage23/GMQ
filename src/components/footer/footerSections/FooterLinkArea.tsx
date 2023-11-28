import { AppSubTitle, PageLink } from "@/components/share";
import { motion } from "framer-motion";
import React from "react";

function FooterLinkArea({ footerLinkGP }: any) {
  return (
    <div className="p-1 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1">
      {footerLinkGP?.map((item: any, key: any) => {
        return (
          <div
            className="mb-4 flex flex-col items-center md:items-start"
            key={key}
          >
            <AppSubTitle
              text={item?.title}
              class_name="text-white md:text-[20px] capitalize"
            />
            <div className="flex flex-col p-1 pl-2 opacity-90 flex-wrap">
              {item?.link?.map((link: any, linkKey: any) => (
                <motion.div
                  key={linkKey}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay:0.07 * linkKey,
                    duration: 0.5,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="text-center md:text-left"
                >
                  <PageLink
                    {...link}
                    isIcon={false}
                    class_name="text-[#dddddd] opacity-90 capitalize hover:opacity-100 hover:text-white transition-all md:w-fit md:text-left text-center w-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FooterLinkArea;
