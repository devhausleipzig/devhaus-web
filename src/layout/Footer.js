import React from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "components/NewsletterForm";

import "./Footer.scss";

export default function Footer() {
  const newsletterForm = NewsletterForm();
  // const newsletterForm = "";
  return (
    <footer>
      <div className="content">
        <div className="copyright-container">
          <div className="copyright">
            © {new Date().getFullYear()} Code Camp Leipzig
          </div>
          <div className="footer-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/imprint">Imprint</Link>
          </div>
        </div>
        <div className="newsletter">{newsletterForm}</div>
        <div className="social-links">
          <a
            href="https://www.meetup.com/Code-Camp-Leipzig-Meetup-Group/"
            target="_blank"
            rel="noreferrer"
          >
            Meetup
          </a>
          <a
            href="https://www.facebook.com/codecampleipzig"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/codecampleipzig/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
