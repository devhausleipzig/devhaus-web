import { Link } from "react-router-dom";
import React from "react";
import { useEffect } from "react";

function NavMenu() {
  function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
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
      <button className="icon" onClick={myFunction}>
        x
      </button>
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
    </header>
  );
}
