import React, { useLayoutEffect, useState } from "react";
import AppAccordionItem from "./AppAccordionItem";

function AppAccordion({ data }: any) {
    const [app_accordion, setApp_accordion] = useState('')

    const app_accordionHandler = (data:any) => {
        setApp_accordion(data)
    }

    useLayoutEffect(() => {
        let obj = data[0]
        setApp_accordion(obj[Object.keys(obj)[0]])
    }, [data])

  return (
    <>
      {data?.map((item: any, key: any) => (
        <AppAccordionItem key={key} obj={item} app_accordionHandler={app_accordionHandler} value={app_accordion} />
      ))}
    </>
  );
}

export default AppAccordion;