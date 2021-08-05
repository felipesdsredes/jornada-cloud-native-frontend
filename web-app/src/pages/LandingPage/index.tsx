import {
  StyledDiv,
  StyledContainer,
  StyledTitle,
  StyledContactDiv,
  StyledContactForm,
  StyledMessage,
  StyledMessageAndFormDiv,
} from "./styles"
import livro from "../../assets/images/livro.jpg"
type LandingPageProps = {}

export const LandingPage = (props: LandingPageProps) => {
  return (
    <StyledDiv>
      <StyledContainer maxWidth={false}>
        <StyledTitle>Sejam bem-vindos a Jornada Cloud Native</StyledTitle>
        <StyledContactDiv>
          <img src={livro} alt="livro" />
          <StyledMessageAndFormDiv>
            <StyledMessage>
              Ficamos muito felizes pelo seu interesse em receber uma prévia do
              nosso livro, preencha o formulario abaixo para recebê-la em seu
              e-mail.
            </StyledMessage>
            <StyledContactForm />
          </StyledMessageAndFormDiv>
        </StyledContactDiv>
      </StyledContainer>
    </StyledDiv>
  )
}
