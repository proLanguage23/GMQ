import React from "react";
import { HomeBannerData } from "@/data/BannerData";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { motion } from "framer-motion";

function HomeBanner() {
  return (
    <section className=" w-full">
      <AppSliderBanner
        data={HomeBannerData}
        img_class_name="md:max-h-[500px]"
      />
    </section>
  );
}

export default HomeBanner;
