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
  const [SubMenuStateName, setSubMenuStateName] = useState('');

  const SubMenuStateNameHandler = (name:any) => {
    setSubMenuStateName(name)
  }

  const allCloseCondolerHandler = (data:any) => {
    setAllCloseCondoler({...allCloseCondoler, ...data})
  }

  useLayoutEffect(() => {
    setMenus(menuData);
  }, [menuData, setMenus]);

  useEffect(() => {
    const { one, two, three } = allCloseCondoler

    if(!one && !two && !three) {
      setSubMenuStateName('')
    }

  }, [allCloseCondoler])
  

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
        />
      ))}
    </div>
  );
}

export default Menu;
