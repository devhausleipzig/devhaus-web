import { StrictMode } from "react";
import CookieConsent from "../components/CookieConsent";
import { ScrollToTop } from "../utilities/scrollToTop";
import { ScrollDetector } from "../utilities/scrollDetector";
import Navbar from "../layout/navbar";
import Main from "../layout/main";

import "../i18n.js";
import "../styles/global.css";
import "react-languages-select/scss/react-languages-select.scss";

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      {/* <ScrollDetector> */}
      {/* <ScrollToTop></ScrollToTop> */}
      {/* <Navbar /> */}
      <Main>
        <Component {...pageProps} />
      </Main>
      <CookieConsent />
      {/* </ScrollDetector> */}
    </StrictMode>
  );
}

export default MyApp;
