import React from "react";

function Footer() {
  return (
    <footer className="layout-footer">
      <div className="layout-items-footer">
        <div className="item-footer">
          <p>© Meta 2025</p>
        </div>
        <div className="item-footer">
          <div className="layout-lista-footer">
            <div className="item-lista-footer">Politica de privacidad</div>
            <div className="item-lista-footer">Politica de cookies</div>
            <div className="item-lista-footer">Condiciones</div>
            <div className="item-lista-footer">Español </div>
          </div>
        </div>
        <div className="item-footer">
          <p className="from-footer">from</p>
          {/*Aqui va la imagen meta
           */}
          <div className="logo-footer">
            <img src="/image/iconMarcaMeta.jpg" className="anillo" />
            <div className="Meta">Meta</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
