import React from "react";
import Footer from "../footer";
import Navigation from "../navigation";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      <>{children}</>
      <Footer />
    </>
  );
}
