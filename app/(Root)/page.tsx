import Formulario from "@/components/auth/Formulario";
import React from "react";
import Image from "next/image";
import { object } from "zod";

function page() {
  return (
    <>
      <main className="layout-main">
        <div className="layout-items-main">
          <section className="sectionMain section-left">
            {" "}
            <h1 className="tituloMain">
              <span>Un lugar para las</span> <span>conversaciones</span>{" "}
              <span>significativas</span>
            </h1>{" "}
            <p className="parrafoMain">
              Messenger te ayuda a conectar con tus amigos y familiares en
              Facebook, consolidar tu comunidad y profundizar en tus intereses.
            </p>
            <Formulario />
            <div className="img-app-store">
              <img
                src="/image/app-store.svg"
                alt="icon app store"
                className="h-12"
              />
              <img />
            </div>
          </section>

          {/*aqui va la section dela derecha*/}

          <section className="sectionMain section-right">
            <div className="imagenSectionHome">
              <img src="/image/imagenSectionHome.png" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default page;
