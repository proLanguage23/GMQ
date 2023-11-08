import { RPL_BannerData } from "@/data/RPL_Data";
import { useState } from "react";
import { AppModal, AppSubTitle, Container } from "../../share";
import AppLoader from "@/components/share/AppLoader";
import SkillsTestForm from "./SkillsTestForm";
// import SkillsTestForm from "./SkillsTestForm";

function SkillsTest() {
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };
  const { skillsTest } = RPL_BannerData;

  return (
    <>
      <div
        className="bg-error cursor-pointer"
        onClick={() => handelModal()}
      >
        <Container>
          <div className="flex justify-center items-center py-2 pb-4 ">
            <AppLoader class_name='w-[70px]' />
            <AppSubTitle text={skillsTest?.text} class_name="text-[24px] text-white" />
            <AppLoader class_name='w-[70px]' />
          </div>
        </Container>
      </div>
      {modalShow && (
        <AppModal handelModal={handelModal} content={<SkillsTestForm />} />
      )}
    </>
  );
}

export default SkillsTest;
