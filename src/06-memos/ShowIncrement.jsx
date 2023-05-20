import { memo } from "react";

//Debo llamar la función memo para memorizar esta parte de la función
export const ShowIncrement = memo ( ({ increment }) => {

    console.log('Me volví a generar :(')

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);//este es el value para incrementar de 5 en 5
      }}
    >
      Incrementar
    </button>
  );
})
