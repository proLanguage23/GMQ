
function AppBtn({ handleClick, text, class_name, disable = false }: any) {
  return (
    <>
      <button
        disabled={disable}
        className={`block w-fit rounded ${class_name} appBtn`}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
}

export default AppBtn;