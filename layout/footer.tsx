import React from "react";
import Link from "next/link";
import NewsletterForm from "../components/NewsletterForm";
import { useTranslation } from "react-i18next";

// import "./Footer.scss";

export default function Footer() {
  const { t } = useTranslation();

  const newsletterForm = NewsletterForm();

  return (
    <footer className="text-gray-500">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-evenly justify-self-start">
          <div>© {new Date().getFullYear()} Code Camp Leipzig</div>
          <div className="flex flex-col">
            <Link href="/privacy">
              <a className="transition-colors duration-300 hover:text-gray-900">
                {t("footer:privacy")}
              </a>
            </Link>
            <Link href="/impressum">
              <a className="transition-colors duration-300 hover:text-gray-900">
                Impressum
              </a>
            </Link>
          </div>
        </div>
        <div className="text-center">{newsletterForm}</div>
        <div className="flex flex-col text-right">
          <a
            className="transition-colors duration-300 hover:text-gray-900"
            href="https://www.meetup.com/Code-Camp-Leipzig-Meetup-Group/"
            target="_blank"
            rel="noreferrer"
          >
            Meetup
          </a>
          <a
            className="transition-colors duration-300 hover:text-gray-900"
            href="https://www.facebook.com/devhausleipzig"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            className="transition-colors duration-300 hover:text-gray-900"
            href="https://instagram.com/devhausleipzig"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="transition-colors duration-300 hover:text-gray-900"
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
