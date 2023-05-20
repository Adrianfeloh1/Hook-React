import { useState } from "react"

// 1.2 Definimos un valor inicial que recibo de un formulario, Sino inicia en 10

export const useCounter = (initialValue = 1) => {

  const [counter, setCounter] = useState(initialValue)

  // 1.6 se crean las funciones
  const increment = () => { 
    setCounter(counter + 1)
  } 

  const decrement = () => {
    if (counter === 0) return // si counter llega a cero entonces que finalize
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(initialValue)
  }

  return { // 1.3 devolvemos la variable como un objeto
    counter,
    increment,
    decrement,
    reset
  }


}
