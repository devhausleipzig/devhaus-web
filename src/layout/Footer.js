import React from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "components/NewsletterForm";
import { useTranslation } from "react-i18next";

import "./Footer.scss";

export default function Footer() {
  const {t} = useTranslation()

  const newsletterForm = NewsletterForm();

  return (
    <footer>
      <div className="content">
        <div className="copyright-container">
          <div className="copyright">
            © {new Date().getFullYear()} Code Camp Leipzig
          </div>
          <div className="footer-links">
            <Link to="/privacy">{t('footer:privacy')}</Link>
            <Link to="/impressum">Impressum</Link>
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
            href="https://www.facebook.com/devhausleipzig"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/devhausleipzig"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/DevhausLeipzig"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
