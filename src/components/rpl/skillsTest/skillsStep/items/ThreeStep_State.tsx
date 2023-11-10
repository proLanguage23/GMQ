import { AppSubTitle } from "@/components/share";
import Image from "next/image";

function ThreeStep_State({
  id,
  img,
  text,
  activeItem,
  onClicked,
}: any) {
  const handlerClick = () => {
    onClicked({
      selectArea: String(id),
      selectArea_text: text,
    });
  };

  return (
    <div
      className={`flex flex-col justify-center items-center hover:bg-secondary hover:text-white cursor-pointer  border border-secondary p-2 rounded-md ${
        activeItem === String(id) ? "bg-secondary text-white" : "bg-white"
      }`}
      onClick={() => handlerClick()}
    >
      <Image
        quality={100}
        placeholder="blur"
        src={img}
        alt={text}
        loading="lazy"
        blurDataURL="true"
      />
      <AppSubTitle
        text={text}
        class_name={`text-center uppercase font-bold my-1 ${
          activeItem === String(id) ? "text-white" : " "
        }`}
      />
    </div>
  );
}

export default ThreeStep_State;
