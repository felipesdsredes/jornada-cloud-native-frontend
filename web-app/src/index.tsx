import React from "react"
import ReactDOM from "react-dom"
import { Container, Typography } from "@material-ui/core"
import Header from "./components/Header"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Header title="Jornada Colaborativa - Projeto Frontend"></Header>
    <Container>
      <Typography variant="h3">This is a project in React.js</Typography>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
)
