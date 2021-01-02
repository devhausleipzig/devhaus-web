import React from "react";
import CCLslider from "./CCLslider.js";

export default function Academy() {
  return (
    <div className="content academy">
      <h1 className="site-header navbar-padding">Academy</h1>
      <section className="ccl-slider">
        <CCLslider></CCLslider>
      </section>
      <section className="ccl-logo page-section">
        <img src="/Code-Camp-Leipzig-Logo.svg" alt="ccl-logo"></img>
        <div className="academy-text">
          <h2>Do you want to become a professional software developer?</h2>
          <h3>
            In our intensive 13-week full-time program, we teach you all the
            skills you'll need for your future job and set you up for a lifelong
            career as a professional software developer.
          </h3>
          <button>
            <a href="https://codecampleipzig.de/">Apply now!</a>
          </button>
        </div>
      </section>
    </div>
  );
}
