import { RPL_BannerData } from "@/data/RPL_Data";
import { useState } from "react";
import { AppModal, AppSubTitle, Container } from "../../share";
import AppLoader from "@/components/share/AppLoader";
import SkillsTestForm from "./SkillsTestForm";
// import SkillsTestForm from "./SkillsTestForm";
import { motion } from "framer-motion";

function SkillsTest() {
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };
  const { skillsTest } = RPL_BannerData;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.5
      }}
      viewport={{
        once: true,
      }}
    >
      <div
        className="bg-error cursor-pointer"
        onClick={() => handelModal()}
      >
        <Container>
          <div className="flex justify-center items-center py-2 pb-4 ">
            <AppLoader class_name='w-[70px]' />
            <AppSubTitle text={skillsTest?.text} class_name="md:text-[24px] text-[16px] text-white text-center" />
            <AppLoader class_name='w-[70px]' />
          </div>
        </Container>
      </div>
      {modalShow && (
        <AppModal handelModal={handelModal} content={<SkillsTestForm />} />
      )}
    </motion.section>
  );
}

export default SkillsTest;
