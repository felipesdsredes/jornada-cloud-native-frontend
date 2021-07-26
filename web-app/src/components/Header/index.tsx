import { Toolbar } from "@material-ui/core"
import { StyledNavbarOption, StyledNavbarTitle, StyledAppBar } from "./styles"

type HeaderProps = {
  title: string
}

const Header = (props: HeaderProps) => {
  return (
    <StyledAppBar
      position="absolute"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <StyledNavbarTitle variant="h6">{props.title}</StyledNavbarTitle>
        <StyledNavbarOption id="navbar-home" color="inherit">
          Home
        </StyledNavbarOption>
        <StyledNavbarOption id="navbar-about" color="inherit">
          About
        </StyledNavbarOption>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Header
