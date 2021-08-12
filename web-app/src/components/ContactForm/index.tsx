import { StyledFormButton, StyledTextField, StyledForm } from "./styles"

export const ContactForm = () => {
  return (
    <StyledForm>
      <StyledTextField required label="Nome Completo" placeholder="Vinicius Marques Finger" variant="outlined" />
      <StyledTextField required label="Email" placeholder="vinicius.finger@email.com" type="email" variant="outlined" />
      <StyledFormButton
        type="submit"
      >
        Enviar
      </StyledFormButton>
    </StyledForm>
  )
}
