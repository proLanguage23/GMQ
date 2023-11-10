import { DynamicHead } from "@/components/share";
import AppBannerImg from "@/components/share/AppBannerImg";
import { PTE_DummyData } from "@/data/PteData";
import React from "react";

function PTE() {
  const { banner } = PTE_DummyData;
  return (
    <>
      <DynamicHead title="PTE - GMQ Global" />
      <AppBannerImg img={banner} text="PTE - GMQ" />
    </>
  );
}

export default PTE;
