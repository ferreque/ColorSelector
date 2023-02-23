import React from "react";
import { TbPalette } from "react-icons/tb";

export default function Navbar() {
  return (
    <>
      <nav className="header">
        <TbPalette className="paleta-title" /> Color palette generator
      </nav>
    </>
  );
}
