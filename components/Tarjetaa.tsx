import React from "react";
import Image from "next/image";

const Tarjeta = ({ titulo, parrafo }: CardsTextFuntion) => {
  return (
    <div className="cartaFuncion">
      <h1 className="tituloCarta">{titulo}</h1>
      <p className="parrafoCarta">{parrafo}</p>
      <div>
        <Image
          src="/image/flecha.png"
          alt="flecha icon"
          width={32}
          height={40}
        />
      </div>
    </div>
  );
};

export default Tarjeta;
