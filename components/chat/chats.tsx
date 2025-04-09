"use client";

import React from "react";
import { useState } from "react";
import ProfilePerson from "./chat-componenetes/ProfilePerson";
import { personasFake } from "@/types";

const Chats = () => {
  const [busqueda, setbusqueda] = useState();

  const handleBusqueda = (velue: any) => {
    setbusqueda(velue);
  };

  return (
    <div className="chat-chat-item">
      <div className="chat-chat-primer-papa">
        <div className="chat-chat-titulo">
          <span>Chats</span>{" "}
        </div>
        <div className="chat-chat-item-icon-editar">
          <img
            src="/image/icons-chat/editar.png"
            alt=""
            className="chat-chat-imagen-editar"
          />
        </div>
      </div>
      {/*------*/}
      <div className="chat-chat-segundo-papa">
        <div className="chat-chat-item-icon-flecha">
          <img
            src="/image/icons-chat/flecha.png"
            alt=""
            className="chat-chat-imagen-flecha"
          />
        </div>

        {/*rounde alos lados flex estar*/}
        <div className="chat-chat-layout-lupaYtexto">
          <div className="chat-chat-item-icon-lupa">
            <img
              src="/image/icons-chat/busqueda-de-lupa.png"
              alt=""
              className="chat-chat-imagen-lupa"
            />
          </div>
          <input
            placeholder="Buscar en Rameet"
            type="text"
            value={busqueda}
            onChange={(e) => handleBusqueda(e.target.value)}
            className="chat-chat-input"
          />
        </div>
      </div>
      {personasFake.map((p) => (
        <ProfilePerson
          key={p.id}
          id={p.id}
          name={p.name}
          image={p.image}
          mensajes={p.mensajes}
          ultimavez={p.ultimavez}
          isconect={p.isconect}
        />
      ))}
    </div>
  );
};

export default Chats;
