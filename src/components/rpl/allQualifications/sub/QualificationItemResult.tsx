import {
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppModal,
  EntryForm,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import React, { useState } from "react";
import { motion } from "framer-motion";

function QualificationItemResult({ allRPL_QualificationItems }: any) {
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };

  return (
    <>
      {allRPL_QualificationItems?.map((item: any, key: any) => (
        <motion.div
          className="p-2 bg-white rounded-[24px] flex flex-col shadow border border-secondary/30 hover:border-secondary transition-all"
          key={key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1 * key,
          }}
          viewport={{
            once: true,
          }}
          custom={key}
        >
          <AppImg
            src={item?.img}
            alt={item?.text}
            height={250}
            class_name="rounded-[16px] object-cover lg:h-[200px] sm:h-[200px] h-[250px] w-full"
          />

          <div className="my-4 flex-1">
            <AppDescriptionWithDangerouslySetInnerHTML
              text={item?.text}
              class_name="uppercase mb-2 font-bold text-secondary group-hover:!text-white text-center "
            />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={item?.description}
              class_name=" group-hover:!text-white font-light text-center line-clamp-3"
            />
          </div>
          <AppBtn
            text={"Contact Now"}
            class_name="commonBtnStyle w-full rounded-2xl mt-4"
            handleClick={handelModal}
          />
        </motion.div>
      ))}

      {modalShow && (
        <AppModal handelModal={handelModal} content={<EntryForm />} />
      )}
    </>
  );
}

export default QualificationItemResult;
