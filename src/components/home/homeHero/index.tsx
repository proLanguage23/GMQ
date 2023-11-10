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
import { HomeBannerData } from "@/data/HomeBannerData";
import Image from "next/image";
import Link from "next/link";

function HomeBanner() {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="HomeBannerSwipeWrap"
      >
        {HomeBannerData?.map((item, key) => (
            <SwiperSlide key={key}>
              <Link href={item?.btn?.href}>
                <Image
                  src={item?.img}
                  alt={"Home Banner SwipeWrap slider img"}
                  quality={100}
                  // priority={true}
              loading="lazy"
              blurDataURL="true"
                  className="HomeBannerSwipeWrapSliderImg"
                />
              </Link>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeBanner;
