import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function PageLink({
  href,
  text,
  class_name = " ",
  isIcon = true,
  ...rest
}: any) {
  return (
    <>
      <Link
        rel="canonical"
        href={href || ""}
        {...rest}
        className={`${
          isIcon ? "flex justify-center items-center gap-3 flex-wrap" : " "
        }  group ${class_name}`}
      >
        {text}
        {isIcon && (
          <FaArrowRight className="group-hover:translate-x-2 transition-all" />
        )}
      </Link>
    </>
  );
}

export default PageLink;
