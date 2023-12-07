
function AppBtn({ handleClick, text, class_name, disable = false }: any) {
  return (
    <>
      <button
        disabled={disable}
        className={`button block w-fit rounded appBtn ${class_name}`}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
}

export default AppBtn;