import Image from "next/image";
import React from "react";
import { FaTimes } from 'react-icons/fa';
import MobileMenuFilter from "./MobileMenuFilter";

function MobileNavbar({ menuData, logoAsset, MobileNavbarState, setMobileNavbarState }: any) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000091] z-10">
      <div className="w-4/5 max-w-[450px] min-w-[300px] h-full bg-white p-3">
        {/* logo and close icon  */}
        <div className="flex justify-between items-center border-b pb-3 flex-wrap">
        <Image
          src={logoAsset}
          alt={"logo"}
          width={140}
          quality={100}
          priority={true}
        />
        <FaTimes size="25" color="#011F21" onClick={()=> setMobileNavbarState(!MobileNavbarState)} />
        </div>
        {/* logo and close icon end */}
        <MobileMenuFilter menuDates={menuData} />
      </div>
    </div>
  );
}

export default MobileNavbar;
