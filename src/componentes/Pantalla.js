import React from "react";
import '../hojas-de-estilo/Pantalla.css'

//Creando componente como una función flecha.
const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
);

export default Pantalla;