import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import Footer from "./footer";
import NavBar from "./navbar";

export default function Main({ children }) {
  return (
    <div className="bg-white">
      <div className="z-0 mx-auto flex min-h-screen max-w-8xl flex-col px-8 py-8">
        <NavBar />
        <main className="grow pt-32">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
