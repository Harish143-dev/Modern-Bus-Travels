import StickCards from "@/components/StickyCards/StickCards";
import React from "react";

const page = () => {
  return (
    <>
      <section className="Intro">
        <h1>Start</h1>
      </section>
      <StickCards />
      <section className="outro">
        <h1>END</h1>
      </section>
    </>
  );
};

export default page;
