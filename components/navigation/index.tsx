import { House } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav className="bg-pink-900 text-slate-100 flex justify-center">
      <Link href={"/"}>
        <div className="flex gap-x-2 px-4 py-2">
          <House size={24} />
          <span>Home</span>
        </div>
      </Link>
    </nav>
  );
}
