import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ data }) => {
  const pRef = useRef();

  const [boxSize, setbBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    
    const {width, height } = pRef.current.getBoundingClientRect()
    setbBoxSize({width, height})
  }, [data.quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-3">
          {" "}
          {data[0].quote}{" "}
        </p>
        <footer className="blockquote-footer">{data[0].author} </footer>
      </blockquote>

      <code>{ JSON.stringify(boxSize) }</code>
    </>
  );
};
