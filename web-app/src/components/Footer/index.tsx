import { Link } from "@material-ui/core"
import { StyledFooter, StyledTypography } from "./styles"

// type FooterProps = {
//   title: string
// }

const Footer = (/*props: FooterProps*/) => {
  return (
    <StyledFooter>
      <StyledTypography variant="subtitle1">
        Jornada Colaborativa - Projeto Frontend
      </StyledTypography>
      <StyledTypography variant="body2">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </StyledTypography>
    </StyledFooter>
  )
}

export default Footer
