"use client";
import Banner from "../components/Banner";
import Packagestags from "../components/Packagestags";
import FyndoSavings from "../components/FyndoSavings";
import FyndoPackages from "../components/FyndoPackages";
import FyndoSteps from "../components/FyndoSteps";
import FyndoMoreSteps from "../components/FyndoMoreSteps";
import TechStacks from "../components/TechStacks";
import FyndoDreams from "../components/FyndoDreams";
import FAQ from "../components/FAQ";
import CookieConsent from "../components/CookieConsent";
const LandingPageComponent = () => {
  return (
    
    <main className="mt-[68px]">
      <Packagestags />
      <Banner id="banner" />
      <FyndoSavings id="fyndo-saving" />
      <FyndoPackages id="estimation" idtwo="screening" />
      <FyndoSteps id="how-it-work" />
      <FyndoMoreSteps id="safeguard" />
      <TechStacks />
      <FyndoDreams id="our-story" />
      <FAQ id="faq" />
      <CookieConsent />
    </main>
  );
};

export default LandingPageComponent;
