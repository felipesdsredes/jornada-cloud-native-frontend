import { StyledFormButton, StyledTextField } from "./styles"

export const ContactForm = () => {
  return (
    <form>
      <StyledTextField label="Nome Completo" />
      <br />
      <StyledTextField label="Email" type="email" />
      <br />
      <StyledFormButton
        variant="contained"
        size="medium"
        color="primary"
        type="submit"
      >
        Enviar
      </StyledFormButton>
    </form>
  )
}
