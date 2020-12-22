import React from "react";
import CCLslider from "./CCLslider.js";

export default function Academy() {
  return (
    <div className="content academy">
      <h1 className="site-header navbar-padding">Academy</h1>
      <CCLslider></CCLslider>
      <div className="academy-apply">
        <div className="ccl-logo">
          <img src="/Code-Camp-Leipzig-Logo.svg" alt="ccl-logo"></img>
        </div>
        <div className="academy-text">
          <h2 className="apply-link">
            Want to become a professional software developer?
          </h2>
          <button>
            <a href="https://codecampleipzig.de/">Apply now</a>
          </button>
        </div>
      </div>
    </div>
  );
}
