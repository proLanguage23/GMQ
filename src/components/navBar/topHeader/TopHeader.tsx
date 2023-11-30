import { SkillsTestForm } from "@/components/rpl";
import { AppBtn, AppModal, Container } from "@/components/share";
import { HomeFooterDummyData } from "@/data/HomeFooterData";
import React, { useState } from "react";

function TopHeader() {
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };
  const { socialLinks } = HomeFooterDummyData;
  return (
    <div className="border-b">
      <Container fullWidth class_name="lg:!px-9">
        <div className="flex sm:justify-between items-center gap-2 flex-wrap justify-center">
          <div className="flex justify-start items-center gap-2 text-primary">
            {socialLinks?.map((item: any, key: any) => {
              return (
                <a
                  href="#"
                  className="h"
                  key={key}
                >
                  {item?.icon}
                </a>
              );
            })}
          </div>
          <div className="df">
            <AppBtn text={"FREE 60 second skills check"} class_name="border px-4 py-2 rounded-full bg-secondary text-white hover:opacity-95" handleClick={() => handelModal()} />
          </div>
        </div>
      </Container>

      {modalShow && (
        <AppModal handelModal={handelModal} content={<SkillsTestForm />} />
      )}
    </div>
  );
}

export default TopHeader;
