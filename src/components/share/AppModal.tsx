import { FaTimes } from "react-icons/fa";
import AppBtn from "./AppBtn";
function Modal({ handelModal, content }: any) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 modal overflow-x-auto ">
      <AppBtn
        text={<FaTimes size={30} className="text-customWhite" />}
        class_name="absolute top-3 right-9 text-white z-50"
        handleClick={() => handelModal()}
      />
      <div className="flex justify-center">{content}</div>
    </div>
  );
}

export default Modal;
