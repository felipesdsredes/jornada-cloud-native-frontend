import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import { LandingPage } from "./pages/LandingPage"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Header title="Jornada Colaborativa - Projeto Frontend"></Header>
    <LandingPage></LandingPage>
  </React.StrictMode>,
  document.getElementById("root")
)
