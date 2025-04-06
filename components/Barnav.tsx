"use client";
import Tarjeta from "./Tarjetaa";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

const textoCartasFunciones = [
  {
    titulo: "Util",
    parrafo:
      "Con esta herramienta de conexion para todos los dias, tu familia y tus amigos sabran que estas presente",
  },
  {
    titulo: "Funciones sociales",
    parrafo:
      "Crea que una comunidad con personas con las que compartes pasiones e intereses",
  },
  {
    titulo: "Expresivo",
    parrafo:
      "Deja que tu personalidad brille y expresate mas alla de lo que permiten las palabras",
  },
];

export function Navegation() {
  const [opacity, setOpacity] = useState(0);

  const isCard = false;

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
    <>
      <nav
        className="layout-navegation"
        style={{
          borderColor: `rgba(169, 169, 169, ${opacity} ) 
`,
        }}
      >
        <div className="layout-items-nav ">
          <div className="image-messenger ">
            <Image src={"/image/R.png"} width={80} height={80} alt="message" />
          </div>
          <ul className="lista-nav">
            <li className="textNav">
              funciones<span className="triangle">▼</span>{" "}
            </li>
            <li className="textNav">Privacidad y seguridad</li>
            <li className="textNav">app para computadoras</li>
            <li className="textNav">para desarrolladores</li>
            <li className="textNav">servicio de ayuda</li>
          </ul>
          <div className="image-tresrayas">
            <Image
              src={"/image/tresrayas.png"}
              width={60}
              height={60}
              alt="message"
            />
          </div>
        </div>
      </nav>
      {isCard && (
        <div className="layout-cartas-nav">
          <div className="layout-items-cartas">
            <Tarjeta
              titulo={textoCartasFunciones[0].titulo}
              parrafo={textoCartasFunciones[0].parrafo}
            />

            <Tarjeta
              titulo={textoCartasFunciones[1].titulo}
              parrafo={textoCartasFunciones[1].parrafo}
            />
            <Tarjeta
              titulo={textoCartasFunciones[2].titulo}
              parrafo={textoCartasFunciones[2].parrafo}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Navegation;
