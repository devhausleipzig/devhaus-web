import React from "react";
import PageHeader from "components/PageHeader";
import "./Academy.scss";

import gabrielImage from "images/profiles/gabe.png";
import valImage from "images/profiles/val.png";
import danImage from "images/profiles/dan.png";
import svenImage from "images/profiles/sven.png";

import pic1 from "images/academy/dan-classroom.jpg";
import titleImage from "images/academy/academy.jpg";
import pic2 from "images/academy/gabe-val-prisma.jpg";
import pic3 from "images/academy/val-christina.jpg";
import pic4 from "images/academy/class-1.jpg";

import actaportLogo from "images/logos/actaport.png";
import check24Logo from "images/logos/check24-logo.png";
import compl3teLogo from "images/logos/compl3te-logo.png";
import devhausLogo from "images/devhaus-logo.svg";
import ecommeleonLogo from "images/logos/ecommeleon-logo.png";
import edoxLogo from "images/logos/edox-logo.png";
import idivLogo from "images/logos/idiv.png";
import prismaLogo from "images/logos/prisma-logo.png";
import sciendisLogo from "images/logos/sciendis.png";
import spreadshirtLogo from "images/logos/spreadshirt-logo.png";

const logos = [
  {
    logo: actaportLogo,
    name: "actaport",
  },
  {
    logo: check24Logo,
    name: "check24",
  },
  {
    logo: compl3teLogo,
    name: "compl3te",
  },
  {
    logo: devhausLogo,
    name: "Devhaus",
  },
  {
    logo: ecommeleonLogo,
    name: "ecommeleon",
  },
  {
    logo: edoxLogo,
    name: "e-dox",
  },
  {
    logo: idivLogo,
    name: "idiv",
  },
  {
    logo: prismaLogo,
    name: "Prisma",
  },
  {
    logo: sciendisLogo,
    name: "sciendis",
  },
  {
    logo: spreadshirtLogo,
    name: "spreadshirt",
  },
];

export default function Academy() {
  return (
    <div className="academy navbar-padding content">
      <PageHeader
        title="Academy"
        description="The Devhaus Academy is more than just a classroom; it’s an ongoing
          support system, the sole purpose of which is to help you become the best programmer you can be."
        image={titleImage}
        alt="Graduates of Code Camp #1"
        color="blue"
      ></PageHeader>
      <section>
        <div className="intro content-narrow">
          <h2>Code Camp Leipzig</h2>
          <p>
            The Code Camp Leipzig is our intensive full-time training program,
            designed to equip people from various professional backgrounds with
            the necessary skills and understanding to join the software
            development world.
          </p>
          <p>
            While the skillset taught in the Code Camp is in itself sufficent as
            the qualifaction for a Frontend Web Developer role, the program is
            tailored to build foundations that open the door to a wide array of
            different specializations within software development.
          </p>
        </div>
        <div className="skills content-narrow">
          <h2 className="button-text text-1">Curriculum Overview</h2>
          <div className="skill">
            <h3>Software Development Fundamentals</h3>
          </div>
          <div className="skill">
            <h3>Programming in Typescript</h3>
          </div>
          <div className="skill">
            <h3>Full Stack Web Development</h3>
          </div>
          <div className="skill">
            <h3>Graphic &amp; UI Design</h3>
          </div>
          <div className="skill">
            <h3>Product Design</h3>
          </div>
          <div className="skill">
            <h3>Team Workflows &amp; Communication</h3>
          </div>
        </div>
        <div className="specs">
          <div className="short-specs button-text">
            <span>13 Weeks</span>
            <span>Mo - Fr</span>
            <span>9:00 - 17:00</span>
            <span>English</span>
            <span>Up to 12 Students</span>
            <span>In Leipzig at Floßplatz 6</span>
          </div>
          <div className="text-3 next-camp">
            The next Code Camp is starting on <strong>March 15th</strong>
          </div>
          <div className="corona-announcment">
            Due to the Corona pandemic, the spring camp 2021 will take place
            remotely
          </div>
        </div>
      </section>

      <section className="approach">
        <h2>Our Approach</h2>
        <div className="approaches">
          <div>
            <h3>Holistic Software Developers</h3>
            <p>
              Software Developers are not code monkeys. We believe the best
              developers understand programming as a tool to solve problems and
              develop skills and knowledge outside of coding to expand the range
              of problems they can tackle. They understand and appreciate all
              aspects of creating a software and are able to constantly evaluate
              how their work best contributes to the overarching problem the
              software they are building is trying to solve.
            </p>
          </div>
          <div>
            <h3>Self-Regulated Learning System</h3>
            <p>
              Experts are expert learners. Our primary goal is thus to teach our
              students an effective self-regulated learning system that will
              serve them for the rest of their lives. By using a simple
              journaling system that promotes the most effective learning
              strategies every day during the camp, we are able to build up
              powerful routines that are also designed to work for self directed
              learning after the camp.
            </p>
          </div>
          <div>
            <h3>Evidence Informed Teaching</h3>
            <div>
              We rely on findings from the learning sciences to inform our
              teaching methodologies and combine these with our practice and
              intuition to create powerful and adaptive learning experiences.
              The most prevalent findings we base our methodology on are:
            </div>
            <ul>
              <li>
                Rosenshine principles of effective teaching using worked
                examples of authentic tasks and gradual fading towards
                independent practice
              </li>
              <li>
                Retrieval practice, utilizing both spacing and interleaving
              </li>
              <li>
                Feedback-driven metacognition to develop self-regulated and
                directed learning
              </li>
            </ul>
          </div>
          <div>
            <h3>Practice, Practice, Practice &amp; Repeat</h3>
            <p>
              As with any skill that's worthwhile, software development and
              programming more specifically take a lot of consistent practice to
              master. Our curriculum has a pronounced focus on repetition to
              allow students to achieve confidence within a relatively short
              timeframe. The strategy is to build muscle memory around
              fundamental mechanics in order to focus on higher level design
              decisions as well as freeing up headspace to learn the next skill.
            </p>
          </div>
          <div>
            <h3>Challenging Creative Projects</h3>
            <p>
              Software Development is an intellectually and emotionally
              highly-demanding discipline. The most reliable way to create
              motivation to withstand these difficulties and continually expand
              one's knowledge is by working on exciting personal creative
              projects. No level of discipline trumps the energy that's
              generated when one becomes excited about a creative idea. We
              encourage students to take on such challenges even if they seem
              slightly outside their current reach and help them along the way
              to complete the creative projects they start.
            </p>
          </div>
          <div>
            <h3>Mentorship Program</h3>
            <p>
              We believe the relationship to a mentor is key to sustain one's
              development past the intermediate state in any discipline. Our
              goal is to faciliate such bonds between the students in the
              Academy and members of our community. In our mentorship program we
              engage students in projects in the Studio and connect them to
              mentors that can support them. We hope to help every graudate
              build a sustained relationship to a mentor, that can guide and
              support them on the next steps in their professional development.
            </p>
          </div>
        </div>
      </section>
      <section className="instructors">
        <h2>Meet the Instructors</h2>
        <div className="instructor-grid">
          <div className="instructor">
            <div className="image-container">
              <img src={gabrielImage} alt="Gabriel"></img>
            </div>
            <h3>Gabriel</h3>
          </div>
          <div className="instructor">
            <div className="image-container">
              <img src={valImage} alt="Valeria"></img>
            </div>
            <h3>Valeria</h3>
          </div>
          <div className="instructor">
            <div className="image-container">
              <img src={danImage} alt="Dan"></img>
            </div>
            <h3>Dan</h3>
          </div>
          <div className="instructor">
            <div className="image-container">
              <img src={svenImage} alt="Sven"></img>
            </div>
            <h3>Sven</h3>
          </div>
        </div>
        <div className="classroom-gallery">
          <img src={pic1} alt="pic1"></img>
          <img src={pic2} alt="pic1"></img>
          <img src={pic3} alt="pic1"></img>
          <img src={pic4} alt="pic1"></img>
        </div>
      </section>
      <section className="learning-path content-narrow">
        <h2>Learning Path</h2>
        <div className="path">
          <div className="path-mark">1</div>
          <h3>Orientation &amp; Software Development Fundamentals</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              The course opens with a quick tour through the software
              development cosmos, starting from bits &amp; bytes, through
              computer hardware to an overview of the many branches of software
              applications.
              <br />
              We'll also familiarze ourselves with the tools of the trade that
              software developers use on a daily basis and practice using them
              as well by creating a shared recipe collection.
            </p>
          </div>
          <div className="path-mark">2-3</div>
          <h3>Programming in Typescript</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <p>
            Although programming is only one of many skills involved in software
            development, it's the key to its power. Starting from Hello World
            we'll build a collection of small programs with increasing
            complexity and thereby learn not only the syntax and grammar of the
            Typescript Programming Language, but also the principles and
            techniques that are common to all programming languages.
          </p>
          <div className="path-mark">4-6</div>
          <h3>One Page Love</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <p>
            Our next goal is to get familiar with the technologies that run the
            web and build basic skills in User Interface Design. We'll do so by
            analyzing and carefully reconstruct multiple websites build for
            different use cases. At the end of the module everyone will design
            and build a personal website project, that may become the first item
            in their portfolio.
          </p>
          <div className="path-mark">7</div>
          <h3>Practice Week</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <p>
            It's time to refresh and reflect on the material learned so far. In
            this week, there are no classes and no new material. Only individual
            check-in sessions and the opportunity to solidify your skills
            through focused practice.
          </p>
          <div className="path-mark">8-9</div>
          <h3>Full Stack Web Application</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <p>
            In the second half of the course we are going to design and build a
            more complex web application. After walking together through a
            product design process we'll prototype and build the user interface.
            We'll use this chance to take a close look at all components of a
            professional software development process in full detail and
            practice them in a controlled environment.
          </p>
          <div className="path-mark">10-11</div>
          <h3>Backend Engineering</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <p>
            To round off the skillset we'll build and deploy the backend of our
            web application. This is the most challenging part of the course, as
            it normally requires a long time to master the complexities of a
            production level backend including authentication, database design
            &amp; continuous deployment. But with a lot of focus, carefully
            designed instruction and a bit of cheating you'll become able to
            build a full stack web application from start to finish all by
            yourself.
          </p>
          <div className="path-mark">12-13</div>
          <h3>Final Project</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <p>
            After 11 Weeks of intense training you have all you need to team up
            with your fellow campers and start building your own projects.
            You'll get extra support from mentors in our community who can also
            help you figure out in which direction you want to specialize and
            continue your development after the camp.
          </p>
          <div className="path-mark">FINISH</div>
          <h3>Graduation</h3>
        </div>
      </section>
      <section className="outcomes">
        <h2>Where our graduates have been hired</h2>
        <div className="company-logos">
          {logos.map(({ logo, name }) => {
            return (
              <div key={name} className="company-logo">
                <img src={logo} alt={name}></img>
              </div>
            );
          })}
        </div>
      </section>
      <section className="financing content-narrow">
        <h2>Tuition &amp; Financing</h2>
        <p>
          Our goal is to make the Code Camp as accessible as possible and we
          strive to keep student costs minimal.
        </p>
        <div className="price">
          Still the tuition for the full-time 13-Week Code Camp program is{" "}
          <strong>&euro; 4.800</strong>
        </div>
        <p>
          We provide a range of options to help you finance your education,
          including payment plans, government programs, loan partners and
          scholarships. Make sure to reach out to us, so we can evaluate the
          financing options that fit your specific situation.
        </p>
        <a
          href="https://calendly.com/devhaus-leipzig/devhaus-1-on-1?month=2021-02"
          target="_blank"
          rel="noreferrer"
        >
          <button className="plain button-text">Schedule a call</button>
        </a>
      </section>
      <section className="content-narrow">
        <h2>Application Process</h2>
        <div className="button-text text-2">Step 1</div>
        <p>
          Online form to get an idea of how you’ve spent your time until now and
          your motivation for joining Devhaus.
        </p>
        <div className="button-text text-2">Step 2</div>
        <p>
          Interview with two members of the Devhaus team to discuss your path
          and how Devhaus might play a role in your journey
        </p>
        <p>
          Our team makes decisions on applications as they are received. Meaning
          applicants can expect to get a decision on their application within 30
          days, regardless of when they apply.
        </p>
        <a
          href="https://codecampleipzig.typeform.com/to/nuEZxpkv"
          target="_blank"
          rel="noreferrer"
        >
          <button className="plain button-text">Apply now</button>
        </a>
      </section>
    </div>
  );
}
