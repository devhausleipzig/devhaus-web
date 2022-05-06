import { StrictMode } from "react";
import CookieConsent from "../components/CookieConsent";
import Main from "../layout/main";
import GoogleAnalytics from "./../components/GoogleAnalytics";

// import { ScrollToTop } from "../utilities/scrollToTop";
// import { ScrollDetector } from "../utilities/scrollDetector";
// import Navbar from "../layout/navbar";

import "../i18n.js";
import "../styles/global.css";
import "react-languages-select/scss/react-languages-select.scss";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StrictMode>
        <Main>
          <Component {...pageProps} />
        </Main>
        <CookieConsent />
      </StrictMode>
      <GoogleAnalytics />
    </>
  );
}

export default MyApp;
