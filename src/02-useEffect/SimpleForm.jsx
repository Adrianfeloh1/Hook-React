import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Adrian",
    email: "adrianfeloh1@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    /* console.log({name, value}); */
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  /* useEffect(() => {
    console.log("use effect Called") //pruebas   
  }, []) 

  useEffect (() =>{
    console.log("formState Called") //pruebas  
  }, [formState])

  useEffect (() =>{
    console.log("email Called") //pruebas  
  }, [email]) */

  
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <h1>Fomulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <hr />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <hr />
      {//En este ejemplo solo mostraremos el componente Message, si el usuario Adrian1 Existe
        (username === "Adrian1") && <Message/>
      }
    </>
  );
};
