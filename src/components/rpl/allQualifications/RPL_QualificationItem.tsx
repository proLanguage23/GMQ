import {
  AppBgImg,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppModal,
  AppSubTitle,
  PageLink,
} from "@/components/share";
import Image from "next/image";
import React, { useState } from "react";
import { BiSolidHandRight } from "react-icons/bi";
import SkillsTestForm from "../skillsTest/SkillsTestForm";

function RPL_QualificationItem({
  brandImg,
  link,
  content,
  RPL_Img,
  show,
}: any) {
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };
  return (
    <>
      <div className="w-full max-w-full rounded-2xl my-3  shadow flex flex-col justify-between flex-wrap z-0 bg-white">
        <div className="h-56 relative flex items-end md:p-5 p-3 overflow-hidden flex-wrap">
          <AppSubTitle
            text={content?.title}
            class_name="!justify-start block text-[20px] font-medium text-white capitalize "
          />
          <AppBgImg BgImg={RPL_Img} class_name="rounded-t-2xl " />
          <Image
            quality={100}
            placeholder="blur"
            src={brandImg}
            alt={"brandImg"}
            width={30}
            height={30}
            className="absolute top-1 right-1"
            loading="lazy"
            blurDataURL="true"
          />
        </div>

        <div className="flex flex-col p-3 flex-wrap flex-1">
          <div className="df">
            {content?.link?.slice(0, show).map((item: any, key: any) => (
              <div
                className="flex justify-start items-center gap-2 my-1  cursor-pointer"
                key={key}
                onClick={handelModal}
              >
                <BiSolidHandRight color="#00AAAC" size={20} />
                <div className="flex-1">
                  <AppDescriptionWithDangerouslySetInnerHTML
                    text={item?.text}
                    class_name="hover:underline !text-[14px] uppercase font-light "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3">
          <PageLink {...link} class_name="commonBtnStyle w-full" />
        </div>
      </div>

      {modalShow && (
        <AppModal handelModal={handelModal} content={<SkillsTestForm />} />
      )}
    </>
  );
}

export default RPL_QualificationItem;
