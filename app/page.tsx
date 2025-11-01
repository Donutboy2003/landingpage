import HeroBenefits from "@/components/HeroBenefits";
import { NavbarDemo } from "@/components/NavBarDemo";
import HeroSectionSimpleCentred from "@/components/simple-centred";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      {/* <RideShareNavbar/> */}
      <NavbarDemo />
      <HeroSectionSimpleCentred />
      {/* <FeatureSectionSimple/> */}
      {/* <ForDriver/> */}
      <HeroBenefits />
    </Fragment>
  );
}
