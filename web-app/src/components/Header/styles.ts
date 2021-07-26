import styled from "styled-components"
import { Button, Typography, AppBar } from "@material-ui/core"

export const StyledAppBar = styled(AppBar)`
  margin-top: 20px;
  margin-left: 100px;
  position: fixed !important;
  background: "transparent";
`

export const StyledNavbarTitle = styled(Typography)`
  font-family: Helvetica, Arial, sans-serif !important;
  font-weight: bold !important;
  color: black;
`

export const StyledNavbarOption = styled(Button)`
  color: black !important;
  margin-left: 60px !important;
`
