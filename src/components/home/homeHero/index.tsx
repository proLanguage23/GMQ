import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { HomeBannerData } from "@/data/BannerData";
import Image from "next/image";
import Link from "next/link";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";

function HomeBanner() {
  return (
    <div className="">
      <AppSliderBanner data={HomeBannerData} />
    </div>
  );
}

export default HomeBanner;
