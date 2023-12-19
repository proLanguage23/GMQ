import React from "react";
import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
  Container,
} from "../share";
import { LocationOfGoogleMap } from "@/data/ShareData";
import { MdLocationOn } from "react-icons/md";
import { ContactDummyData } from "@/data/ContactData";
import { motion } from "framer-motion";

function ContactMap() {
  const { ContactSectionOne } = ContactDummyData;
  const { title, text, data } = ContactSectionOne;
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
      <div className="py-9">
        <Container>
          <div className="mb-9 flex flex-col justify-center items-center">
            <AppTitle text={title} class_name="text-center " />
            {/* <AppDescriptionWithDangerouslySetInnerHTML
              text={text}
              class_name="text-center md:w-2/3"
            /> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full mt-9">
              {data?.map((item, key) => (
                <div
                  className="flex justify-between items-center flex-wrap gap-4 border-2 rounded p-1 border-secondary"
                  key={key}
                >
                  <div className=" bg-secondary p-4 rounded">
                    {item?.asserts}
                  </div>
                  <div className="flex-1">
                    <AppSubTitle text={item?.title} class_name="text-[20px]" />
                    <AppDescriptionWithDangerouslySetInnerHTML
                      text={item?.text}
                      class_name="!text-[18px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-5 grid-cols-1 gap-5 rounded">
            <div className="md:col-span-4 shadow-xl">
              <AppDescriptionWithDangerouslySetInnerHTML
                text={LocationOfGoogleMap}
                class_name="border-2 w-full rounded "
              />
            </div>
            <div className=" md:p-2 flex justify-center items-center p-5">
              <div className="flex flex-col justify-center items-center pt-5 border rounded-2xl rounded-b-3xl bg-secondary Tir shadow-xl">
                <MdLocationOn size={32} />
                <AppSubTitle
                  text={"Address: "}
                  class_name="mt-3 text-[24px] text-white"
                />
                <AppDescriptionWithDangerouslySetInnerHTML
                  text={`5/6 Bromham Pl, Richmond VIC 3121, Australia`}
                  class_name="text-center underline text-white p-3"
                />
                <a
                  target="__blank"
                  href="https://www.google.com/maps/dir//GMQ+Global,+5%2F6+Bromham+Pl,+Richmond+VIC+3121,+Australia/@-37.8141804,144.9922426,15.6z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2760f689b19da547:0x8fe7cbbeb2c67a50!2m2!1d144.997913!2d-37.813717?hl=en&entry=ttu"
                  className="hover:opacity-90 transition-all w-full p-5 text-center capitalize bg-primary rounded-b-3xl mt-5 text-white"
                >
                  get Direction
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </motion.section>
  );
}

export default ContactMap;
