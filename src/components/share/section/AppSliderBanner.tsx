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
import Link from "next/link";
import Image from "next/image";

function AppSliderBanner({ data, class_name, ...rest }: any) {
  return (
    <div>
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
        {...rest}
        className={`HomeBannerSwipeWrap ${class_name}`}
      >
        {data?.map((item: any, key: any) => (
          <SwiperSlide key={key}>
            <Link href={item?.btn?.href}>
              <Image
                src={item?.img}
                alt={"Home Banner SwipeWrap slider img"}
                quality={100}
                // priority={true}
                loading="lazy"
                // blurDataURL="true"
                placeholder="blur"
                className="HomeBannerSwipeWrapSliderImg"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AppSliderBanner;
