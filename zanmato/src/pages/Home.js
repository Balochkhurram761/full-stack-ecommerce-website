import React from "react";
import HeroSupplier from "../sections/heroSupplier/HeroSupplier";
import HeroServices from "../sections/extraServices/HeroServices";
import HeroRecoomended from "../sections/heroRecommended/HeroRecoomended";
import HeroSection1 from "../sections/heroSection1/HeroSection1";
import HeroSection2 from "../sections/heroSection2/HeroSection2";
import HeroSection3 from "../sections/heroSection3/HeroSection3";
import MobielSlider from "../sections/heroSection2/MobielSlider";
import RecommendedSlider from "../sections/heroRecommended/SliderRecommended";
import HeroSection4 from "../components/heroSection4/HeroSection4";
import SliderSection4 from "../components/heroSection4/SliderSection4";
import HeroSection5 from "../sections/heroSection5/HeroSection5";
import HeroSection from "../sections/heroNewletter/HeroSection";
const Home = () => {
  return (
    <>
      <HeroSection3 />
      <HeroSection5 />
      <HeroSection4 />
      <SliderSection4 />
      <HeroSection2 />
      <MobielSlider />
      <HeroSection1 />
      <HeroRecoomended />
      <RecommendedSlider />
      <HeroServices />
      <HeroSupplier />
      <HeroSection />
    </>
  );
};

export default Home;
