import { NavbarDemo } from "@/components/NavBarDemo";
import FooterSimple from "@/components/simple";
import { Metadata } from "next";
import { Fragment } from "react";
import TermsOfServiceComponent from "./TermsOfServiceComponent";

export const metadata: Metadata = {
  title: "Terms Of Service",
  robots: { index: true },
};

export default async function Page() {
  return (
    <Fragment>
      <NavbarDemo />
      <TermsOfServiceComponent />
      <FooterSimple />
    </Fragment>
  );
}
