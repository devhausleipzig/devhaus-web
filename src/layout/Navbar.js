import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";
import { FullLine, DevhausLine } from "../components/HorizontalLine";
import logo from "images/devhaus-logo.svg";

const applyLink = 'https://devhausleipzig.typeform.com/to/nuEZxpkv';

const navigationLinks = [
  { to: "/academy", title: "Academy", color: "green" },
  { to: "/studio", title: "Studio", color: "yellow" },
  { to: "/events", title: "Events", color: "red" },
  { to: "/stories", title: "Stories", color: "devhaus" },
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

function Navbar({ toggleMobileMenu }) {
  return (
    <div className="content">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Devhaus Leipzig"></img>
        </Link>
      </div>
      <nav className="nav-menu">
        {navigationLinks.map((link) => (
          <NavLink
            activeClassName="active"
            className="menu-link"
            to={link.to}
            key={link.to}
          >
            {link.title}
            <DevhausLine
              color={link.color || "devhaus"}
              width={32}
              numSegments={4}
            />
          </NavLink>
        ))}
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
          {navigationLinks.map((link) => (
            <NavLink
              activeClassName="active"
              className="menu-link"
              to={link.to}
              key={link.to}
            >
              {link.title}
              <DevhausLine
                color={link.color || "devhaus"}
                width={32}
                numSegments={4}
              />
            </NavLink>
          ))}
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
