import { useState } from "react"
import { StyledFormButton, StyledTextField, StyledForm } from "./styles"
import api from '../../services/api';

export const ContactForm = () => {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 

  async function handleSubmit() {
    const data = { userEmail: email, userName: name};
    const response = await api.post('/cadastro-email', data);
    console.log(response);
  }

  return (
    <StyledForm>
      <StyledTextField required label="Nome Completo" placeholder="Vinicius Marques Finger" variant="outlined" onChange={e => setName(e.target.value)} />
      <StyledTextField required label="Email" placeholder="vinicius.finger@email.com" type="email" variant="outlined" onChange={e => setEmail(e.target.value)} />
      <StyledFormButton
        onClick={handleSubmit}
      >
        Enviar
      </StyledFormButton>
    </StyledForm>
  )
}
