import FeatureSectionSimple from "@/components/featuresection";
import FooterSimple from "@/components/simple";
import HeroSectionSimpleCentred from "@/components/simple-centred";
import Image from "next/image";
import { NavigationBar } from "@/components/NavigationBar";
import { NavbarDemo } from "@/components/NavBarDemo";
import ForDriver from "@/components/ForDriver";

export default function Home() {
  return (
  <>
  {/* <RideShareNavbar/> */}
  <NavbarDemo/>
  <HeroSectionSimpleCentred/>
  <FeatureSectionSimple/>
  <ForDriver/>
  <FooterSimple/>
  </>
  );
}
