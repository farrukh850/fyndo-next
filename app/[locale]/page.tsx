"use client";
import {Link} from '@/i18n/navigation';
import { useRef, useState, useEffect } from "react";
import Banner from "../components/Banner";
import Packagestags from '../components/Packagestags';
import FyndoSavings from "../components/FyndoSavings";
import FyndoPackages from "../components/FyndoPackages";
import FyndoSteps from "../components/FyndoSteps";
import FyndoMoreSteps from "../components/FyndoMoreSteps";
import TechStacks from "../components/TechStacks";
import FyndoDreams from "../components/FyndoDreams";
import FAQ from "../components/FAQ";
const LandingPageComponent = () => {
  return (
    
    <main className="mt-[68px]">
      {/* Packages heading */}
      <Packagestags />
      {/* Banner */}
      <Banner />
      {/* Lower Costs, and Better Decisions—Fyndo Saves You Up to 74%. */}
      <FyndoSavings />
      <FyndoPackages />
      <FyndoSteps />
      <FyndoMoreSteps />
      <TechStacks />
      <FyndoDreams />
      <FAQ />
    </main>
  );
};

export default LandingPageComponent;
