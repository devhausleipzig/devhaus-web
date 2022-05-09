import React, { useState, useRef, RefObject } from "react";
import Link from "next/link";
import { DevhausLine } from "../components/HorizontalLine";
import ReactLanguageSelect from "react-languages-select";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const logo = "/images/devhaus-logo.svg";

function NavLinks() {
  const { t } = useTranslation();

  return [
    { to: "/academy", title: t("nav:academy"), color: "blue" },
    { to: "/studio", title: t("nav:studio"), color: "green" },
    { to: "/events", title: t("nav:events"), color: "yellow" },
    {
      to: "https://devhausleipzig.typeform.com/to/yyNPut0R",
      title: t("nav:careers"),
      color: "green",
      external: true,
    },
    {
      to: "/about",
      title: t("nav:about"),
      subs: [
        { to: "/stories", title: t("nav:stories"), color: "red" },
        { to: "/faq", title: "FAQ" },
        { to: "/contact", title: t("nav:contact") },
      ],
    },
  ];
}

function HamburgerIcon({ onClick }) {
  return (
    <div onClick={onClick} className="w-8 cursor-pointer">
      <svg viewBox="0 0 100 68" width="100%" height="100%">
        <rect width="100" height="8"></rect>
        <rect y="30" width="100" height="8"></rect>
        <rect y="60" width="100" height="8"></rect>
      </svg>
    </div>
  );
}

function NavLink(link) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isActive = router.pathname === link.to;
  const line = (
    <DevhausLine
      active={isActive}
      color={link.color}
      width={32}
      numSegments={4}
    />
  );
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href={link.to} key={link.to}>
        <a
          target={link.external ? "_blank" : null}
          rel={link.external ? "noreferrer" : null}
          className="text-xl uppercase tracking-wide antialiased"
        >
          {link.title}
          {line}
        </a>
      </Link>
      {link.subs && open && (
        <div className="absolute space-y-4 bg-white py-4 shadow-lg">
          {link.subs.map((sub) => (
            <Link href={sub.to}>
              <a className="inline-block px-8 text-lg hover:underline">
                {sub.title}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function Navbar({ toggleMobileMenu }) {
  return (
    <div className="fixed inset-x-0 top-0 z-50 mx-auto flex w-full max-w-8xl items-center justify-between bg-white py-4 px-8 lg:px-0">
      <div className="w-20">
        <Link href="/">
          <a>
            <img className="h-20" src={logo} alt="Devhaus Leipzig"></img>
          </a>
        </Link>
      </div>
      <nav className="hidden space-x-6 lg:flex">
        {NavLinks().map((link) => NavLink(link))}
      </nav>
      <nav className="lg:hidden">
        <HamburgerIcon onClick={toggleMobileMenu} />
      </nav>
      <LanguagePicker id="langpicker"></LanguagePicker>
    </div>
  );
}

function LanguagePicker({ id }) {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { i18n } = useTranslation();

  const selector: RefObject<ReactLanguageSelect> = useRef(null);

  i18n.on("loaded", () => {
    i18n.on("languageChanged", (lang) => {
      console.log("selector", selector);
      selector.current.updateSelected(lang);
    });
  });

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <div
      id={id}
      className="absolute top-0 right-[1vw] z-50 rounded-2xl bg-white"
    >
      <ReactLanguageSelect
        ref={selector}
        languages={["en", "de"]}
        names="international"
        defaultLanguage="en"
        onSelect={changeLanguage}
        customLabels={{ en: "English", de: "Deutsch" }}
      />
    </div>
  );
}

function MobileMenu({ toggleMobileMenu, visible }) {
  return (
    <div
      className={
        "fixed inset-x-0 top-0 z-40 -translate-y-full overflow-auto bg-white px-8 pt-8 pb-4 transition-transform duration-500 " +
        (visible ? "block transform-none opacity-100" : "")
      }
      onClick={toggleMobileMenu}
    >
      <div className="flex w-full items-center justify-between">
        <nav className="lg:flex">{NavLinks().map((link) => NavLink(link))}</nav>
      </div>
      <div className="absolute inset-x-0 bottom-0 w-full">
        <DevhausLine active color="devhaus" width={64} />
      </div>
    </div>
  );
}

export default function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = (event) => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <Navbar toggleMobileMenu={toggleMobileMenu} />
      <MobileMenu
        toggleMobileMenu={toggleMobileMenu}
        visible={showMobileMenu}
      ></MobileMenu>
    </>
  );
}
