import { House, Laptop, Storefront } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

export default function Navigation() {
  const iconSize = 24
  return (
    <nav className="flex justify-center">
    <Link href={"/"}>
      <div className="px-4 py-2">
        <House size={iconSize} />
      </div>
    </Link>
      <Link href={"/store"}>
        <div className="px-4 py-2">
        <Storefront size={iconSize} />
        </div>
      </Link>
      <Link href={"/blog"}>
        <div className="px-4 py-2">
        <Laptop size={iconSize} />
        </div>
      </Link>
    </nav>
  );
}
