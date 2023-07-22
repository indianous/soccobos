"use-client";

import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState } from "react";
import { routes } from "../../src/constants";

type SidebarProps = {
  active: boolean;
};

export default function Sidebar({ active }: SidebarProps) {
  const [show, setShow] = useState(active);
  const closeSidebar = () => {
    console.log("Sidebar", show);
    setShow((state) => !state);
    console.log("Sidebar", show);
  };
  return (
    <div
      id="mySidenav"
      className="sidenav flex flex-col"
      style={{ right: show ? 0 : -250 }}
    >
      <button className="px-8" onClick={closeSidebar}>
        <ArrowRight size={24} />
      </button>
      <ul>
        {routes.map((route, index) => {
          return (
            <li key={index}>
              <Link className="sidenav-item" href={route.url}>
                {route.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
