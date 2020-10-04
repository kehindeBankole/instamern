import React, { useContext } from "react";
import State from "./context/state";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./pages/Post";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import { UserContext } from "./context/context";
function App() {
  function enter() {
    fetch("/api/auth", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "bankole",
        email: "mariam@gmail.com",
        password: "ayinke2013",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <State>
      <Router>
      <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <PrivateRoute path="/posts" component={Post} exact />
        </Switch>
      </Router>
    </State>
  );
}

export default App;
