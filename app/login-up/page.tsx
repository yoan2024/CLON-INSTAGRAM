import Formulario from "@/components/login-up/Formulario";
import "./login-up.css";
import ParticlesBg from "@/components/Particlesbg";

function page() {
  return (
    <div className="login-up-layout-principal">
      <ParticlesBg />
      <div className="login-up-container">
        <div className="login-up-marca">
          <span className="login-up-meeqo">LOGIN-UP</span>{" "}
        </div>
        <div className="login-up-formulario">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl font-bold mb-2">Hoy es el futuro</h1>
            <p className="text-lg opacity-80">Unete a nosotros</p>
          </div>
          <div className="item-login-up">
            <div>
              <Formulario />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
