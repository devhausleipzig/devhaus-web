// @ts-nocheck
import { useEffect, useRef, useState, forwardRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useTranslation } from "react-i18next";
import { Transition } from "@headlessui/react";
// import "./NewsletterForm.scss";

function useOutsideAlerter(ref, cb) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb]);
}

const MailchimpForm = forwardRef(({ shouldFocus, onFocus, onSubmit }, ref) => {
  const { t } = useTranslation();
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current && shouldFocus) {
      onFocus();
      inputRef.current.focus();
    }
  }, [inputRef, shouldFocus, onFocus]);
  return (
    <div id="mc_embed_signup">
      <form
        ref={ref}
        action="https://codecampleipzig.us20.list-manage.com/subscribe/post?u=61cee2c8c87e614439e8d0d6d&amp;id=40833812ed"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate newsletter-form"
        target="_blank"
        noValidate
        onSubmit={onSubmit}
      >
        <div
          id="mc_embed_signup_scroll"
          className="grid w-full grid-cols-[1fr,auto] items-center gap-4 border-b border-gray-500"
        >
          <div>
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="mr-4 w-full p-2 text-gray-900 caret-green selection:bg-green"
              id="mce-EMAIL"
              placeholder={t("newsletter:placeholder")}
              required
              ref={inputRef}
            />

            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_61cee2c8c87e614439e8d0d6d_40833812ed"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
          </div>
          <div className="clear">
            <input
              type="submit"
              className="text-gray-900"
              value={t("newsletter:submit") as string}
              name="subscribe"
              id="mc-embedded-subscribe"
            />
          </div>
        </div>
      </form>
    </div>
  );
});

export default function NewsletterForm() {
  const { t } = useTranslation();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const formRef = useRef(null);
  useOutsideAlerter(formRef, () => {
    setIsSubscribing(false);
  });

  const [shouldFocus, setShouldFocus] = useState(false);

  return (
    // TODO: Fix janky transition
    <>
      <Transition
        show={isSubscribing}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-1"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-1"
        leaveTo="opacity-0"
      >
        <div key="form">
          <MailchimpForm
            ref={formRef}
            shouldFocus={shouldFocus}
            onFocus={() => setShouldFocus(false)}
            onSubmit={() => {
              setIsVisible(false);
              setTimeout(() => {
                setIsSubscribing(false);
                setIsVisible(true);
              }, 0);
            }}
          />
        </div>
      </Transition>
      <Transition
        show={!isSubscribing}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-1"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-1"
        leaveTo="opacity-0"
      >
        <button
          key="button"
          className="newsletter-subscribe text-lg hover:text-gray-900"
          onClick={() => {
            setShouldFocus(true);
            setIsSubscribing(true);
          }}
        >
          {t("newsletter:callToAction")}
        </button>
      </Transition>
    </>
    // <SwitchTransition>
    //   <CSSTransition
    //     key={isSubscribing ? "form" : "button"}
    //     addEndListener={(node, done) =>
    //       node.addEventListener("transitionend", done, false)
    //     }
    //     classNames="fade"
    //   >
    //     {isSubscribing ? (
    //       <div key="form" style={isVisible ? {} : { opacity: 0 }}>
    //         <MailchimpForm
    //           ref={formRef}
    //           shouldFocus={shouldFocus}
    //           onFocus={() => setShouldFocus(false)}
    //           onSubmit={() => {
    //             setIsVisible(false);
    //             setTimeout(() => {
    //               setIsSubscribing(false);
    //               setIsVisible(true);
    //             }, 0);
    //           }}
    //         />
    //       </div>
    //     ) : (
    //       <button
    //         key="button"
    //         className="newsletter-subscribe hover:text-gray-900"
    //         onClick={() => {
    //           setShouldFocus(true);
    //           setIsSubscribing(true);
    //         }}
    //       >
    //         {t("newsletter:callToAction")}
    //       </button>
    //     )}
    //   </CSSTransition>
    // </SwitchTransition>
  );
}
