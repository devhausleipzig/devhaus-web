import React from "react";
import Link from "next/link";
import NewsletterForm from "../components/NewsletterForm";
import { useTranslation } from "react-i18next";
import { SiMeetup, SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";

export default function Footer() {
  const { t } = useTranslation();

  const newsletterForm = NewsletterForm();

  return (
    <footer className="border-t border-gray-500/20 pt-4 text-gray-500">
      <div className="flex items-center justify-between">
        <div className="flex gap-8">
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
        <div className="space-y-4 text-center">
          <div>© {new Date().getFullYear()} Code Camp Leipzig</div>
          <div>{newsletterForm}</div>
        </div>
        <div className="flex gap-8">
          <a
            className="transition-colors duration-300 hover:text-[#e51937]"
            href="https://www.meetup.com/Code-Camp-Leipzig-Meetup-Group/"
            target="_blank"
            rel="noreferrer"
          >
            <SiMeetup className="h-6 w-6" />
          </a>
          <a
            className="transition-colors duration-300 hover:text-[#4267B2]"
            href="https://www.facebook.com/devhausleipzig"
            target="_blank"
            rel="noreferrer"
          >
            <SiFacebook className="h-6 w-6" />
          </a>
          <a
            className="transition-colors duration-300 hover:text-[#C13584]"
            href="https://instagram.com/devhausleipzig"
            target="_blank"
            rel="noreferrer"
          >
            <SiInstagram className="h-6 w-6" />
          </a>
          <a
            className="transition-colors duration-300 hover:text-[#1DA1F2]"
            href="https://twitter.com/DevhausLeipzig"
            target="_blank"
            rel="noreferrer"
          >
            <SiTwitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
