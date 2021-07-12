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

        <Event title="Kick-Off Code Camp #5" date="13.09.2021"></Event>

        <Event
          title="Demo Day"
          date="25.11.2021"
          link="https://www.meetup.com/devhaus-leipzig-meetup-group/events/279316224/"
        ></Event>

        <Event
          title="Hackolaus hosted by Open Tech School Leipzig"
          link="https://hackolaus.netlify.app/"
          date="19.11.2021 - 21.11.2021"
        ></Event>
        <Event
          title="Graduation of Class #5"
          date="10.12.2021"
          link="https://www.meetup.com/devhaus-leipzig-meetup-group/events/279337585/"
        ></Event>
      </div>
    </div>
  );
}
