import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Footer.scss";

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

function NewsletterForm() {
  const [isSubscribing, setIsSubscribing] = useState(false);

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    setIsSubscribing(false);
  };

  const formRef = useRef(null);
  useOutsideAlerter(formRef, () => {
    setIsSubscribing(false);
  });
  const inputRef = useRef(null);

  const [shouldFocus, setShouldFocus] = useState(false);
  useEffect(() => {
    if (inputRef.current && shouldFocus) {
      setShouldFocus(false);
      inputRef.current.focus();
    }
  }, [inputRef, shouldFocus]);

  if (isSubscribing) {
    return (
      <form ref={formRef} className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Add your email address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Subscribe
        </button>
      </form>
    );
  } else
    return (
      <button
        className="newsletter-subscribe"
        onClick={() => {
          setEmail("");
          setShouldFocus(true);
          setIsSubscribing(true);
        }}
      >
        Subscribe to our Newsletter
      </button>
    );
}

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="copyright-container">
          <div className="copyright">© 2020 Code Camp Leipzig</div>
          <div className="footer-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/imprint">Imprint</Link>
          </div>
        </div>
        <div className="newsletter">{NewsletterForm()}</div>
        <div className="social-links">
          <Link to="/privacy">Meetup</Link>
          <Link to="/imprint">Facebook</Link>
          <Link to="/privacy">Instagram</Link>
        </div>
      </div>
    </footer>
  );
}
