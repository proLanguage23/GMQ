
import Image from "next/image";

function AppBgImg({ BgImg, class_name, ...rest }: any) {
  return (
    <Image
      quality={100}
      placeholder="blur"
      src={BgImg}
      alt="banner img"
      className={`absolute top-0 left-0 w-[100%] h-[100%] -z-10 object-cover ${class_name}`}
      {...rest}
    />
  );
}

export default AppBgImg;