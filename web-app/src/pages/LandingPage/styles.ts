import styled from "styled-components"
import "@fontsource/roboto"
import { ContactForm } from "../../components/ContactForm"
import { Container } from "@material-ui/core"

export const StyledDiv = styled.div`
  height: 100vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(247, 247, 247, 1) 2%,
    rgba(217, 217, 217, 1) 100%
  );
`

export const StyledContainer = styled(Container)`
  margin-top: 100px;
  padding-bottom: 100px;
  width: 100% !important;
  background-color: #efefef;
`

export const StyledTitle = styled.h2`
  font-size: 60px;
  color: black;
  padding-top: 150px;
  padding-left: 200px;
  font-family: "Roboto";
`

export const StyledMessage = styled.h3`
  font-size: 30px;
  font-family: "Roboto";
  color: black;
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
  background-color: #efefef;
  padding-left: 200px;
`

export const StyledContactForm = styled(ContactForm)``
