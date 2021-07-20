import { AppBar, Toolbar } from "@material-ui/core"
import { StyledNavbarOption, StyledNavbarTitle } from "./styles"

type HeaderProps = {
  title: string
}

const Header = (props: HeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <StyledNavbarTitle variant="h6">{props.title}</StyledNavbarTitle>
        <StyledNavbarOption id="navbar-home" color="inherit">
          Home
        </StyledNavbarOption>
        <StyledNavbarOption id="navbar-about" color="inherit">
          About
        </StyledNavbarOption>
      </Toolbar>
    </AppBar>
  )
}

export default Header
