import React, { useRef } from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./Main.scss";

import Footer from "layout/Footer";
import Home from "pages/Home";
import Academy from "pages/Academy";
import Studio from "pages/Studio";
import Events from "pages/Events";
import Stories from "pages/Stories";
import About from "pages/About";
import Contact from "pages/Contact";
import LegalNotice from "pages/LegalNotice";
import Privacy from "pages/Privacy";
import FAQ from "pages/FAQ";

const routes = [
  { path: ["/", "/home"], name: "Home", Component: Home },
  { path: "/academy", name: "Academy", Component: Academy },
  { path: "/studio", name: "Studio", Component: Studio },
  { path: "/events", name: "Events", Component: Events },
  { path: "/stories", name: "Stories", Component: Stories },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/privacy", name: "Privacy", Component: Privacy },
  { path: "/impressum", name: "Impressum", Component: LegalNotice },
  { path: "/faq", name: "FAQ", Component: FAQ },
];

function RouteView({ path, Component }) {
  const nodeRef = useRef(null);
  return (
    <Route exact path={path}>
      {({ match }) => (
        <CSSTransition
          nodeRef={nodeRef}
          in={match != null}
          timeout={750}
          classNames="page"
          unmountOnExit
        >
          <div ref={nodeRef} className="page">
            <Component />
            <Footer />
          </div>
        </CSSTransition>
      )}
    </Route>
  );
}

export default function Main() {
  return (
    <main>
      {routes.map(({ path, name, Component }) => (
        <RouteView key={name} path={path} Component={Component} />
      ))}
    </main>
  );
}
