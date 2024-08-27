import { Button } from "@/components/ui/button";
import Image from "next/image";
import LandingHero from "./LandingPageAsset/LandingHero";
import LandingFeature from "./LandingPageAsset/LandingFeature";


export default function Home() {
  return (
   <div className="landingGradient">
    <LandingHero/>
    <LandingFeature/>
   </div>
  );
}
