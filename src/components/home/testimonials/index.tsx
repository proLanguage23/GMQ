import { AppTitle, Container } from "@/components/share";
import { HomeTestimonialDummyData } from "@/data/HomeTestimonialData";
import Image from "next/image";
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
import TestimonialItem from "./TestimonialItem";

function HomeTestimonials() {
  const { title, secondaryImg, TestimonialDummyData } =
    HomeTestimonialDummyData;
  return (
    <div className="pt-8">
      <Container class_name="!py-0">
        <div className="flex justify-center items-center flex-col gap-9 flex-wrap">
          <AppTitle text={title} class_name="md:my-8" />
          <div className="w-full grid lg:grid-cols-2 grid-cols-1">
            <div className="p-5 md:p-3">
              <Swiper
                slidesPerView={1}
                spaceBetween={15}
                cssMode={true}
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
                modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
                className="HomeTestimonialSwipeWrap"
              >
                {TestimonialDummyData?.map((item, key) => (
                  <SwiperSlide key={key}>
                    <TestimonialItem {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex justify-center flex-wrap">
              <Image
                src={secondaryImg}
                alt={"logo"}
                quality={100}
                width={350}
                priority={true}
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeTestimonials;