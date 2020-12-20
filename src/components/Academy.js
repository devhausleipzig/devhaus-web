import React from "react";

export default function Academy() {
  return (
    <div className="content academy">
      <h1 className="site-header navbar-padding">Academy</h1>
      <div class="academy-apply">
        <div className="ccl-logo">
          <img src="/CCLhand.jpeg" alt="ccl-logo"></img>
        </div>
        <div className="academy-text">
          <h2 className="apply-link">
            Want to become a professional software developer?
          </h2>
          <h3>
            We are currently accepting applications for Code Camp Session 4!
          </h3>

          <button>
            <a href="https://codecampleipzig.de/">Apply now</a>
          </button>
        </div>
      </div>
    </div>
  );
}
