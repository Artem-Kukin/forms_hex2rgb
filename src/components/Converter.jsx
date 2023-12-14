import { useState } from "react";

export default function Converter() {
  const [hex, setHex] = useState("#");
  const [rgb, setRgb] = useState("rgb(0, 0, 0)");

  function checkingValue(hex) {
    const hexRegex = /^#?([a-f\d]{3,4}|[a-f\d]{6}|[a-f\d]{8})$/;
    let hexValue = hex.target.value;
    setHex(hexValue);
    if (!hexRegex.test(hexValue) && hexValue.length >= 7) {
      setRgb("Ошибка !");
    } else if (hexRegex.test(hexValue) && hexValue[0] === "#") {
      hexToRgb(hexValue);
    }
  }

  function hexToRgb(hexValue) {
    let r = parseInt(hexValue.slice(1, 3), 16),
      g = parseInt(hexValue.slice(3, 5), 16),
      b = parseInt(hexValue.slice(5, 7), 16);

    setRgb("rgb(" + r + ", " + g + ", " + b + ")");
  }

  return (
    <section className="container" style={{ background: `${hex}` }}>
      <input
        maxLength={7}
        value={hex}
        className="container__imput-color"
        onChange={checkingValue}
      />
      <div className="container__box-color">{rgb}</div>
    </section>
  );
}
