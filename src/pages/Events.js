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
      <PageHeader title="Events" description="" color="yellow"></PageHeader>
      <div>
        <Event
          title="Application Deadline for Code Camp #4"
          date="15.02.2021"
        ></Event>
        <Event title="Game Jam" date="17.01.2021 - 19.01.2021"></Event>
        <Event
          title="Kick-Off Code Camp #4"
          date="15.03.2021"
          time="@18:00"
          location="Zoom"
        ></Event>
      </div>
    </div>
  );
}
