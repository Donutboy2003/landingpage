import { NavbarDemo } from "@/components/NavBarDemo";
import FooterSimple from "@/components/simple";
import { Metadata } from "next";
import { Fragment } from "react";
import PrivacyPolicyComponent from "./PrivacyPolicyComponent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: true },
};

export default async function Page() {
  return (
    <Fragment>
      <NavbarDemo />
      <PrivacyPolicyComponent />
      <FooterSimple />
    </Fragment>
  );
}
