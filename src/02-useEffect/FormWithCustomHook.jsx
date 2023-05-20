import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={ onResetForm } className="btn btn-primary mt-2">Reset</button>
    </>
  );
};
