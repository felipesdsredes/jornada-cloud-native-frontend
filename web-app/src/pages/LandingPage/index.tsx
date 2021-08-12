import {
  StyledContainer,
  StyledTitle,
  StyledContactDiv,
  StyledContactForm,
  StyledMessage,
  StyledMessageAndFormDiv,
  StyledPhotoDiv
} from "./styles"
import { Strings } from "../../strings"
import livro from "../../assets/images/livro.jpg"

type LandingPageProps = {}

export const LandingPage = (props: LandingPageProps) => {
  return (
    <StyledContainer maxWidth={false}>
      <StyledTitle>{Strings.LadingPageTitle}</StyledTitle>
      <StyledContactDiv>
        <StyledPhotoDiv>
          <img src={livro} alt="livro" />
        </StyledPhotoDiv>
        <StyledMessageAndFormDiv>
          <StyledMessage>{Strings.LandingPageMessage}</StyledMessage>
          <StyledContactForm />
        </StyledMessageAndFormDiv>
      </StyledContactDiv>
    </StyledContainer>
  )
}
