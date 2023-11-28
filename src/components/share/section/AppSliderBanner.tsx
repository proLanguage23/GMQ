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
import { motion } from "framer-motion";

function AppSliderBanner({ data, class_name, img_class_name ="md:max-h-[450px]", ...rest }: any) {
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
          className={`HomeBannerSwipeWrap overflow-hidden object-cover  ${class_name}`}
        >
          {data?.map((item: any, key: any) => (
            <SwiperSlide key={key}>
              <Link href={item?.btn?.href} className="flex justify-center items-center">
                <Image
                  src={item?.img}
                  alt={item?.text || "GMQ slider img"}
                  quality={100}
                  // priority={true}
                  loading="lazy"
                  // blurDataURL="true"
                  placeholder="blur"
                  className={`HomeBannerSwipeWrapSliderImg ${img_class_name}`}
                  
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}

export default AppSliderBanner;
