import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // Función que sirve para memorizar las funciones que solo se vuelve a procesar cuando algo cambie

  const increment = useCallback((value) => {
    setCounter((count) => count + value); // para incrementar de 5 en 5
  }, []);

  useEffect(() => {
    // increment();
  }, [increment]);

  // const increment = () => {
  //     setCounter (counter + 1)
  // }

  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
