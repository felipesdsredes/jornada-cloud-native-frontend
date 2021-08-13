import styled from "styled-components"
import "@fontsource/roboto"
import { ContactForm } from "../../components/ContactForm"
import { Container } from "@material-ui/core"

export const StyledContainer = styled(Container)`
  padding-bottom: 100px;
  width: 100% !important;
  height: auto;
  background-color: var(--secondary);
  display: flex !important;
  flex-direction: column;
  align-items: center;
`

export const StyledTitle = styled.h2`
  font-size: 60px;
  color: var(--white);
  font-family: "Roboto";
`

export const StyledMessage = styled.h3`
  font-size: 30px;
  font-family: "Roboto";
  color: var(--white);
  width: 70%;
`

export const StyledMessageAndFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px !important;
`

export const StyledContactDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; 
 align-items: center;
  background-color: var(--secondary);
`
export const StyledPhotoDiv = styled.div` 
  display: flex;
  width: 70vw;
  flex-direction: column;
  align-items: flex-end;
`

export const StyledContactForm = styled(ContactForm)``
