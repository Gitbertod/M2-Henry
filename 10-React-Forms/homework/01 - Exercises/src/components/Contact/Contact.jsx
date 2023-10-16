import React, { useState } from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors = {};

  if (inputs.name === "") {
    errors.name = "Se requiere un nombre"
  }
  if (inputs.message === "") {
    errors.message = "Se requiere un mensaje"
  }

  if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';
  }
  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: ''

  })

  const [errors, setErros] = React.useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })

    setErros(validate({
      ...inputs,
      [event.target.name] : event.target.value,
    }))
  }

  return <div>
    <form>
      <label>Nombre:</label>
      <input name='name' placeholder='Escribe tu nombre...' type='text' value={inputs.name} onChange={handleChange}></input>

      <label>Correo Electrónico:</label>
      <input name='email' placeholder='Escribe tu email...' type='text' value={inputs.email} onChange={handleChange} ></input>

      <label>Mensaje:</label>
      <textarea name='message' placeholder='Escribe tu mensaje...' type="text" value={inputs.message} onChange={handleChange} ></textarea>
      <button type='submit'>Enviar</button>
    </form>

  </div>
}
