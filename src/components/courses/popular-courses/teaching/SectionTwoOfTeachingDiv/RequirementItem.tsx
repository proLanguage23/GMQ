import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
} from "@/components/share";
import React from "react";

function RequirementItem({ title, requirementData }: any) {
  return (
    <div className="shadow p-5 rounded border bg-white">
      <AppSubTitle text={title} class_name="border-b p-2 text-[22px] text-secondary" />
      <div className="mt-3 md:p-5">
        {requirementData?.map((item: any, key: any) => (
          <AppDescriptionWithDangerouslySetInnerHTML
            key={key}
            text={key + 1 + ". " + item}
            class_name="mb-3 p-1"
          />
        ))}
      </div>
    </div>
  );
}

export default RequirementItem;
