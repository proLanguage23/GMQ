import React, { useEffect, useState } from "react";
import { AppModal, EntryForm } from "..";
import EntryImgPopUp from "../EntryImgPopUp";

function PopUpElement({data}:any) {
  const [modalShow, setModalShow] = useState(true);

  const handelModal = () => {
    setModalShow(!modalShow);
  };

  useEffect(() => {
    setTimeout(function () {
      setModalShow(true);
    }, 3000);
    return setModalShow(false);
  }, []);

  return (
    <>
      {modalShow && (
        <AppModal
          handelModal={handelModal}
          content={<EntryImgPopUp data={data} />}
        />
      )}
    </>
  );
}

export default PopUpElement;