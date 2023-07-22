"use-client";

import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState } from "react";

type SidebarProps = {
  active: boolean;
};

export default function Sidebar({ active }: SidebarProps) {
  const [show, setShow] = useState(active);
  //   active = false;
  //   const closeSidebar = () => (active = false);
  return (
    <div
      id="mySidenav"
      className="sidenav flex flex-col"
      style={{ right: show ? 0 : -250 }}
    >
      <button
        className="px-8"
        onClick={() => {
          console.log({ show });
          setShow((state) => !state);
        }}
      >
        <ArrowRight size={24} />
      </button>
      <Link className="sidenav-item" href="#">
        About
      </Link>
      <Link className="sidenav-item" href="#">
        Services
      </Link>
      <Link className="sidenav-item" href="#">
        Clients
      </Link>
      <Link className="sidenav-item" href="#">
        Contact
      </Link>
    </div>
  );
}
