import styled from "styled-components"
import { Button, Typography, AppBar } from "@material-ui/core"

export const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  position: fixed !important;
  background-color: #e1e1e3 !important;
  margin: 0;
  padding-top: 20px;
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
