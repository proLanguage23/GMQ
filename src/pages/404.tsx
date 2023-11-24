import NotFound from "@/components/notFound/NotFound";
import { AppCourseBanner, DynamicHead } from "@/components/share";
import React from "react";

function NotFoundPage() {
  return (
    <>
      <DynamicHead title="404 page - GMQ Global" />
      <AppCourseBanner text={"404 page"} />
      <NotFound />
    </>
  );
}

export default NotFoundPage;
