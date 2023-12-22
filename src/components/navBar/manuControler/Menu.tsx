import { PageLink } from "@/components/share";
import React, { useEffect, useLayoutEffect, useState } from "react";
import FilterMenu from "./FilterMenu";

function Menu({ menuData }: any) {
  const [allCloseCondoler, setAllCloseCondoler] = useState({
    one: false,
    two: false,
    three: false,
  });
  const [menus, setMenus] = useState([]);
  const [SubMenuStateName, setSubMenuStateName] = useState("");

  // const [IsMenuHoverOut, setIsMenuHoverOut] = useState(false);
  // const [IsMenuSubHoverOut, setIsMenuSubHoverOut] = useState(false);

  const SubMenuStateNameHandler = (name: any) => {
    setSubMenuStateName(name);
  };

  const allCloseCondolerHandler = (data: any) => {
    setAllCloseCondoler({ ...allCloseCondoler, ...data });
  };

  useLayoutEffect(() => {
    setMenus(menuData);
  }, [menuData, setMenus]);

  useEffect(() => {
    const { one, two, three } = allCloseCondoler;

    if (!one && !two && !three) {
      setSubMenuStateName("");
    }
  }, [allCloseCondoler]);

  // useEffect(() => {
  //   if (IsMenuHoverOut && IsMenuSubHoverOut) {
  //     if(allCloseCondoler?.two && !allCloseCondoler?.one && !allCloseCondoler?.three){
  //       setAllCloseCondoler({
  //         one: false,
  //         two: false,
  //         three: false,
  //       });
  //       return
  //     }
  //     if(!allCloseCondoler?.two && allCloseCondoler?.one && !allCloseCondoler?.three){
  //       setAllCloseCondoler({
  //         one: false,
  //         two: false,
  //         three: false,
  //       });
  //       return
  //     }
  //     if(allCloseCondoler?.two && allCloseCondoler?.one && !allCloseCondoler?.three){
  //       // setAllCloseCondoler({
  //       //   one: false,
  //       //   two: false,
  //       //   three: false,
  //       // });
  //       return
  //     }
  //     return;
  //   } else if (IsMenuHoverOut && !IsMenuSubHoverOut) {
  //     setAllCloseCondoler({
  //       one: false,
  //       two: false,
  //       three: false,
  //     });
  //     setIsMenuHoverOut(false);
  //     setIsMenuSubHoverOut(false);
  //   } else {
  //   }
  // }, [IsMenuHoverOut, IsMenuSubHoverOut]);

  // console.log("=====IsMenuHoverOut===============================");
  // console.log(IsMenuSubHoverOut, IsMenuHoverOut);
  // console.log("=========allCloseCondoler===========================");
  // console.log(allCloseCondoler);

  return (
    <div className="flex items-center justify-end gap-3 flex-wrap">
      {menus?.map((item, key) => (
        <FilterMenu
          data={item}
          key={key}
          SubMenuStateName={SubMenuStateName}
          SubMenuStateNameHandler={SubMenuStateNameHandler}
          allCloseCondoler={allCloseCondoler}
          allCloseCondolerHandler={allCloseCondolerHandler}
          initial={{ opacity: 0, x: -20, scale: 1.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: 0.05 * key,
          }}
          
        />
      ))}
    </div>
  );
}

export default Menu;
