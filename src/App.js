import "./App.css";
import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router-dom";

export const ScrollToTop = withRouter(function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {});
    return () => {
      unlisten();
    };
  });

  return null;
});

export function Home() {
  return (
    <div>
      <header className="hero">
        <div className="content">
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
        {/* <Footer></Footer> */}
      </section>
    </div>
  );
}

export function Academy() {
  return (
    <div className="content site-header navbar-padding">
      <h1>Academy</h1>
    </div>
  );
}

export function Work() {
  return (
    <div className="content">
      <h1 className="site-header navbar-padding">Work</h1>
      <div className="grid1">
        <div className="img1">
          <img
            src="https://devopedia.org/images/article/34/1195.1529045532.jpg"
            alt="img1"
          ></img>
        </div>
        <div className="img2">
          <img
            src="https://d35fo82fjcw0y8.cloudfront.net/2019/05/22093043/types-of-mobile-apps-native_incontent1-1024x786.png"
            alt="img2"
          ></img>
        </div>
        <div className="img3">
          <img
            src="https://readdle.com/img/blog/best-calendar-app-iphone-ipad.png?1594316892350"
            alt="img3"
          ></img>
        </div>
        <div class="cta1">
          <h2>e.dox</h2>
          <p>
            Introducing 212/SE, our most powerful and agile subwoofer, designed
            exclusively for larger systems and rooms to allow superior state of
            the art speakers to spring to full voice.
          </p>
        </div>
        <div class="cta2">
          <h2>fillip</h2>
          <p>
            Introducing 212/SE, our most powerful and agile subwoofer, designed
            exclusively for larger systems and rooms to allow superior state of
            the art speakers to spring to full voice.
          </p>
        </div>
        <div class="cta3">
          <h2>tbd</h2>
          <p>
            Introducing 212/SE, our most powerful and agile subwoofer, designed
            exclusively for larger systems and rooms to allow superior state of
            the art speakers to spring to full voice.
          </p>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <div className="about content">
      <div class="title">
        <h1 className="about site-header navbar-padding">About Us</h1>
        <div className="about-text">
          <p>
            Mollitia vero error corporis id quis odio nulla perferendis quas ea
            modi! Suscipit animi eius dolores libero. Tempora, sequi possimus.
            Inventore illo voluptates sapiente dolores ipsam sed, perferendis
            totam. Rerum obcaecati maiores qui mollitia similique, doloremque
            nobis perspiciatis aspernatur harum, recusandae distinctio
            reprehenderit possimus dolorem repudiandae numquam molestias. Atque
            sed voluptates voluptatum totam nesciunt id earum! Officia
            reprehenderit, aliquam facilis optio iure quia magni perferendis
            molestiae ipsam veniam vitae excepturi blanditiis libero, possimus
            odit maiores quae nisi labore ab quod ducimus consequatur nam! Nam
            quisquam, dolor saepe veniam laudantium repellat exercitationem
            suscipit inventore dolore deleniti quidem et tempora, iure mollitia.
          </p>
        </div>
      </div>
      <div className="about-grid">
        <div className="bio1">
          <img src="/biogabe.jpg" alt="biogabe"></img>
          <a href="https://www.linkedin.com/in/gabriel-heinrich-60147b187/">
            <p>Gabriel Heinrich, Co-founder</p>
          </a>
        </div>
        <div className="bio2">
          <img src="/biotaylor.jpg" alt="biotaylor"></img>
          <a href="https://www.linkedin.com/in/tharve/">
            <p>Taylor Harvey, Co-founder</p>
          </a>
        </div>
        <div className="bio3">
          <img src="/biofranz.jpg" alt="biofranz"></img>
          <p>Franz-Josef Wollang, Co-founder</p>
        </div>
        <div className="bio4">
          <img src="/biodan.jpg" alt="biodan"></img>
          <p>Dan Mcatee, Instructor</p>
        </div>
      </div>
    </div>
  );
}

export function News() {
  return (
    <div className="content site-header navbar-padding">
      <h1>News</h1>
    </div>
  );
}

export function Contact() {
  function changeImage(e) {
    e.target.setAttribute(
      "src",
      "https://anybee.com/storage/spaces/700x500_52ecbcaa10e16ef06cf3b9056394e2b0.jpg"
    );
    e.target.setAttribute("alt", "basislager2");
  }
  return (
    <div className="content contact">
      <div className="contact-info">
        <h1 className=" navbar-padding site-header">Contact Us</h1>
        <p>contact@devhaus.de</p>
        <p>+49 1512 1675615</p>
        <br></br>
        <p>Floßpl. 6</p>
        <p>04107 Leipzig</p>
        <br></br>
        <p className="directions">Get directions</p>
        <br></br>
        <p className="location-description">
          Devhaus is located within the Basislager Coworking space.
        </p>
        <br></br>
        <p className="location-description">
          Conveniently close to the University and city centre. Easily
          accessible by trams 10 or 11 from the Hauptbanhof.{" "}
        </p>
      </div>
      <div className="image-container">
        <img
          onClick={changeImage}
          id="contact-image"
          src="https://media.spacebase.com/media/cache/spaces/3691/basislager-4og-k2-1_1280.jpg"
          alt="basislager"
        ></img>
      </div>
    </div>
  );
}

export function Imprint() {
  return (
    <div className="content site-header navbar-padding">
      <h1>Imprint</h1>
    </div>
  );
}

function TextSection({ title }) {
  return (
    <div className="text-section">
      <div className="title-section">
        <div className="sticky-title">
          <h2>{title}</h2>
          <div className="date-subtitle">Updated on July 23, 2018</div>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, doloremque! Dolores maiores ipsum officia esse aliquam!
          A dicta dolore excepturi quos voluptatem ipsum consequatur voluptates
          odit perferendis pariatur dolorum, aliquid dolor possimus itaque quia
          explicabo, dignissimos rem ex. Est molestias iste laudantium
          voluptatum ut similique illo laborum, dolorem accusantium quos magni
          modi porro ad. A, ipsum? Nostrum, suscipit quasi! Delectus modi
          laboriosam officia in provident. Ab totam blanditiis quos provident ea
          perspiciatis, nobis, dolorum fugit rem, ipsa cum sed quod quis vitae
          exercitationem officiis adipisci doloribus saepe error dignissimos
          minus nihil ut possimus. Excepturi perferendis, numquam repellat
          exercitationem cupiditate architecto sequi mollitia inventore quos
          rerum nisi assumenda voluptatem delectus officia tempora ea? Alias
          enim, adipisci earum sit dolores quod tempora consequuntur voluptates
          nulla hic autem quae eligendi velit repellendus officia nihil numquam
          culpa magnam expedita nostrum perferendis voluptatem modi accusamus.
          Mollitia vero error corporis id quis odio nulla perferendis quas ea
          modi! Suscipit animi eius dolores libero. Tempora, sequi possimus.
          Inventore illo voluptates sapiente dolores ipsam sed, perferendis
          totam. Rerum obcaecati maiores qui mollitia similique, doloremque
          nobis perspiciatis aspernatur harum, recusandae distinctio
          reprehenderit possimus dolorem repudiandae numquam molestias. Atque
          sed voluptates voluptatum totam nesciunt id earum! Officia
          reprehenderit, aliquam facilis optio iure quia magni perferendis
          molestiae ipsam veniam vitae excepturi blanditiis libero, possimus
          odit maiores quae nisi labore ab quod ducimus consequatur nam! Nam
          quisquam, dolor saepe veniam laudantium repellat exercitationem
          suscipit inventore dolore deleniti quidem et tempora, iure mollitia.
          Corrupti aut reiciendis quasi repellat optio possimus aspernatur eius
          dicta quia ut maiores exercitationem molestias, esse tempora
          necessitatibus minima recusandae illo doloribus similique obcaecati.
          Praesentium distinctio mollitia, tempore ex vitae sint aperiam
          voluptatibus! Quod corrupti ab ullam facilis alias assumenda
          blanditiis a reprehenderit esse adipisci, quos quia quam ducimus quae
          quis enim sint expedita eos? Dignissimos accusamus commodi autem harum
          ex eius saepe adipisci id fugiat, sit officiis aut omnis incidunt quos
          consectetur magni esse sint suscipit impedit. Possimus cupiditate
          tempora quia illo neque similique laudantium dolor. Dolorem ea
          recusandae dolorum, facilis sit quaerat unde corporis, voluptatum
          inventore omnis saepe, quibusdam tempora in fuga obcaecati repellat
          tempore. Beatae molestias culpa ex, in sit corporis dolore ducimus,
          dolorum earum adipisci fuga voluptatum quo qui tenetur voluptates
          nihil repudiandae vel temporibus laudantium facere, deleniti possimus.
          Perspiciatis ad in optio eaque porro veniam fugiat voluptatibus dicta
          numquam officiis atque neque culpa dolorum dolor, voluptate eius
          deserunt error cupiditate velit tempore, nemo accusantium facere
          reprehenderit. Quidem eum sequi quia qui, beatae culpa nostrum
          eligendi commodi quod perspiciatis dolorem fugiat ratione placeat
          nobis odio numquam eius quam officiis. Nulla vel optio pariatur dicta
          maiores aspernatur qui ipsam ad asperiores. Laboriosam aut, optio
          doloremque doloribus quod ratione quam eum quos pariatur beatae natus
          officia dolores provident neque nostrum, eligendi veritatis nulla.
          Iusto autem iste sed aliquam ex impedit recusandae soluta earum non
          assumenda. Est sint, veniam dolor adipisci inventore aperiam, natus
          quibusdam repudiandae nostrum nemo asperiores mollitia voluptatem vel.
          Dolorem amet sit aut voluptatibus, perspiciatis mollitia alias, et
          accusantium nisi fuga qui delectus reiciendis maxime minus.
        </p>
      </div>
    </div>
  );
}

export function Privacy() {
  const [showPicture, setShowPicture] = useState(true);
  return (
    <div>
      <div
        onClick={() => {
          setShowPicture(!showPicture);
        }}
        className="site-header navbar-padding"
      >
        <div className="content site-heading">
          <h1>Privacy Policy</h1>
        </div>
        <div className="">
          {showPicture && (
            <img
              src="https://images.unsplash.com/photo-1579532537902-1e50099867b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
              alt=""
            ></img>
          )}
        </div>
      </div>
      <div className="content">
        {TextSection({ title: "Code of Conduct" })}
        <img
          className="image-section"
          src="https://images.unsplash.com/photo-1579532537902-1e50099867b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
          alt=""
        ></img>
        {TextSection({ title: "Terms of Use" })}
      </div>
    </div>
  );
}

export function NavMenu() {
  return (
    <nav>
      <Link to="/academy">Academy</Link>
      <Link to="/work">Work</Link>
      <Link to="/about">About</Link>
      <Link to="/news">News</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <header className={navbarClasses.join(" ")}>
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src="/devhaus-logo.svg" alt="Devhaus Leipzig"></img>
          </Link>
        </div>
        <NavMenu></NavMenu>
      </div>
    </header>
  );
}

function useOutsideAlerter(ref, cb) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb]);
}

function NewsletterForm() {
  const [isSubscribing, setIsSubscribing] = useState(false);

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    setIsSubscribing(false);
  };

  const formRef = useRef(null);
  useOutsideAlerter(formRef, () => {
    setIsSubscribing(false);
  });
  const inputRef = useRef(null);

  const [shouldFocus, setShouldFocus] = useState(false);
  useEffect(() => {
    if (inputRef.current && shouldFocus) {
      setShouldFocus(false);
      inputRef.current.focus();
    }
  }, [inputRef, shouldFocus]);

  if (isSubscribing) {
    return (
      <form ref={formRef} className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Add your email address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Subscribe
        </button>
      </form>
    );
  } else
    return (
      <button
        className="newsletter-subscribe"
        onClick={() => {
          setEmail("");
          setShouldFocus(true);
          setIsSubscribing(true);
        }}
      >
        Subscribe to our Newsletter
      </button>
    );
}

export function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="copyright-container">
          <div className="copyright">© 2020 Code Camp Leipzig</div>
          <div className="footer-links">
            <Link to="/imprint">Imprint</Link>
            <Link to="/privacy">Privacy</Link>
          </div>{" "}
        </div>
        <div className="newsletter">{NewsletterForm()}</div>
        <div className="social-links">
          <Link to="/imprint">Facebook</Link>
          <Link to="/privacy">Meetup</Link>
          <Link to="/privacy">Instagram</Link>
        </div>
      </div>
    </footer>
  );
}
