import React from "react";
import { Container, PageLink } from "../share";
import { HomeFooterDummyData } from "@/data/HomeFooterData";
import AppBgImg from "../share/AppBgImg";
import LogoArea from "./footerSections/LogoArea";
import FooterLinkArea from "./footerSections/FooterLinkArea";
import CopyRightArea from "./footerSections/CopyRightArea";
import { motion } from "framer-motion";

function Footer() {
  const {
    generalData,
    socialLinks,
    footerLinkGP,
    countries,
    copyRight,
    secondaryImg,
  } = HomeFooterDummyData;
  return (
    <motion.section
      className=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="pt-24 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-1">
            <LogoArea {...generalData} />
            <div className="lg:col-span-2">
              <FooterLinkArea footerLinkGP={footerLinkGP} />
            </div>
          </div>
        </Container>
        <div className="p-2 py-4 flex justify-center items-center gap-2 flex-wrap bg-secondary">
          {countries?.map((item, key) => (
            <PageLink
              key={key}
              {...item}
              isIcon={false}
              class_name="px-2 text-white capitalize"
            />
          ))}
        </div>
        <CopyRightArea text={copyRight} socialLinkData={socialLinks} />
        <AppBgImg BgImg={secondaryImg} />
      </div>
    </motion.section>
  );
}

export default Footer;
