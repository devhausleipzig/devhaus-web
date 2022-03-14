// import styles from "./CookieConsent.module.css";
import { Transition } from "@headlessui/react";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const cookieConsentGiven = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("cookie-consent") != null;
  }
  return false;
};

export default function CookieConsent() {
  const [haveConsent, setHaveConsent] = useState(cookieConsentGiven());

  const ref = useRef(null);

  // <CSSTransition
  //   in={!haveConsent}
  //   timeout={5000}
  //   nodeRef={ref}
  //   classNames="shiftDown"
  //   unmountOnExit
  // >
  return (
    <Transition show={!haveConsent}>
      <div
        className="fixed inset-x-0 bottom-0 flex items-center justify-center border-b-4 bg-gray-900 p-2 text-lg font-light text-white"
        ref={ref}
        onClick={() => {
          if (window !== undefined) {
            localStorage.setItem("cookie-consent", Date.now().toString());
            setHaveConsent(true);
          }
        }}
      >
        <div>
          This website uses cookies.{" "}
          <a
            onClick={(event) => {
              event.stopPropagation();
            }}
            href="https://www.websitepolicies.com/policies/view/E31Sx4oK"
            rel="noreferrer"
            target="_blank"
            className="border-b border-white"
          >
            Learn more
          </a>{" "}
          or click
        </div>
        <button className="button-text ml-1 font-medium uppercase text-yellow">
          Ok
        </button>
      </div>
    </Transition>
  );
}
