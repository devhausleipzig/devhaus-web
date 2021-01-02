import React from "react";

function TextSection({ title, subtitle }) {
  return (
    <div className="text-section">
      <div className="title-section">
        <div className="sticky-title">
          <h2>{title}</h2>
          <div className="date-subtitle">{subtitle}</div>
        </div>
      </div>
      <div className="content-section">
        <p>
          Pentagram Design, Inc. (“Pentagram”) provides this website,
          Pentagram.com, and a newsletter currently titled, “Designed by
          Pentagram” and delivered by email to subscribers on a monthly basis
          (the “Newsletter”) (together, the website and the Newsletter may be
          referred to as the “Website”) for informational purposes.
        </p>
        <p>
          By accessing the website, you accept these Terms and Conditions of use
          and Privacy Policy, as may be amended from time to time, without
          limitation or qualification. If you do not wish to be bound by these
          Terms and Conditions, please refrain from further use of the website.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <header className="hero">
        <div className="hero-image">
          <img src="/graduates1.jpg" alt="mobile-hero"></img>
        </div>
        <div className="hero-video">
          {/* <video
            playsInline
            autoPlay
            muted
            loop
            poster="placeholder.jpg"
            id="bgvideo"
            width="100%"
            height="100%"
          >
            <source src="/trailer.mp4" type="video/mp4" />
          </video> */}
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

      <section className="manifesto page-section">
        <div className="content">
          {TextSection({ title: "Devhaus Manifesto", subtitle: "Our Mission" })}
          {/* <h3>Academy</h3>
          <h3>Labs</h3>
          <h3>Studio</h3>
          <h3>Ventures</h3> */}
        </div>
      </section>
      <section className="page-section">
        <div className="content">
          {TextSection({
            title: "Community",
            subtitle: "Collaborating together",
          })}
        </div>
      </section>
      <section className="page-section">
        <div className="content">
          {TextSection({ title: "Academy", subtitle: "Code Camp Leipzig" })}
        </div>
      </section>
      <section className="page-section">
        <div className="content">
          {TextSection({
            title: "filip",
            subtitle: "Software for communication",
          })}
        </div>
      </section>
      <section className="page-section">
        <div className="content">
          {TextSection({
            title: "edox",
            subtitle: "Revamping a client's online image",
          })}
        </div>
      </section>

      <div className="browse content">
        <h2>Learn more about Devhaus...</h2>
        <div className="learn-more">
          <div className="learn">
            <a href="/work">
              <img
                src="https://miro.medium.com/max/957/1*o65x3tjhfaxxEQIc60nGpA.jpeg"
                alt=""
              ></img>
              <button>Browse through all projects</button>
            </a>
          </div>
          <div className="learn">
            <a href="/contact">
              <img
                src="https://enterprisersproject.com/sites/default/files/styles/620x350/public/cio_remote_work_4.png?itok=Y0NFGBp2"
                alt=""
              ></img>
              <button>Get in touch with us</button>
            </a>
          </div>
          <div className="learn">
            <a href="/about">
              <img
                src="https://vivaldi.com/wp-content/uploads/Private-apps-remote-work-980x551.png"
                alt=""
              ></img>
              <button>Learn more about our team</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
