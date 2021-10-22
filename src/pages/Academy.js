import React from "react";
import PageHeader from "components/PageHeader";
import { DevhausLine } from "components/HorizontalLine";
import Picture from "components/Picture";
import "./Academy.scss";

import franzImage from "images/profiles/franz.png";
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
import eexLogo from "images/logos/eex.png";
import micoboLogo from "images/logos/micobo.png";
import infaiLogo from "images/logos/infai.jpg";

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
    logo: eexLogo,
    name: "eex",
  },
  {
    logo: micoboLogo,
    name: "micobo",
  },
  {
    logo: sciendisLogo,
    name: "sciendis",
  },
  {
    logo: spreadshirtLogo,
    name: "spreadshirt",
  },
  {
    logo: infaiLogo,
    name: "InfAI",
  }
];

export default function Academy() {
  return (
    <div className="academy navbar-padding content">
      <PageHeader
        title="Academy"
        description="The Devhaus Academy is more than just a classroom; it’s an ongoing
          support system, the sole purpose of which is to help you become the best programmer and designer you can be."
        image={titleImage}
        width={1536}
        height={1024}
        alt="Graduates of Code Camp #1"
        color="blue"
      ></PageHeader>
      <section>
        <div className="center content-narrow">
          <h3 className="secondary-title">Devhaus Academy</h3>

          <h2>
            Code &amp; Design Camp
            <div class="flex-center" style={{ marginTop: "0.5rem" }}>
              <DevhausLine color="devhaus" numSegments={5} width={64} />
            </div>
          </h2>
        </div>
        <div className="specs">
          <div className="short-specs button-text">
            <span>24 Weeks</span>
            <span>Mo - Fr</span>
            <span>9:00 - 17:00</span>
            <span>English</span>
            <span>Up to 12 Students</span>
            <span>Hybrid (remote or in-person)</span>
          </div>
          <div className="text-2 next-camp">
            The next camp is running from <strong>January 13th, 2022</strong>{" "}
            until <strong>July 1st, 2021</strong>
          </div>
          <div>
            <span>Applications open November 10</span>
            {/*
            <a
              href="https://devhausleipzig.typeform.com/to/nuEZxpkv"
              t
              arget="_blank"
              rel="noreferrer"
            >
              <button className="plain button-text">Apply now</button>
            </a>
            */}
          </div>
        </div>
        <div className="intro content-narrow">
          <p>
            Our Code &amp; Design Camp is an intensive full-time training program, developed to equip people from various professional backgrounds with the necessary skills and understanding to join the world of digital product development.
          </p>
          <p>
            For 2 years, we supported 13-week camps and found that despite over 85% of our graduates working in technical jobs after graduating, many Jr. developer jobs require a deeper skill set and many students needed months of additional self-training to feel competitive.
          </p>
          <p>
          Our 24-week course is designed to provide all students with the curriculum, environment, and support they need to be prepared for a Jr. Frontend developer position and the foundation to grow into other technical roles.
          </p>
        </div>
        <div className="skills content-narrow">
          <h2 className="button-text text-1">Key Features</h2>

          <div className="skill">
            <h3>2 Weeks of Agile and Professional Development Workshops</h3>
          </div>
          <div className="skill">
            <h3>4+ Weeks of UI/UX and Product Design Curriculum</h3>
          </div>
          <div className="skill">
            <h3>4 Weeks of Backend and DevOps Curriculum</h3>
          </div>
          <div className="skill">
            <h3>6 Weeks of Portfolio Project Work</h3>
          </div>
          <div className="skill">
            <h3>12 One-on-One Sessions to support technical, career, and personal development</h3>
          </div>
          <div className="skill">
            <h3>3 Professionally Designed Hackathons featuring hiring companies</h3>
          </div>
          <div className="skill">
            <h3>2 Days of Career Development Workshops with hiring companies</h3>
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
              developers understand programming as a tool to solve problems,
              develop skills, and build knowledge outside of coding to expand
              the range of problems they can tackle. They understand and
              appreciate all aspects of creating a software, and are able to
              constantly evaluate how their work best contributes to the
              overarching problem that the software they are building is trying
              to solve.
            </p>
          </div>
          <div>
            <h3>Self-Regulated Learning System</h3>
            <p>
              Experts are expert learners. Our primary goal is thus, to teach
              our students an effective, self-regulated learning system that
              will serve them for the rest of their lives. By using a simple
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
              As with any skill that's worthwhile, software development and,
              programming more specifically, take consistent practice to master.
              Our curriculum has a pronounced focus on repetition that allows
              students to achieve confidence within a relatively short
              timeframe. The strategy is to build muscle memory around
              fundamental mechanics in order to free up headspace for learning
              advanced skills and focusing on higher level design decisions.
            </p>
          </div>
          <div>
            <h3>Challenging Creative Projects</h3>
            <p>
              Software Development is an intellectually and emotionally
              demanding discipline. The most reliable way to create the
              motivation to withstand these difficulties, and continually expand
              one's knowledge, is by working on exciting, personal creative
              projects. No level of discipline trumps the energy that's
              generated when one becomes excited about a creative idea. We
              encourage students to take on such challenges, even if they seem
              slightly outside their current reach, and help them along the way
              to complete the projects they start.
            </p>
          </div>
          <div>
            <h3>Mentorship Program</h3>
            <p>
              We believe the relationship to a mentor is key to sustain one's
              development past the intermediate state in any discipline. Our
              goal is to facilitate such bonds between the students in the
              Academy and members of our community. In our mentorship program,
              we engage students on projects in the Studio and connect them to
              mentors that can support them. We hope to help every graduate
              build a sustained relationship to a mentor, who can guide and
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
              <Picture
                src={franzImage}
                alt="Franz"
                width={348}
                height={348}
              ></Picture>
            </div>
            <h3>Franz</h3>
          </div>
          <div className="instructor">
            <div className="image-container">
              <Picture
                src={valImage}
                alt="Valeria"
                width={348}
                height={348}
              ></Picture>
            </div>
            <h3>Valeria</h3>
          </div>
          <div className="instructor">
            <div className="image-container">
              <Picture
                src={danImage}
                alt="Dan"
                width={348}
                height={348}
              ></Picture>
            </div>
            <h3>Dan</h3>
          </div>
          <div className="instructor">
            <div className="image-container">
              <Picture
                src={svenImage}
                alt="Sven"
                width={348}
                height={348}
              ></Picture>
            </div>
            <h3>Sven</h3>
          </div>
        </div>
        <div className="classroom-gallery">
          <Picture
            src={pic1}
            alt="Classroom"
            width={752}
            height={500}
          ></Picture>
          <Picture
            src={pic2}
            alt="Camp 1 Classroom"
            width={752}
            height={500}
          ></Picture>
          <Picture
            src={pic3}
            alt="Val and Christina coding"
            width={752}
            height={500}
          ></Picture>
          <Picture
            src={pic4}
            alt="Code Camp Graduates"
            width={752}
            height={500}
          ></Picture>
        </div>
      </section>
      <section className="learning-path content-narrow">
        <h2>Learning Path</h2>
        <div className="path">
          <div className="path-mark">1-2</div>
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
              We'll also familiarize ourselves with tools of the trade that
              software developers use on a daily basis and practice using them
              by creating a shared recipe collection.
            </p>
          </div>
          <div className="path-mark">3-4</div>
          <h3>Programming in Typescript</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              Although programming is only one of many skills involved in software development, it is the key to its power. Starting from "Hello World", we'll build a collection of small programs with increasing complexity and, thereby, learn not only the syntax and grammar of the Typescript Programming Language, but also the principles and techniques that are common to all programming languages.
            </p>
          </div>
          <div className="path-mark">5-6</div>
          <h3>One Page Love</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              Our next goal is to get familiar with the technologies that run the web and build basic skills in User Interface Design. We’ll start off with a practical introduction to the Human Centered Design process. We’ll go through one iteration of the design steps —starting from research all the way to prototyping and testing. We'll continue with analyzing and carefully re-constructing multiple websites built for different use-cases. We’ll dive into design systems, color theory, and typography. At the end of the module, everyone will design and build a personal website project that may become the first item in their portfolio. The projects will be documented via building out their Information Architecture.
            </p>
          </div>
          <div className="path-mark">7-8</div>
          <h3>Design Responsively</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              “Mobile first” is a popular approach for modern products and services. In this phase of the curriculum, we’ll teach you how to design webpages that comfortably fit any device as well as some fundamental design practices, such as navigation design, mobile stacking, and responsive design. Then we’ll apply those learnings to your personal website.
            </p>
          </div>
          <div className="path-mark">9</div>
          <h3>Review Week + 1st Hackathon</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              It's time to refresh and reflect on the material learned so far.
              During this week, there will be no new material. Only
              individual check-in sessions, opportunities to solidify your
              skills through focused practice, and a hackathon to boost your confidence in your fledgling skills.
            </p>
          </div>
          <div className="path-mark">10-15</div>
          <h3>Full-Stack Web Application</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              In the beginning of the second half of the course, we are going to design and build a more complex web application. After walking together through a product design process, we'll prototype and build the user interface. This is an opportunity to take a close look at all components of a professional software development process in full detail and practice them in a controlled environment.
            </p>
          </div>
          <div className="path-mark">16-17</div>
          <h3>Backend Engineering</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              To round off the skillset, we'll build and deploy the backend of our web application. This is the most challenging part of the course, as it normally requires a long time to master the complexities of a production level backend, including authentication, database design &amp; continuous deployment. However, with a lot of focus, carefully designed instruction, and a bit of cheating you'll become able to build a full stack web application from start to finish all by yourself.
            </p>
          </div>
          <div className="path-mark">18-19</div>
          <h3>Professional Frameworks + Specialization</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              Our final weeks of formal curriculum walk students through professional development processes and provide basic starting tracks for interested students to dive deeper into specializations like Backend development & DevOps, Data Science, UI/UX Design, and Agile Management. We’ll also dive into our second hackathon to kick off the final project.
            </p>
          </div>
          <div className="path-mark">18-24</div>
          <h3>Final Project + 2nd Hackathon</h3>
          <div className="path-line">
            <div className="line"></div>
          </div>
          <div className="path-content">
            <p>
              After 18 weeks of intense training, you'll have all you need to team up with your fellow campers and start building your own projects. You'll get extra support from mentors in our community who can provide technical support and also help you explore options for life after the course. The final week will consist of a two day career development program and our last hackathon to wrap up final projects.
            </p>
          </div>
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
          Tuition for the full-time 24-Week Code Camp program is{" "}
          <strong>€15.224 plus VAT</strong>
        </div>
        <p>
          Our goal is to make the Code Camp as accessible as possible for qualified candidates.
        </p>
        <p>
        We provide a range of options to help you finance your education, including payment plans, government programs, loan partners, and scholarships. Make sure to reach out to us so we can evaluate the financing options that fit your specific situation.
        </p>
        <p>
          If you are eligible for educational support through the Jobcenter
          and would like to pursue financing your seat via a Bildungsgutschein,
          contact us at <strong><a href="mailto:info@devhausleipzig.de">info@devhausleipzig.de</a> </strong>
          with any questions.
        </p>
        <a
          href="https://calendly.com/devhaus-leipzig/devhaus-1-on-1?month=2021-02"
          target="_blank"
          rel="noreferrer"
        >
          <button className="plain button-text">Schedule a call or chat</button>
        </a>
      </section>
      <section className="application content-narrow">
        <h2>Application Process</h2>
        <div className="button-text text-2">Step 1</div>
        <p>
          Online form for us to get an idea of how you’ve spent your time until
          now and your motivation for joining Devhaus.
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
        <span class="flex-center" style={{ marginTop: "0.5rem" }}><strong>Applications open November 10</strong></span>
        {/*
        <a
          href="https://devhausleipzig.typeform.com/to/nuEZxpkv"
          target="_blank"
          rel="noreferrer"
        >
          <button className="plain button-text">Apply now</button>
        </a>
        */}
      </section>
    </div>
  );
}
