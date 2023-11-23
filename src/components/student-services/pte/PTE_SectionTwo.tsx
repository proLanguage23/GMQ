import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { PTE_Dummy_data } from "@/data/services/PTE_Data";
import React from "react";

function PTE_SectionTwo() {
  const { PTE_SectionTwo } = PTE_Dummy_data;
  const { title, right, left } = PTE_SectionTwo;
  return (
    <div className="py-9 bg-grayCustom">
      <Container>
        <LeftToRight
          title={title}
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
          leftImageToRight
          heading
          alt={title}
        />
      </Container>
    </div>
  );
}

export default PTE_SectionTwo;
