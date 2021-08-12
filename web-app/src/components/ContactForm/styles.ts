import styled from "styled-components"
import { TextField, Button } from "@material-ui/core"

export const StyledFormButton = styled(Button)`
  background-color: var(--primary) !important;
  color: var(--white) !important;
`

export const StyledTextField = styled(TextField)`
  color: var(--black);
  background-color: var(--white);
  margin-bottom: 8px !important;
  border-radius: 10px;
`

export const StyledForm = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`