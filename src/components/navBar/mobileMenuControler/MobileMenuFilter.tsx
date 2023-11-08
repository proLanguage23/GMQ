import { PageLink } from "@/components/share";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsFillCaretDownFill, BsDot } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";

function MobileMenuFilter({ menuDates }: any) {
  const [submenuState, setSubmenuState] = useState("");
  const [MegaSubmenuState, setMegaSubmenuState] = useState("");

  const SubMenuStateHandler = (name: any) => {
    submenuState === name ? setSubmenuState(" ") : setSubmenuState(name);
    setMegaSubmenuState(" ");
  };

  const MegaSubMenuStateHandler = (name: any) => {
    MegaSubmenuState === name
      ? setMegaSubmenuState(" ")
      : setMegaSubmenuState(name);
  };

  return (
    <div className="py-3 overflow-y-auto h-[90%]">
      {menuDates?.map((item: any, key: any) => {
        return (
          <div className="my-2 border" key={key}>
            {/* menu + submenu  */}
            <div className="flex items-center justify-between bg-slate-100 rounded p-2 flex-wrap">
              <PageLink
                href={item?.href}
                text={item?.text}
                isIcon={false}
                class_name={`capitalize font-medium text-[18px] px-1 text-primary`}
              />
              {item?.submenu && (
                <div
                  className="flex-1 flex justify-end flex-wrap"
                  onClick={() => SubMenuStateHandler(item?.text)}
                >
                  <BsChevronDown size={16} />
                </div>
              )}
            </div>
            {/* sub menu  */}
            {item?.submenu && submenuState === item?.text && (
              <div className="md:w-[250px] min-w-full rounded p-3 bg-slate-100">
                {item?.subMenuData?.map((subItem: any, key: any) => {
                  return (
                    <div
                      key={key}
                      className="flex flex-col flex-wrap justify-between bg-white rounded mb-1"
                    >
                      <div className="flex flex-wrap justify-between items-center ">
                        <div className="flex items-center flex-wrap">
                          <BsDot size={16} color="#000" />
                          <PageLink
                            href={subItem?.href}
                            text={subItem?.text}
                            isIcon={false}
                            class_name={`capitalize font-medium text-[16px] p-1 my-1 hover:text-secondary`}
                          />
                        </div>
                        {subItem?.megaMenu && (
                          <div
                            className="flex-1 flex flex-wrap justify-end p-1"
                            onClick={() =>
                              MegaSubMenuStateHandler(subItem?.text)
                            }
                          >
                            <BsChevronDown size={16} color="#00AAAC" />
                          </div>
                        )}
                      </div>
                      {/* Mega menu  */}
                      {subItem?.megaMenu &&
                        subItem?.text === MegaSubmenuState && (
                          <div className="px-2 ">
                            <div className="w-fit min-w-full rounded border-t bg-white">
                              {subItem?.megaMenuData?.map(
                                (megaItem: any, key: any) => (
                                  <div className="flex items-center flex-wrap" key={key}>
                                    <AiOutlineLine size={16} color="#00AAAC" />
                                    <PageLink
                                      href={megaItem?.href}
                                      text={megaItem?.text}
                                      isIcon={false}
                                      class_name="capitalize font-medium text-[16px] p-1 flex-1 my-1 hover:text-secondary"
                                    />
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MobileMenuFilter;
