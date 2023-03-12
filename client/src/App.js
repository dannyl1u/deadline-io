import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
