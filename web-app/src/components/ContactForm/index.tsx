import { useState } from 'react';
import { StyledFormButton, StyledTextField, StyledForm } from './styles';
import api from '../../services/api';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit() {
      const data = { userEmail: email, userName: name};
      await api.post('/cadastro-email', data).then(() => {
        window.alert('E-mail enviado com sucesso!');
      })
      .catch(() => {
        window.alert('Erro ao enviar o e-mail!');
      })
      .finally(() => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
      })
  }

  return (
    <StyledForm>
      <StyledTextField required label="Nome Completo" placeholder="Your name" variant="outlined" onChange={e => setName(e.target.value)} />
      <StyledTextField required label="Email" placeholder="youremail@email.com" type="email" variant="outlined" onChange={e => setEmail(e.target.value)} />
      <StyledFormButton
        onClick={handleSubmit}
      >
        Enviar
      </StyledFormButton>
    </StyledForm>
  )
}
