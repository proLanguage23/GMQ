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
import { Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import TestimonialItem from "./TestimonialItem";
import { motion } from "framer-motion";

function HomeTestimonials() {
  const { title, secondaryImg, TestimonialDummyData } =
    HomeTestimonialDummyData;
  return (

      <section className="pt-8 w-full">
        <Container class_name="!py-0">
          <div className="flex justify-center items-center flex-col gap-9 flex-wrap">
            <AppTitle text={title} class_name="md:my-8" isAnimation />
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

              <div className="flex justify-center items-end">
                <Image
                  src={secondaryImg}
                  alt={"logo"}
                  quality={100}
                  // priority={true}
                  loading="lazy"
                  blurDataURL="true"
                  className="w-fit object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
  );
}

export default HomeTestimonials;
