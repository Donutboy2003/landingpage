import { NavbarDemo } from "@/components/NavBarDemo";
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
    </Fragment>
  );
}
