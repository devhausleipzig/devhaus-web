import React from "react";
import HeroVideo from "components/home/HeroVideo";
import "./Home.scss";
import { DevhausLine } from "components/HorizontalLine";
import { Link } from "react-router-dom";
import Picture from "components/Picture";

import academyImage from "images/home/academy.jpg";
import studioImage from "images/home/chat.jpg";
import eventsImage from "images/home/ccl-1-kickoff.jpg";
import storiesImage from "images/home/fire.jpg";

export default function Home() {
  const sectionLineWidth = 48;
  return (
    <div className="home">
      <header>
        <div className="content hero-container">
          <HeroVideo></HeroVideo>
        </div>
      </header>

      <div className="content">
        <section className="manifesto">
          <div className="intro content-narrow">
            <h1 className="secondary-title">Devhaus Leipzig</h1>
            <h2>
              A learning community for programmers
              <DevhausLine color="devhaus" numSegments={5} width={64} />
            </h2>

            <p>
              Devhaus Leipzig grew out of the need for a place where developers
              could learn and contribute to meaningful projects. Our mission is
              to support the members of our community to reach their creative
              and professional goals.
            </p>
            <p>
              Aspiring developers can take part in our Academy to learn the
              fundamentals of software development. Once graduated, they join
              our community of residents in the Studio, where their personal and
              professional projects find the support they need to thrive.
            </p>

            <div className="center">
              <div className="flex-center mt-4">
                <DevhausLine color="devhaus" numSegments={5} width={128} />
              </div>
            </div>
          </div>

          <div className="sitemap content-narrow">
            <div className="link">
              <Link to="/academy">
                <div>
                  <h2 className="secondary-title">Academy</h2>
                  <h3>
                    Take the first steps to becoming a software developer
                    <DevhausLine
                      color="blue"
                      numSegments={5}
                      width={sectionLineWidth}
                    />
                  </h3>
                </div>
                <Picture
                  src={academyImage}
                  alt="Academy"
                  width={1152}
                  height={763}
                />
              </Link>
            </div>
            <div className="link">
              <Link to="/studio">
                <h2 className="secondary-title">Studio</h2>
                <h3>
                  Get involved in creative software projects or launch your own
                  <DevhausLine
                    color="green"
                    numSegments={5}
                    width={sectionLineWidth}
                  />
                </h3>
                <Picture
                  src={studioImage}
                  alt="Studio"
                  width={1152}
                  height={763}
                />
              </Link>
            </div>
            <div className="link">
              <Link to="/events">
                <h2 className="secondary-title">Events</h2>
                <h3>
                  Connect with the Devhaus community
                  <DevhausLine
                    color="yellow"
                    numSegments={5}
                    width={sectionLineWidth}
                  />
                </h3>
                <Picture
                  src={eventsImage}
                  alt="Events"
                  width={1152}
                  height={763}
                />
              </Link>
            </div>
            <div className="link">
              <Link to="/stories">
                <h2 className="secondary-title">Stories</h2>
                <h3>
                  Keep up with what’s going down at Devhaus Leipzig
                  <DevhausLine
                    color="red"
                    numSegments={5}
                    width={sectionLineWidth}
                  />
                </h3>
                <Picture
                  src={storiesImage}
                  alt="Stories"
                  width={1152}
                  height={763}
                />
              </Link>
            </div>

            <div>
              <div className="center about">
                <Link to="/about">
                  <h2 className="secondary-title">Who we are</h2>
                  <h3>
                    About Devhaus Leipzig
                    <div className="flex-center">
                      <DevhausLine color="devhaus" numSegments={5} width={64} />
                    </div>
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
