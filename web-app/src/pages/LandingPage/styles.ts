import styled from "styled-components"
import "@fontsource/roboto"
import { ContactForm } from "../../components/ContactForm"
import { Container } from "@material-ui/core"

export const StyledContainer = styled(Container)`
  margin-top: 100px;
  padding-bottom: 100px;
  width: 100% !important;
  background-color: #001854;
  position: absolute;
`

export const StyledTitle = styled.h2`
  font-size: 60px;
  color: white;
  padding-top: 150px;
  padding-left: 200px;
  font-family: "Roboto";
`

export const StyledMessage = styled.h3`
  font-size: 30px;
  font-family: "Roboto";
  color: white;
  padding-right: 300px; ;
`

export const StyledMessageAndFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px !important;
`

export const StyledContactDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 100px;
  background-color: #001854;
  padding-left: 200px;
`

export const StyledContactForm = styled(ContactForm)``
