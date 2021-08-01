import styled from "styled-components"
import { Button, Typography, AppBar } from "@material-ui/core"

export const StyledAppBar = styled(AppBar)`
  padding-top: 20px;
  margin-left: 100px;
  position: fixed !important;
  background-color: black !important;
`

export const StyledNavbarTitle = styled(Typography)`
  font-family: Helvetica, Arial, sans-serif !important;
  font-weight: bold !important;
  color: white;
`

export const StyledNavbarOption = styled(Button)`
  color: white !important;
  margin-left: 60px !important;
`
