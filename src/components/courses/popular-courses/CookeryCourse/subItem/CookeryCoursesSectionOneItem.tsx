import { AppBgImg, AppModal, AppSubTitle, EntryForm } from "@/components/share";
import { contactFormPopUpData } from "@/data/ShareData";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function CookeryCoursesSectionOneItem({ img, title, btn, popUp_Element }: any) {
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };

  return (
    <>
      <div
        className="cursor-pointer relative rounded-2xl shadow border sm:w-[300px] h-[230px] w-full overflow-hidden flex items-end p-3 hover:opacity-95 transition-all z-0"
        onClick={handelModal}
      >
        <div className="flex justify-between items-center gap-2 w-full flex-wrap ">
          <div className="flex-1">
            <AppSubTitle
              text={title}
              class_name="text-white textShadowNormal leading-6"
            />
          </div>
          <div className="w-8 h-8 bg-secondary hover:bg-white group flex justify-center items-center rounded-full transition-all">
            <FaArrowRight className="text-white group-hover:text-primary transition-all" />
          </div>
        </div>

        <AppBgImg BgImg={img} alt={title} />
      </div>
      {modalShow && (
        <AppModal
          handelModal={handelModal}
          content={<EntryForm data={popUp_Element || contactFormPopUpData} />}
        />
      )}
    </>
  );
}

export default CookeryCoursesSectionOneItem;
