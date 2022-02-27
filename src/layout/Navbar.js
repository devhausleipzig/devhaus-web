import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { FullLine, DevhausLine } from "../components/HorizontalLine";
import logo from "images/devhaus-logo.svg";
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/scss/react-languages-select.scss';
import { useTranslation } from "react-i18next";

function NavLinks() {
  const {t} = useTranslation();

  return (
    [
      { to: "/academy", title: t('nav:academy'), color: "blue" },
      { to: "/studio", title: t('nav:studio'), color: "green" },
      { to: "/events", title: t('nav:events'), color: "yellow" },
      { to: "/stories", title: t('nav:stories'), color: "red" },
      { to: "/faq", title: "FAQ", color: "devhaus" },
      { to: "/about", title: t('nav:about'), color: "devhaus" },
      { to: "/contact", title: t('nav:contact'), color: "devhaus" },
    ]
  );
}

function HamburgerIcon({ onClick }) {
  return (
    <div onClick={onClick} className="hamburger-icon">
      <svg viewBox="0 0 100 68" width="100%" height="100%">
        <rect width="100" height="8"></rect>
        <rect y="30" width="100" height="8"></rect>
        <rect y="60" width="100" height="8"></rect>
      </svg>
    </div>
  );
}

function AbstractNavLink(link, className) {
  const location = useLocation();
  const line = (
    <DevhausLine color={link.color || "devhaus"} width={32} numSegments={4} />
  );
  if (link.external) {
    const isActive = location.pathname === link.activePath;
    return (
      <a
        href={link.to}
        key={link.to}
        target="_blank"
        rel="noreferrer"
        className={className + (isActive ? " active" : "")}
      >
        {link.title}
        {line}
      </a>
    );
  } else {
    return (
      <NavLink
        activeClassName="active"
        className={className}
        to={link.to}
        key={link.to}
      >
        {link.title}
        {line}
      </NavLink>
    );
  }
}

function Navbar({ toggleMobileMenu }) {
  return (
    <div className="content">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Devhaus Leipzig"></img>
        </Link>
      </div>
      <nav className="nav-menu">
        {NavLinks().map((link) => AbstractNavLink(link, "menu-link"))}
      </nav>
      <nav className="nav-hamburger">
        <HamburgerIcon onClick={toggleMobileMenu} />
      </nav>
      <LanguagePicker id="langpicker"></LanguagePicker>
    </div>
  );
}

function LanguagePicker() {
  const {i18n} = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="langpicker" style={{ backgroundColor: 'white', borderRadius: '15px' }}>
      <ReactLanguageSelect languages={["en", "de"]} names="international" defaultLanguage="en"
      onSelect={changeLanguage} customLabels={{'en': 'English', 'de': 'Deutsch'}} />
    </div>
  )
}

function MobileMenu({ toggleMobileMenu, visible }) {
  return (
    <div
      className={"mobile-menu " + (visible ? "visible" : "")}
      onClick={toggleMobileMenu}
    >
      <div className="content">
        <nav className="nav-menu">
          {NavLinks().map((link) => AbstractNavLink(link, "menu-link"))}
        </nav>
      </div>
      <div className="bottom-border">
        <FullLine color="devhaus" width={16} numSegments={6} />
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
    <div className="navigation">
      <div className="navbar">
        <Navbar toggleMobileMenu={toggleMobileMenu} />
      </div>
      <div className={"navbar scroll-navbar"}>
        <Navbar toggleMobileMenu={toggleMobileMenu} />
      </div>
      <MobileMenu
        toggleMobileMenu={toggleMobileMenu}
        visible={showMobileMenu}
      ></MobileMenu>
    </div>
  );
}
