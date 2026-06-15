import React from "react";
import FeatureSection from "../components/Home/Feature/FeatureSection";
import RutasFrecuentesSection from "../components/Home/RutasFrecuentesSection";
import Hero from "../components/Home/Hero";
const Home = () => {
  return (
    <>
      <Hero></Hero>
      <FeatureSection></FeatureSection>
      <RutasFrecuentesSection></RutasFrecuentesSection>
    </>
  );
};

export default Home;
