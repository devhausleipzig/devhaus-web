import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
// import "./Main.scss";

import Footer from "./footer";
import NavBar from "./navbar";

// const routes = [
//   { path: ["/", "/home"], name: "Home", Component: Home },
//   { path: "/academy", name: "Academy", Component: Academy },
//   { path: "/studio", name: "Studio", Component: Studio },
//   { path: "/events", name: "Events", Component: Events },
//   { path: "/stories", name: "Stories", Component: Stories },
//   { path: "/about", name: "About", Component: About },
//   { path: "/contact", name: "Contact", Component: Contact },
//   { path: "/privacy", name: "Privacy", Component: Privacy },
//   { path: "/impressum", name: "Impressum", Component: LegalNotice },
//   { path: "/faq", name: "FAQ", Component: FAQ },
// ];

// function RouteView({ path, Component }) {
//   const nodeRef = useRef(null);
//   return (
//     <Route exact path={path}>
//       {({ match }) => (
//         <CSSTransition
//           nodeRef={nodeRef}
//           in={match != null}
//           timeout={750}
//           classNames="page"
//           unmountOnExit
//         >
//           <div ref={nodeRef} className="page">
//             <Component />
//             <Footer />
//           </div>
//         </CSSTransition>
//       )}
//     </Route>
//   );
// }

export default function Main({ children }) {
  return (
    <div className="z-0 mx-auto flex min-h-screen max-w-8xl flex-col px-8 py-8 lg:px-0">
      <NavBar />
      <main className="grow">
        {/* {routes.map(({ path, name, Component }) => (
        <RouteView key={name} path={path} Component={Component} />
      ))} */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
