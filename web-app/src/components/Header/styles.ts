import styled from "styled-components"
import { Button, Typography, AppBar } from "@material-ui/core"

export const StyledAppBar = styled(AppBar)` 
  box-shadow: 0px 5px 15px -8px var(--gray);
  background-color: var(--primary) !important;
  margin: 0;
  padding-top: 20px;
  border-radius: 2px;
`

export const StyledNavbarTitle = styled(Typography)`
  font-family: Helvetica, Arial, sans-serif !important;
  font-weight: bold !important;
  color: var(--white);
`

export const StyledNavbarOption = styled(Button)`
  color: var(--white) !important;
  margin-left: 60px !important;
`
