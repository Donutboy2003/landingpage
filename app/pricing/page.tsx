import { NavbarDemo } from "@/components/NavBarDemo";
import FooterSimple from "@/components/simple";
import { Metadata } from "next";
import { Fragment } from "react";
import PricingComponent from "./PricingComponent";

export const metadata: Metadata = {
  title: "Pricing",
  robots: { index: true },
};

export default async function Page() {
  return (
    <Fragment>
      <NavbarDemo />
      <PricingComponent />
      <FooterSimple />
    </Fragment>
  );
}
