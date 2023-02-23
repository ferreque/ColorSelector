import React, { useEffect, useState } from "react";
import MyColorPicker from "./CompPropio";
import { CompactPicker } from "react-color";

export default function Circles() {
  const [paletteColor, setPaletteColor] = useState("second");
  //guardo el id en un estado, y despues lo uso para modificar el color con otro estado

  return (
    <>
      <MyColorPicker />

      <CompactPicker
        className="pallete-picker"
        onChange={(e) => console.log([e.hex])}
      />
    </>
  );
}
