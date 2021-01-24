import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./utilities/scrollToTop";
import { ScrollDetector } from "./utilities/scrollDetector";

import Navbar from "layout/Navbar";
import Main from "layout/Main";

export default function App() {
  return (
    <React.StrictMode>
      <ScrollDetector>
        <BrowserRouter>
          <ScrollToTop></ScrollToTop>
          <Navbar />
          <Main />
        </BrowserRouter>
      </ScrollDetector>
    </React.StrictMode>
  );
}
