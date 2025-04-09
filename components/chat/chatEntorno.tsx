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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nam
        dolores, veniam nisi officia optio sit, aliquid consectetur, nemo porro
        mollitia quasi! Repudiandae cupiditate corporis incidunt molestiae
        eligendi, reiciendis nulla! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptates aliquam nihil voluptatibus quo. Odit,
        soluta temporibus id aperiam quisquam voluptatibus modi iusto porro quam
        dolores placeat necessitatibus, suscipit laborum odio! Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Sunt nihil tempore hic fugiat
        nemo, eveniet odit consectetur. Totam ex placeat saepe est nam. Nulla
        commodi, magni minima tenetur accusamus impedit! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Nihil quae beatae eligendi impedit
        quia officia illum ducimus vero eius. Do praesentium dicta corporis
        iste. Temporibus repudiandae vitae excepturi ipsum minima quas eum quis
        hic itaque eaque nihil, beatae deleniti dolorem aut iure maiores totam
        illo dignissimos. Voluptate! In eligendi officia, placeat exercitationem
        numquam animi quos adipisci ipsam dolor minima labore velit earum beatae
        ducimus magni veritatis? Odit nemo numquam voluptatum natus eos
        aspernatur cupiditate autem commodi non.<p>{texto} </p>
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
