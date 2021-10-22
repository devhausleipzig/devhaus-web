import React from "react";
import PageHeader from "components/PageHeader";
import Profile from "components/about/Profile";
import "./About.scss";
import taylorImage from "images/profiles/taylor.png";
import gabrielImage from "images/profiles/gabe.png";
import franzImage from "images/profiles/franz.png";
import danImage from "images/profiles/dan.png";
import valImage from "images/profiles/val.png";
import hannahImage from "images/profiles/hannah.png";
import svenImage from "images/profiles/sven.png";
import veraImage from "images/profiles/vera.png";
import moritzImage from "images/profiles/moritz.png";
import felixImage from "images/profiles/felix.png";

export default function About() {
  const content = (
    <div>
      <p>
        We believe software development is one of the most fulfilling and
        empowering creative disciplines in today's world. At the same time,
        mastering its many facets is a demanding, life-long challenge. A
        challenge, we believe, that's best tackled with the support of a strong
        community, where members learn from each other and join forces on their
        personal and professional journeys. What started as a code camp to teach
        beginners how to program and find a career in software development, is
        quickly growing into such a community.
      </p>
      <p>
        Whether it's in classes and workshops in the Academy, in personal or
        professional projects in the Studio, or by participating in our events;
        the members of the Devhaus Leipzig strive to create a vibrant
        environment in which everyone finds support to grow their technical and
        creative abilities.
      </p>
    </div>
  );

  return (
    <div className="about content navbar-padding">
      <PageHeader title="About Devhaus Leipzig" content={content}></PageHeader>
      <section>
        {/* <h4 className="secondary-title button-text">Team</h4> */}
        <div className="grid-narrow">
          <Profile
            name="Taylor Harvey"
            role="CEO & Co-Founder"
            image={taylorImage}
          />
          <Profile
            name="Gabriel Heinrich"
            role="Co-Founder"
            image={gabrielImage}
          />
          <Profile
            name="Franz-Josef Wollang"
            role="Instructor & Co-Founder"
            image={franzImage}
          />
          <Profile
            name="Valeria Koriatchenko"
            role="Instructor"
            image={valImage}
          />
          <Profile name="Dan McAtee" role="Instructor" image={danImage} />
          <Profile name="Sven Laschinski" role="Instructor" image={svenImage} />
          <Profile name="Hannah Mühlfeldner" role="In-house Photographer/Videographer" image={hannahImage} />
          <Profile name="Vera Scheunert" role="Resident" image={veraImage} />
          <Profile name="Moritz Piehl" role="Resident" image={moritzImage} />
          <Profile name="Felix Wippich" role="Resident" image={felixImage} />
        </div>
      </section>
    </div>
  );
}
