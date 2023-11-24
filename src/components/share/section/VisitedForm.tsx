import React, { useEffect, useState } from "react";
import { AppModal } from "..";

function VisitedForm() {
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };

  useEffect(() => {
    setTimeout(function () {
      setModalShow(true);
    }, 4000);
    return setModalShow(false);
  }, []);

  const EntryForm = () => {
    return (
      <div className="border bg-white rounded overflow-auto md:w-2/3 w-full p-3 m-2 h-[90vh] mt-11">
        here is a entry form
      </div>
    );
  };

  return (
    <>
      {modalShow && (
        <AppModal handelModal={handelModal} content={<EntryForm />} />
      )}
    </>
  );
}

export default VisitedForm;
