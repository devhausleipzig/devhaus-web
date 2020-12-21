import { Link } from "react-router-dom";
import React from "react";
import { useEffect } from "react";

function MobileMenu() {
  return (
    <header className="content">
      <a
        href="#main-menu"
        id="main-menu-toggle"
        className="menu-toggle"
        ariaLabel="Open main menu"
      >
        <span className="sr-only">Open main menu</span>
        <div icon="fa-bars" className="fa fa-bars" ariaHidden="true">
          <p>=</p>
        </div>
      </a>

      <nav id="main-menu" className="main-menu" ariaLabel="Main menu">
        <ul>
          <li>
            <a href="/academy">Academy</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a className="mobile-logo" href="/">
              <img src="/devhaus-logo2.svg" alt="Devhaus Leipzig"></img>
            </a>
          </li>
        </ul>
        <a
          href="#main-menu-toggle"
          id="main-menu-close"
          className="menu-close"
          ariaLabel="Close main menu"
        >
          <span className="sr-only">Close main menu</span>
          <div icon="fa-close" className="fa fa-close">
            =
          </div>
        </a>
      </nav>
      <a
        href="#main-menu-toggle"
        className="backdrop"
        tabIndex="-1"
        ariaHidden="true"
        hidden
      >
        ?
      </a>
    </header>
  );
}

function NavMenu() {
  return (
    <nav className="topnav" id="myTopnav">
      <Link className="menu-link" to="/academy">
        Academy
      </Link>
      <Link className="menu-link" to="/work">
        Work
      </Link>
      <Link className="menu-link" to="/about">
        About
      </Link>
      <Link className="menu-link" to="/news">
        News
      </Link>
      <Link className="menu-link" to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  let lastOffset = window.scrollY;

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset < 200) {
      setScrolled(false);
    } else {
      if (offset >= lastOffset) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    }
    lastOffset = offset;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <header className={navbarClasses.join(" ")}>
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src="/devhaus-logo.svg" alt="Devhaus Leipzig"></img>
          </Link>
        </div>
        <NavMenu></NavMenu>
      </div>
      <div className="mobile-menu">
        <MobileMenu></MobileMenu>
      </div>
    </header>
  );
}
