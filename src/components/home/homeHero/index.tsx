import React from "react";
import { HomeBannerData } from "@/data/BannerData";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { motion } from "framer-motion";

function HomeBanner() {
  return (
    <motion.div
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
      <AppSliderBanner data={HomeBannerData} img_class_name="md:max-h-[500px]" />
    </motion.div>
  );
}

export default HomeBanner;
