import React from "react";
import PageHeader from "components/PageHeader";
import Profile from "components/about/Profile";
import "./About.scss";
import taylorImage from "images/biotaylor.jpg";
import gabrielImage from "images/biogabe.jpg";
import franzImage from "images/biofranz.jpg";
import danImage from "images/biodan.jpg";

export default function About() {
  const content = (
    <div>
      <p>
        Devhaus Leipzig grew out of the need for a place where developers could
        learn and contribute to meaningful projects. Our mission is to support
        the members of our community on both an intellectual and an emotional
        level, enabling them to reach their creative goals.
      </p>
      <p>
        Aspiring developers can take part in our Academy to learn the
        fundamentals of software development. Once graduated, they join our
        community of residents in the Studio, where their personal and
        professional projects find the support they need to thrive.
      </p>
    </div>
  );

  return (
    <div className="about content navbar-padding">
      <PageHeader title="About Devhaus Leipzig" content={content}></PageHeader>
      <section>
        <h4 className="secondary-title button-text">Residents</h4>
        <div className="grid-narrow">
          <Profile name="Taylor Harvey" role="Co-Founder" image={taylorImage} />
          <Profile
            name="Gabriel Heinrich"
            role="Co-Founder"
            image={gabrielImage}
          />
          <Profile
            name="Franz-Josef Wollang"
            role="Co-Founder"
            image={franzImage}
          />
          <Profile
            name="Valeria Koriatchenko"
            role="Instructor"
            image={danImage}
          />
          <Profile name="Alexandra" role="Project Manager" image={danImage} />
          <Profile name="Jan-Hendrik" role="Back Office" image={danImage} />
          <Profile
            name="Matthew O'Brien"
            role="Resident & Marketing"
            image={danImage}
          />
          <Profile
            name="Pauline"
            role="Resident & Photography"
            image={danImage}
          />
          <Profile name="Jannik" role="Instructor UX Design" image={danImage} />
          <Profile name="Dan McAtee" role="Instructor" image={danImage} />

          <Profile name="Sven Latschinski" role="Instructor" image={danImage} />
          <Profile name="Vera Scheunert" role="Resident" image={danImage} />
          <Profile name="Moritz" role="Resident" image={danImage} />
          <Profile name="Felix" role="Resident" image={danImage} />
          <Profile name="Sven Deichfuss" role="Resident" image={danImage} />
          <Profile name="Simon Johanning" role="Friend" image={danImage} />
          <Profile name="Sappho" role="Friend" image={danImage} />
          <Profile name="Josef" role="Friend" image={danImage} />
          <Profile name="Kaab" role="Resident" image={danImage} />
          <Profile name="Björn" role="Resident" image={danImage} />
          <Profile name="Moritz" role="Resident" image={danImage} />
          <Profile name="Lena" role="Resident" image={danImage} />
          <Profile name="Marianna" role="Resident" image={danImage} />
          <Profile name="Nick" role="Resident" image={danImage} />
          <Profile name="Bea" role="Resident" image={danImage} />
          <Profile name="Annahita" role="Resident" image={danImage} />
          <Profile name="Iko" role="Resident" image={danImage} />
          <Profile name="Simona" role="Resident" image={danImage} />
          <Profile name="Gabriela" role="Resident" image={danImage} />
          <Profile name="Inga" role="Resident" image={danImage} />
          <Profile name="Tom" role="Resident" image={danImage} />
          <Profile name="Christina" role="Resident" image={danImage} />
          <Profile name="Lotte" role="Resident" image={danImage} />
          <Profile name="Wolfgang" role="Resident" image={danImage} />
          <Profile name="Michaela" role="Resident" image={danImage} />
          <Profile name="Dorian" role="Resident" image={danImage} />
          <Profile name="Chaz" role="Resident" image={danImage} />
          <Profile name="Daniel" role="Resident" image={danImage} />
          <Profile name="Franziska" role="Resident" image={danImage} />
          <Profile name="Issah" role="Resident" image={danImage} />
          <Profile name="Moe" role="Resident" image={danImage} />
          <Profile name="Mathias" role="Resident" image={danImage} />
        </div>
      </section>
    </div>
  );
}
