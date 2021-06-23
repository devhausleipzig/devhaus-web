import React from "react";
import PageHeader from "components/PageHeader";
import "./Events.scss";

function Event({ title, date, time, location }) {
  return (
    <div className="event">
      <div className="meta">
        <div className="date button-text">{date}</div>
      </div>
      <h3>{title}</h3>
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

        <Event title="Kick-Off Code Camp #5" date="30.08.2021"></Event>
      </div>
    </div>
  );
}
