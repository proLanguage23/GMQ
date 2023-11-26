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

import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
  PageLink,
} from "@/components/share";
import { RPL_BannerData } from "@/data/RPL_Data";
import AppBgImg from "@/components/share/AppBgImg";
import { motion } from "framer-motion";

function RPLBanner() {
  const { title, link, description, bgImg } = RPL_BannerData;

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
      <div className="relative w-full md:h-[565px]">
        <Container>
          <div className="pt-40 md:w-2/4 w-full">
            <Swiper
              slidesPerView={1}
              cssMode={true}
              mousewheel={true}
              keyboard={true}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              centeredSlides={true}
              modules={[Mousewheel, Keyboard, Autoplay]}
              className="HomeBannerSwipeWrap"
            >
              {title?.map((item, key) => (
                <SwiperSlide key={key}>
                  <div className="w-fit h-18 max-h-fit overflow-hidden">
                    <AppTitle text={item?.text_one} class_name="text-white" />
                  </div>
                  <div className="w-fit h-18 max-h-fit overflow-hidden">
                    <AppTitle text={item?.text_two} class_name="text-white" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <AppDescriptionWithDangerouslySetInnerHTML
              text={description}
              class_name="!text-white"
            />
            {link?.map((item, key) => (
              <PageLink
                key={key}
                {...item}
                class_name="commonBtnStyle mt-3 hover:bg-transparent"
              />
            ))}
          </div>
        </Container>
        <AppBgImg BgImg={bgImg} alt={title[0]?.text_one + title[0]?.text_two} />
      </div>
    </motion.section>
  );
}

export default RPLBanner;
