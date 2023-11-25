import { AppSubTitle, PageLink } from "@/components/share";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsFillCaretDownFill, BsDot } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
import { motion } from "framer-motion";

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
          <motion.div
            className="my-2 border rounded-lg bg-slate-50"
            key={key}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.1 * key,
              duration: 0.5,
            }}
          >
            {/* menu + submenu  */}
            <div className="flex items-center justify-between p-2 flex-wrap">
              {item?.submenu ? (
                <AppSubTitle
                  text={item?.text}
                  class_name={`capitalize font-medium text-[18px] px-1 text-primary`}
                />
              ) : (
                <PageLink
                  href={item?.href}
                  text={item?.text}
                  isIcon={false}
                  class_name={`capitalize font-medium text-[18px] px-1 text-primary flex-1`}
                />
              )}

              {item?.submenu && (
                <div
                  className="flex-1 flex justify-end flex-wrap cursor-pointer"
                  onClick={() => SubMenuStateHandler(item?.text)}
                >
                  <BsChevronDown size={16} />
                </div>
              )}
            </div>
            {/* sub menu  */}
            {item?.submenu && submenuState === item?.text && (
              <motion.div className="md:w-[250px] min-w-full rounded p-3 bg-slate-100 border-t">
                {item?.subMenuData?.map((subItem: any, key: any) => {
                  return (
                    <motion.div
                      key={key}
                      className="flex flex-col flex-wrap justify-between bg-white rounded-xl px-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 * key,
                      }}
                    >
                      <div
                        className="flex flex-wrap justify-between items-center border-b "
                        onClick={() => MegaSubMenuStateHandler(subItem?.text)}
                      >
                        {subItem?.megaMenu ? (
                          <>
                            <div className="flex items-center flex-wrap">
                              <BsDot size={16} color="#000" />
                              <AppSubTitle
                                text={subItem?.text}
                                class_name="capitalize font-medium !text-[16px]  flex-1 hover:text-secondary"
                              />
                            </div>
                            <div className="flex-1 flex flex-wrap justify-end p-2 py-3 cursor-pointer ">
                              <BsChevronDown size={16} color="#00AAAC" />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center flex-wrap  flex-1">
                              <BsDot size={16} color="#000" />
                              <PageLink
                                href={subItem?.href}
                                text={subItem?.text}
                                isIcon={false}
                                class_name="capitalize font-medium text-[16px] p-1 flex-1 my-1 hover:text-secondary flex-1 "
                              />
                            </div>
                          </>
                        )}
                      </div>
                      {/* Mega menu  */}
                      {subItem?.megaMenu &&
                        subItem?.text === MegaSubmenuState && (
                          <div className="px-2 ">
                            <div className="w-fit min-w-full bg-white">
                              {subItem?.megaMenuData?.map(
                                (megaItem: any, key: any) => (
                                  <motion.div
                                    className="flex items-center flex-wrap"
                                    key={key}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay: 0.08 * key,
                                      duration: 0.5,
                                    }}
                                  >
                                    <AiOutlineLine size={16} color="#00AAAC" />
                                    <PageLink
                                      href={megaItem?.href}
                                      text={megaItem?.text}
                                      isIcon={false}
                                      class_name="capitalize font-medium text-[16px] p-1 flex-1 my-1 hover:text-secondary"
                                    />
                                  </motion.div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export default MobileMenuFilter;
