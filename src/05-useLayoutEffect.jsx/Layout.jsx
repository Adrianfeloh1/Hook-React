import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/ ${counter}`
  );

  return (
    <>
      <h1 className="text-center">Breaking Bad Quotes</h1>
      <hr />

      {
        isLoading
          ? <LoadingQuote />
          : <Quote data = { data } />}

      <button
        onClick={increment}
        className="btn btn-outline-primary"
        disabled={isLoading}
      >
        Next Quote
      </button>
    </>
  );
};
