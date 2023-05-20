import { useCounter } from "../hooks/useCounter";

export const CounterCustomHook = () => {
  // 1.1 creación de custom hook para un contador de carrito de compras

  const {counter, increment, decrement, reset} = useCounter(); // 1.4 

  return (
    <>
      <h1 className="text-center">Counter Hook: {counter}</h1> {/* 1.5 */}
      <hr />
      <div className="text-center">
        <button onClick={decrement} className="btn btn-primary">-1</button>
        <button onClick={reset} className="btn btn-primary" >Reset</button>
        <button onClick={increment} className="btn btn-primary">+1</button>
      </div>
    </>
  );
};
