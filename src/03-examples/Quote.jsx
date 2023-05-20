export const Quote = ({ data }) => {
    
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-3"> {data[0].quote} </p>
      <footer className="blockquote-footer">{data[0].author} </footer>
    </blockquote>
  );
};
