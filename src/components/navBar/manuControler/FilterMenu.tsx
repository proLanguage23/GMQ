import { PageLink } from "@/components/share";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import SubMenu from "./SubMenu";

function FilterMenu({
  data,
  SubMenuStateName,
  SubMenuStateNameHandler,
  allCloseCondoler,
  allCloseCondolerHandler,
}: any) {
  const [MegaSubMenuState, setMegaSubMenuState] = useState("");

  const { id, text, href, submenu, subMenuData } = data;

  const subMenuHandler = (name: any) => {
    SubMenuStateNameHandler(name);
    setMegaSubMenuState("");
  };

  const MegaSubMenuStateHandler = (name: any) => {
    setMegaSubMenuState(name);
  };

  if (!submenu) {
    return (
      // menu without submenu
      <div
        className="menu"
        onMouseOver={() => subMenuHandler(text)}
        onBlur={() => subMenuHandler(text)}
        onFocus={() => subMenuHandler(text)}
      >
        <PageLink
          href={href}
          text={text}
          isIcon={false}
          class_name="capitalize text-primary font-medium text-[18px] px-3 hover:text-secondary "
        />
      </div>
    );
  } else {
    return (
      <div className="relative menu">
        {/* menu with submenu  */}
        <div
          className="flex items-center flex-wrap group hover:text-secondary"
          onMouseOver={() => {
            subMenuHandler(text);
            allCloseCondolerHandler({ one: true });
          }}
          onBlur={() => subMenuHandler(text)}
        >
          <PageLink
            href={href}
            text={text}
            isIcon={false}
            class_name={`capitalize font-medium text-[18px] flex-1 py-6 px-1 ${
              SubMenuStateName === text ? "text-secondary" : "text-primary"
            }`}
          />
          <div className={`group-hover:rotate-180 transition-all ${
              SubMenuStateName === text ? "rotate-180 text-secondary" : ""
            }`}>
            <BsChevronDown size={16} />
          </div>
        </div>
        {/* sub menu  */}
        {SubMenuStateName === text && (
          <div className="subMenu absolute top-[95%] -right-5 md:w-[250px] min-w-full bg-primary rounded border shadow-md">
            {subMenuData?.map((subItem: any, key: any) => (
              <SubMenu
                key={key}
                {...subItem}
                MegaSubMenuState={MegaSubMenuState}
                MegaSubMenuStateHandler={MegaSubMenuStateHandler}
                allCloseCondolerHandler={allCloseCondolerHandler}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default FilterMenu;
