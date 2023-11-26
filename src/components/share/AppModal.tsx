import { FaTimes } from "react-icons/fa";
import AppBtn from "./AppBtn";
import { motion } from "framer-motion";

function Modal({ handelModal, content }: any) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen z-50 modal overflow-x-hidden overflow-y-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <motion.div
        className="absolute top-3 right-[3%] bg-black rounded z-50"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0  }}
        transition={{
          duration: 0.5,
          delay: 1
        }}
      >
        <AppBtn
          text={<FaTimes size={30} className="text-customWhite" />}
          class_name="text-white"
          handleClick={() => handelModal()}
        />
      </motion.div>
      <div className="flex justify-center">{content}</div>
    </motion.div>
  );
}

export default Modal;
