import ScrollToTop from "react-scroll-to-top";

function AppGoToTop() {
  return (
    <ScrollToTop
      smooth
      className="!bg-bluePrimary !rounded-full !w-[50px] !h-[50px] !p-2 hover:opacity-90 flex justify-center items-center"
      color="#fff"
    />
  );
}

export default AppGoToTop;
