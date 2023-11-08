import { PageLink } from "@/components/share";
import React, { useState } from "react";
import { BsFillCaretRightFill, BsDot, BsChevronDown } from "react-icons/bs";
import MegaSubMenu from "./MegaSubMenu";

function SubMenu({
  href,
  text,
  megaMenu,
  megaMenuData,
  MegaSubMenuState,
  MegaSubMenuStateHandler,
  allCloseCondolerHandler,
}: any) {
  return (
    <div className="w-full">
      <div className="relative block">
        <div
          className="flex items-center justify-between flex-wrap px-3 text-white hover:text-secondary transition-all group"
          onMouseOver={() => {
            MegaSubMenuStateHandler(text);
            allCloseCondolerHandler({ two: true });
          }}
          onBlur={() => MegaSubMenuStateHandler(text)}
          onFocus={() => MegaSubMenuStateHandler(text)}
          onMouseLeave={() =>
            allCloseCondolerHandler({ one: false, two: false, three: false })
          }
        >
          <BsDot size={16} />
          <PageLink
            href={href}
            text={text}
            isIcon={false}
            class_name={`capitalize ${
              MegaSubMenuState === text ? "text-secondary" : "text-white"
            } font-medium text-[16px] py-1 flex-1 my-1 hover:text-secondary`}
          />
          {megaMenu && (
            <div
              className={`group-hover:-rotate-90 transition-all ${
                MegaSubMenuState === text ? "-rotate-90 text-secondary" : ""
              }`}
            >
              <BsChevronDown size={16} />
            </div>
          )}
        </div>

        {/* mega menu  */}
        {MegaSubMenuState === text && megaMenu && (
          <div className="absolute top-0 left-full rounded min-w-full">
            <MegaSubMenu
              megaMenuData={megaMenuData}
              allCloseCondolerHandler={allCloseCondolerHandler}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SubMenu;
