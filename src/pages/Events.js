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
        <Event title="Kick-Off Code Camp #4" date="15.03.2021"></Event>
        <Event
          title="Code Camp #4 Graduation"
          date="11.06.2021"
          time="@18:00"
        ></Event>
      </div>
    </div>
  );
}
