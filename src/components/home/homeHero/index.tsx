import React from "react";
import { HomeBannerData } from "@/data/BannerData";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";

function HomeBanner() {
  return (
    <div className="">
      <AppSliderBanner data={HomeBannerData} />
    </div>
  );
}

export default HomeBanner;
