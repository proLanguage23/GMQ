import React from "react";
import { useRef, useState } from "react";
import {
  ControlledMenu,
  MenuItem,
  useHover,
  useMenuState,
  Menu,
  MenuButton,
  SubMenu,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import {
  AppDescription,
  AppDescriptionWithDangerouslySetInnerHTML,
  PageLink,
} from "@/components/share";
import { useRouter } from "next/router";
import { FaChevronDown } from "react-icons/fa";

function SzhsinMenuDesktop() {
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);
  const router = useRouter();

  const pushPageHandler = (data: any) => {
    router.push(data);
  };


  return (
    <div className="md:block flex-1 px-2 hidden">
      <div className="flex justify-end items-center gap-2 w-full">
        <div className="1">
          <PageLink href="/" text="home" isIcon={false} class_name="p-2 px-4" />
        </div>
        <div className="2">
          <div ref={ref} {...anchorProps}>
            <div className="flex justify-center items-center px-4 gap-1 ">
              <AppDescriptionWithDangerouslySetInnerHTML
                text={"Education Services"}
                class_name="cursor-pointer py-4 !text-black"
              />
              <div className={`transition-all ease-in duration-300 ${menuState?.state === "open" ? "rotate-180" : "rotate-0"}`}>
                <FaChevronDown />
              </div>
            </div>
          </div>

          <ControlledMenu
            {...hoverProps}
            {...menuState}
            anchorRef={ref}
            onClose={() => toggle(false)}
            arrow={true}
          >
            <SubMenu label="Student Counselling" arrow={true} direction="bottom">
              <SubMenu label="PR Pathway Courses" arrow={true}  direction="right">
                <MenuItem className={"w-full !p-0"}>
                  <PageLink
                    text={"Nursing"}
                    href={"/popular-courses/nursing"}
                    isIcon={false}
                    class_name="w-full px-6 py-1 "
                  />
                </MenuItem>
                <MenuItem className={"w-full !p-0"}>
                  <PageLink
                    text={"Hospitality & Cookery "}
                    href={"/popular-courses/hospitality-and-cookery"}
                    isIcon={false}
                    class_name="w-full px-6 py-1 "
                  />
                </MenuItem>
                <MenuItem className={"w-full !p-0"}>
                  <PageLink
                    text={"Teaching"}
                    href={"/popular-courses/teaching"}
                    isIcon={false}
                    class_name="w-full px-6 py-1 "
                  />
                </MenuItem>
                <MenuItem className={"w-full !p-0"}>
                  <PageLink
                    text={"IT "}
                    href={"/popular-courses/information-technology"}
                    isIcon={false}
                    class_name="w-full px-6 py-1 "
                  />
                </MenuItem>
                <MenuItem className={"w-full !p-0"}>
                  <PageLink
                    text={"Trade Courses"}
                    href={"/popular-courses/trade-courses"}
                    isIcon={false}
                    class_name="w-full px-6 py-1 "
                  />
                </MenuItem>
              </SubMenu>
              <SubMenu label="Other Services" arrow={true}>
                <MenuItem className={"w-full !p-0"}>
                  <PageLink
                    text={"Professional Year"}
                    href={"/services/professional-year-program"}
                    isIcon={false}
                    class_name="w-full px-6 py-1 "
                  />
                </MenuItem>
                <MenuItem className={"w-full !p-0"}>
                  <PageLink
                    text={"PTE"}
                    href={"/services/pte"}
                    isIcon={false}
                    class_name="w-full px-6 py-1 "
                  />
                </MenuItem>
                <MenuItem className={"w-full !p-0"}>
                  <PageLink
                    text={"NAATI"}
                    href={"/services/naati"}
                    isIcon={false}
                    class_name="w-full px-6 py-1 "
                  />
                </MenuItem>
              </SubMenu>
            </SubMenu>
          </ControlledMenu>
        </div>
        <div className="3">
          <PageLink
            href="/rpl"
            text="RPL Qualification"
            isIcon={false}
            class_name="p-2 px-4"
          />
        </div>
        <div className="4">
          <PageLink
            href="/contact-us"
            text="Contact Us"
            isIcon={false}
            class_name="p-2 px-4"
          />
        </div>
      </div>
    </div>
  );
}

export default SzhsinMenuDesktop;
