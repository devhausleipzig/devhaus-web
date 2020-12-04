import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  Home,
  Work,
  Navbar,
  Footer,
  Contact,
  News,
  About,
  Imprint,
  Privacy,
  ScrollToTop,
} from "./App";
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
