import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

// 1. para que la función no se vuelva a procesar, se hace fuera del componente
const heavyStuff = (iterationNumber = 100) => {
     for (let i = 0; i < iterationNumber; i++) {
          console.log("ahí vamos")          
     }
     return `${ iterationNumber } iteraciones realizadas`
}

export const MemoHook = () => {

   const { counter, increment } = useCounter (4000);
   const [ show, setShow ] = useState(true); 

//2. no tiene sentido que vuelva a renderizar al usar el show/hide
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]) // esto memoriza un valor

  return (
    <>
       <h1>Counter: <small>{ counter }</small> </h1> 
       <hr />

       {/* <h4>{heavyStuff (counter)}</h4> */} {/*1. llamamos la función pesada */}
       <h4>{memorizedValue}</h4> {/* Así no renderiza el show/hide */}

       <button
            className="btn btn-primary"
            onClick={ () => increment ()}
        >
            +1
       </button>

       <button 
            className="btn btn-outline-primary"
            onClick={() => setShow(!show)}
       >
            Show/Hide {JSON.stringify(show)}
       </button>
    </>
  )
}
