import React, { useEffect, useState } from "react";
import { AppModal } from "..";
import { motion } from "framer-motion";

function VisitedForm() {
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };

  useEffect(() => {
    setTimeout(function () {
      setModalShow(true);
    }, 3000);
    return setModalShow(false);
  }, []);

  const EntryForm = () => {
    return (
      <motion.div
        className="border bg-white rounded overflow-auto md:w-2/3 w-full p-3 m-2 h-[90vh] mt-11"
        initial={{ opacity: 0, scale: 1.2, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.2,
        }}
        viewport={{
          once: true,
        }}
      >
        here is a entry form
      </motion.div>
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
