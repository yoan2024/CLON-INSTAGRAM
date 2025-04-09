function Asidebar() {
  return (
    <>
      <div className="chat-asidebar-item">
        <div className="chat-asidebar-layout-primeros">
          <div className="chat-asidebar-item-icon">
            <img
              src="./image/icons-chat/conversation.png"
              className="chat-asidebar-imagen-icon"
            />
            {/*<div>Chats</div>*/}
          </div>

          {/**/}

          <div className="chat-asidebar-item-icon">
            <img
              src="./image/icons-chat/markeplace.png"
              className="chat-asidebar-imagen-icon"
            />
            {/*<div>Marketplace</div>*/}
          </div>

          <div className="chat-asidebar-item-icon">
            <img
              src="./image/icons-chat/solicitudes.png"
              className="chat-asidebar-imagen-icon"
            />
            {/*<div>Solicitudes</div>*/}
          </div>

          <div className="chat-asidebar-item-icon">
            <img
              src="./image/icons-chat/delete.png"
              className="chat-asidebar-imagen-icon"
            />
            {/*<div>Archivar</div>*/}
          </div>
        </div>

        <div
          className="chat-asidebar-layout-segundos"
          style={{ width: "50px" }}
        >
          <div className="chat-asidebar-imagen-icon-perfil">
            <div className="chat-asidebar-rounde-image">
              <img
                src="/image/ICP/valentina.png"
                alt="img"
                className="chat-asidebar-imagen-perfil"
              />
            </div>
            {/*<div className="text-center">Valentina</div>*/}
          </div>

          <div className="chat-asidebar-imagen-icon-desplasar">
            <img
              src="/image/icons-chat/desplasar.png"
              className="chat-asidebar-imagen-desplasar"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Asidebar;
