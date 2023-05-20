import { memo } from "react"


export const Small = memo( ({value}) => {

    // 2. para no renderizar se usa la fución memo

    console.log("Me volví a generar :(")

  return (
    <small> {value} </small>
  )
}) //2. se debe introducir el componente dentro de los parentesis de memo (  )
