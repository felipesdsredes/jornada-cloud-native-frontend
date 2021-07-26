import { StyledDiv, StyledTitle } from "./styles"
import { Container } from "@material-ui/core"
type LandingPageProps = {}

export const LandingPage = (props: LandingPageProps) => {
  return (
    <StyledDiv>
      <Container>
        <StyledTitle>Sejam bem-vindos ao Jornada Cloud Native</StyledTitle>
      </Container>
    </StyledDiv>
  )
}
