import PermanentResidencyPathwaysInAustraliaBody from "@/components/migration-services/permanent-residency-pathways-in-australia/PermanentResidencyPathwaysInAustraliaBody";
import { DynamicHead } from "@/components/share";
import AppBannerImg from "@/components/share/AppBannerImg";
import { PermanentResidencyPathwaysInAustraliaDummyData } from "@/data/ServiceMigrationServicesData";
import React from "react";

function PermanentResidencyPathwaysInAustraliaPage() {
  const { banner } = PermanentResidencyPathwaysInAustraliaDummyData;
  return (
    <>
      <DynamicHead title="Australia Permanent residency pathways - GMQ Global" />
      <AppBannerImg
        img={banner}
        text="Australia Permanent residency pathways -GMQ Global"
      />
      <PermanentResidencyPathwaysInAustraliaBody />
    </>
  );
}

export default PermanentResidencyPathwaysInAustraliaPage;
