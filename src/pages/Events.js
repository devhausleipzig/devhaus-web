import React from "react";
import PageHeader from "components/PageHeader";
import "./Events.scss";

function Event({ title, date, time, location, link }) {
  return (
    <div className="event">
      <div className="meta">
        <div className="date button-text">{date}</div>
      </div>
      {link ? (
        <a href={link}>
          <h3>{title}</h3>
        </a>
      ) : (
        <h3>{title}</h3>
      )}
    </div>
  );
}

export default function Events() {
  return (
    <div className="events navbar-padding content">
      <PageHeader
        title="Upcoming Events"
        description=""
        color="yellow"
      ></PageHeader>
      <div>
        <Event title="Summer Break" date="01.07.2021 - 01.08.2021"></Event>

        <Event
          title="Chat With Us - Digital Career Landscape"
          date="28.10.2021"
          link="https://www.meetup.com/devhaus-leipzig-meetup-group/events/281565528/"
        ></Event>

        <Event
          title="Applications For Camp #5 Open"
          date="10.11.2021"
        ></Event>

        <Event
          title="Hackolaus hosted by Open Tech School Leipzig"
          link="https://hackolaus.netlify.app/"
          date="19.11.2021 - 21.11.2021"
        ></Event>

        <Event
          title="Demo Day"
          date="25.11.2021"
          link="https://www.meetup.com/devhaus-leipzig-meetup-group/events/279316224/"
        ></Event>

        <Event
          title="Camp #5 Kickoff Event"
          date="13.01.2022"
        ></Event>
      </div>
    </div>
  );
}
