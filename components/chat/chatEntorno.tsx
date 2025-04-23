"use client";

import React from "react";
import { useState } from "react";

function ChatEntorno() {
  const [se, set] = useState(false);
  const [texto, setTexto] = useState("");

  return (
    <div className={`chat-entorno-item`}>
      <div className="chat-entorno-layout-navegation">
        {/*------------*/}
        <div className="chat-entorno-items-nav-image-texto">
          <div className="chat-entorno-item-nav-image">
            <img
              src="/image/ICP/valentina.png"
              alt="valentina"
              className="chat-entorno-imagen-nav"
            />
          </div>
          <div className="chat-entorno-item-nav-texto">
            <span>Valentina</span>
          </div>
        </div>
        {/*------------*/}
        <div className="chat-entorno-items-nav-icons">
          <div className="chat-entorno-item-nav-icon">
            <img
              src="/image/icons-entorno-nav/icons8-llamada-48.png"
              alt="icon-llamada"
              className="chat-icon-nav"
            />{" "}
          </div>
          <div className="chat-entorno-item-nav-icon">
            <img
              src="/image/icons-entorno-nav/icons8-videollamada-50.png"
              alt="icon-llamada"
              className="chat-icon-nav"
            />
          </div>
          <div className="chat-entorno-item-nav-icon">
            <img
              src="/image/icons-entorno-nav/icons8-tres-puntos-48.png"
              alt="icon-tres-puntos"
              className="chat-icon-nav"
            />
          </div>
        </div>
      </div>
      <div className="chat-entorno-layout-conversacion">
        <p>{texto} </p>
      </div>

      {/*---------------------*/}
      <div className="chat-entorno-layout-tools">
        <div className="chat-entorno-icons-tools">
          {" "}
          <img
            src="/image/icons-entorno-tools/add.png"
            alt="icon-agregar"
            className="icon-tool"
          />
        </div>
        {/*aquiva el div de en medio*/}

        <div className="chat-entorno-tools-medio">
          <div className="chat-entorno-icons-tools">
            {" "}
            <img
              src="/image/icons-entorno-tools/imagen.png"
              alt="icon imagen"
              className="icon-tool"
            />{" "}
          </div>
          <div className="chat-entorno-icons-tools">
            {" "}
            <img
              src="/image/icons-entorno-tools/papel.png"
              alt="icon papel"
              className="icon-tool"
            />{" "}
          </div>
          <div className="chat-entorno-icons-tools">
            {" "}
            <img
              src="/image/icons-entorno-tools/gif.png"
              alt="icon gif"
              className="icon-tool"
            />{" "}
          </div>
          <div className="chat-entorno-tools-input">
            <input
              type="text"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              className="chat-entorno-tool-input"
            />
          </div>
        </div>

        <div className="chat-entorno-icons-tools">
          {" "}
          <img
            src="/image/icons-entorno-tools/megusta.png"
            alt="icon-megusta"
            className="icon-tool"
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default ChatEntorno;
