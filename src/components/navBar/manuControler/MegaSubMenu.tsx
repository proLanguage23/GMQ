import { PageLink } from "@/components/share";
import React from "react";
import { BsDot } from "react-icons/bs";

function MegaSubMenu({ megaMenuData, allCloseCondolerHandler }: any) {
  return (
    <>
      <div
        className="w-fit min-w-full p-3 bg-[#044145] rounded shadow-md"
        onMouseOver={() => allCloseCondolerHandler({ three: true, two: false })}
        onMouseLeave={() => allCloseCondolerHandler({ one:false, three: false })}
      >
        {megaMenuData?.map((megaItem: any, key: any) => (
          <div className="flex items-center  flex-wrap" key={key}>
            <BsDot size={16} color="#fff" />
            <PageLink
              href={megaItem?.href}
              text={megaItem?.text}
              isIcon={false}
              class_name="capitalize text-white font-medium text-[16px] p-1 flex-1 my-1 hover:text-secondary"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default MegaSubMenu;
