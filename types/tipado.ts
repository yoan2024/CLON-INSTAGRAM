interface CardsTextFuntion {
  titulo: string;
  parrafo: string;
}

interface personasFakeProms {
  id: string;
  name: string;
  image: string;
  mensajes: message[];
  ultimavez: string;
  isconect: boolean;
}

interface message {
  nuevo: boolean;
  content: string;
}
