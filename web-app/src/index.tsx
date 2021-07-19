import React from "react";
import ReactDOM from "react-dom";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core"
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Jornada colaborativa - Projeto Frontend</Typography>
      </Toolbar>
    </AppBar>
    <Container>
      <Typography variant="h3">This is a project in React.js</Typography>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
