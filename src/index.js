import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { ScrollToTop } from "./App";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Academy from "./components/Academy";
import Work from "./components/Work";
import About from "./components/About";
import News from "./components/News";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Imprint from "./components/Imprint";
import Privacy from "./components/Privacy";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>

      <main>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home></Home>
          </Route>
          <Route exact path="/academy">
            <Academy></Academy>
          </Route>
          <Route exact path="/work">
            <Work></Work>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/news">
            <News></News>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/imprint">
            <Imprint></Imprint>
          </Route>
          <Route exact path="/privacy">
            <Privacy></Privacy>
          </Route>
        </Switch>
      </main>
      <Footer></Footer>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
