import "./CookieConsent.scss";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const cookieConsentGiven = localStorage.getItem("cookie-consent") != null;

export default function CookieConsent() {
  const [haveConsent, setHaveConsent] = useState(cookieConsentGiven);

  const ref = useRef(null);

  return (
    <CSSTransition
      in={!haveConsent}
      timeout={5000}
      nodeRef={ref}
      classNames="shift-down"
      unmountOnExit
    >
      <div
        className="cookie-consent"
        ref={ref}
        onClick={() => {
          localStorage.setItem("cookie-consent", Date.now());
          setHaveConsent(true);
        }}
      >
        <div className="text">
          This website uses cookies.
          <a
            onClick={(event) => {
              event.stopPropagation();
            }}
            href="https://www.websitepolicies.com/policies/view/E31Sx4oK"
            rel="noreferrer"
            target="_blank"
          >
            Learn more
          </a>
          or click
        </div>
        <button className="button-text">Ok</button>
      </div>
    </CSSTransition>
  );
}
