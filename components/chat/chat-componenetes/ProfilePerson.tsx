import React from "react";
import { personasFake } from "@/types";

{
  /*
  
lista de lo que necesito


1: necesito el id de la persona
2: nesecito el nombre de esa persona
3: necesito la imagen dela persona
4: nesesito el ultimo mensaje dela persona
5: nesesito la ultima ves conectado dela persona
  
  
  
  */
}

function ProfilePerson({
  id,
  name,
  image,
  mensajes,
  isconect,
  ultimavez,
}: personasFakeProms) {
  return (
    <div className="hover:bg-gray-100">
      <div className="flex flex-row gap-2 ">
        <div className="rounded-full w-14 h-14 relative flex-shrink-0">
          <img
            src={image}
            alt="ferxxo"
            className="object-cover w-full h-full rounded-full"
          />
          <div
            className={
              isconect
                ? "w-3 h-3  rounded-full bg-green-600  bottom-0 border-solid border-white border-[1.5px] right-1 absolute "
                : ""
            }
          />
        </div>

        <div className="min-w-0">
          <div className="font-sans font-medium">
            {/*nombre dela persona*/}
            {name}{" "}
          </div>
          <div className="text-facebookGray experimental">
            {/*ultimo mensaje o por default un mensaje*/}{" "}
            {/*ultima ves conectado*/} {mensajes[0].content} {ultimavez}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePerson;
