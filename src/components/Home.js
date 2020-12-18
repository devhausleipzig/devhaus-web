import React from "react";

export default function Home() {
  return (
    <div>
      <header className="hero">
        <div className="hero-image">
          <img src="/graduates1.jpg" alt="graduates1" />
        </div>{" "}
        <div className="hero-title">
          <h1>
            DEV
            <br />
            HAUS
            <br />
            LEIPZIG
          </h1>
        </div>
      </header>

      <section className="page-section">
        <div className="content">
          <h2>Devhaus Manifesto</h2>
          <h3>Academy</h3>
          <h3>Labs</h3>
          <h3>Studio</h3>
          <h3>Ventures</h3>
        </div>
      </section>
      <section className="page-section">
        <div className="content">
          <h2>fillip</h2>
        </div>
      </section>
      <section className="page-section">
        <div className="content">
          <h2>Academy</h2>
        </div>
      </section>
      <section className="page-section">
        <div className="content">
          <h2>edox Hackathon</h2>
        </div>
      </section>
      <section className="page-section">
        <div className="content">
          <h2>Community Videos</h2>
        </div>
      </section>
      <section className="page-section">
        <div className="content">
          <h2>Browse through all projects</h2>
        </div>
      </section>
    </div>
  );
}
