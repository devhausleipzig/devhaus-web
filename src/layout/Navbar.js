import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { FullLine, DevhausLine } from "../components/HorizontalLine";
import logo from "images/devhaus-logo.svg";

const navigationLinks = [
  {
    to: "https://devhausleipzig.typeform.com/to/nuEZxpkv",
    title: "Apply Now",
    color: "blue",
    external: true,
    activePath: "/",
  },
  { to: "/academy", title: "Academy", color: "blue" },
  { to: "/studio", title: "Studio", color: "green" },
  { to: "/events", title: "Events", color: "yellow" },
  { to: "/stories", title: "Stories", color: "red" },
  { to: "/about", title: "About", color: "devhaus" },
  { to: "/contact", title: "Contact", color: "devhaus" },
];

function HamburgerIcon({ onClick }) {
  return (
    <div onClick={onClick} className="hamburger-icon">
      <svg viewBox="0 0 100 38" width="100%" height="100%">
        <rect width="100" height="8"></rect>
        <rect y="30" width="100" height="8"></rect>
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
        {navigationLinks.map((link) => AbstractNavLink(link, "menu-link"))}
      </nav>
      <nav className="nav-hamburger">
        <HamburgerIcon onClick={toggleMobileMenu} />
      </nav>
    </div>
  );
}

function MobileMenu({ toggleMobileMenu, visible }) {
  return (
    <div
      className={"mobile-menu " + (visible ? "visible" : "")}
      onClick={toggleMobileMenu}
    >
      <div className="content">
        <nav className="nav-menu">
          {navigationLinks.map((link) => AbstractNavLink(link, "menu-link"))}
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

  const toggleMobileMenu = () => {
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
