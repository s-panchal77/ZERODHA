import React from "react";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Universe from "./Universe";

function AboutPage() {
  return (
    <>
      <Hero />
      <RightSection />
      <LeftSection />
      <Universe />
      <OpenAccount />
    </>
  );
}

export default AboutPage;
