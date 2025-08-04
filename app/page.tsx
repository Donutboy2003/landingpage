import FeatureSectionSimple from "@/components/featuresection";
import FooterSimple from "@/components/simple";
import HeroSectionSimpleCentred from "@/components/simple-centred";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <HeroSectionSimpleCentred/>
  <FeatureSectionSimple/>
  <FooterSimple/>
  </>
  );
}
