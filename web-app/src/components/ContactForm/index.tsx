import { useState } from 'react';
import { StyledFormButton, StyledTextField, StyledForm } from './styles';
import api from '../../services/api';
import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

export type Color = 'success' | 'info' | 'warning' | 'error';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const [alertSeverity, setAlertSeverity] = useState<Color>();

  async function handleSubmit() {
      const data = { userEmail: email, userName: name};
      await api.post('/cadastro-email', data).then(() => {
        setMessageAlert('E-mail enviado com sucesso!');
        setAlertSeverity('success');
        setShowSnackbar(true);
      })
      .catch(() => {
        setMessageAlert('Erro ao enviar o e-mail!');
        setAlertSeverity('error');
        setShowSnackbar(true);
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
      <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={() => setShowSnackbar(false)} anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}>
        <MuiAlert elevation={6} variant="filled" severity={alertSeverity}>{messageAlert}</MuiAlert>
      </Snackbar>
    </StyledForm>
  )
}
