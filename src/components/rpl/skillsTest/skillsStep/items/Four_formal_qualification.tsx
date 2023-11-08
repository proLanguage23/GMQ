import { AppSubTitle } from "@/components/share";
 
function Four_formal_qualification({
  id,
  assert,
  text,
  activeItem,
  onClicked,
}: any) {
    
  const handlerClick = () => {
    onClicked({
      selectArea: String(id),
      Do_you_have_formal_qualification_text: text,
    });
  };

  return (
    <div
      className={`flex flex-col justify-center items-center flex-wrap hover:bg-secondary hover:text-white cursor-pointer border border-secondary p-2 rounded-md w-24 h-20 ${
        activeItem === String(id) ? "bg-secondary" : "bg-white"
      }`}
      onClick={() => handlerClick()}
    >
      <span>{assert}</span>
      <AppSubTitle
        text={text}
        class_name={`text-center uppercase font-bold my-1 ${
          activeItem === String(id) ? "text-white" : ""
        }`}
      />
    </div>
  );
}

export default Four_formal_qualification;
