"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";

export function Navegation() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = window.scrollY;
      let opacity = Math.min(scroll / 200, 1);
      setOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navegation ">
      <div
        className="layout-navegation"
        style={{
          borderBottom: `2px solid rgba(127, 140, 141, ${opacity})`,
          backgroundColor: "white",
        }}
      >
        <div className="layout-icon-message">
          <a href="https://www.messenger.com/">
            <span>
              <Image
                src="/image/R.png"
                width={100}
                height={100}
                alt="icon"
                className="icon-message"
              />
            </span>
          </a>
        </div>
        <ol className="lista-nav">
          <li className="items-nav  flex flex-row items-center gap-2">
            Funciones <span className="flecha">▼</span>
          </li>
          <li className="items-nav">Privacidad y seguridad</li>
          <li className="items-nav">App para computadoras</li>
          <li className="items-nav ">Para desarrolladores</li>
          <li className="items-nav">Servicio de ayuda</li>
        </ol>
        <div className="layout-icon-tresrayas">
          <a href="https://www.messenger.com/">
            <span className="icon-tresrayas">
              <Image
                src="/image/tresrayas.png"
                width={60}
                height={40}
                alt="icon"
                className="icon-tresrayas"
              />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navegation;
