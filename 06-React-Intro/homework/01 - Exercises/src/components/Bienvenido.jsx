import React from "react";
import { Botones } from "./Botones.jsx";

const studentName = "Gilberto";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "Conseguiras tu BOOM en enero de 2024" };

export default function Bienvenido() {
  // el código de tu componente acá
  
  
  return (
    <div>
      <h1>Hola soy Glberto Díaz</h1>
      <h3>{studentName}</h3>
      <ul>{techSkills.map((element,index) => <li key={index}>{element}</li>)}</ul>
      <Botones alerts = {alerts}></Botones>
    </div>
  );

}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
