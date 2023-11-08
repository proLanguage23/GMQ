import { NavbarDummyData } from "@/data/NavbarData";
import React, { useState } from "react";
import { Container } from "../share";
import Image from "next/image";
import Menu from "./manuControler/Menu";
import { FiMenu } from "react-icons/fi";
import MobileNavbar from "./mobileMenuControler/MobileNavbar";

function NavBar() {
  const [MobileNavbarState, setMobileNavbarState] = useState(false);
  const { Logo, Menus } = NavbarDummyData;

  return (
    <div className="">
      <Container fullWidth isContainer={false}>
        <div className="flex justify-between items-center gap-2 py-1 flex-wrap">
          {/* logo  */}
          <div className="flex-wrap">
            <Image
              src={Logo}
              alt={"logo"}
              width={160}
              quality={100}
              priority={true}
            />
          </div>

          {/* menu  */}
          <div className="flex justify-center items-center flex-wrap">
            {/* menu-berar-icon  */}
            <div className="menu-berar-icon md:pr-4 pr-2">
              <FiMenu size={28} color="#011F21" className="cursor-pointer" onClick={()=> setMobileNavbarState(!MobileNavbarState)} />
              {/* mobile bar  */}
              {MobileNavbarState && <MobileNavbar menuData={Menus} logoAsset={Logo} MobileNavbarState={MobileNavbarState} setMobileNavbarState={setMobileNavbarState} />}
            </div>
            {/* NAVBAR  */}
            <div className="NAVBAR">
              <Menu menuData={Menus} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
