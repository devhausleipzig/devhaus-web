import React from "react";
import PageHeader from "components/PageHeader";
import "./Events.scss";
import { useTranslation } from 'react-i18next';

function Event({ title, date, time, location, link }) {
  return (
    <div className="event">
      <div className="meta">
        <div className="date button-text">{date}</div>
      </div>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <h3>{title}</h3>
        </a>
      ) : (
        <h3>{title}</h3>
      )}
    </div>
  );
}

export default function Events() {
  const { t } = useTranslation()

  return (
    <div className="events navbar-padding content">
      <PageHeader
        title={t('events:header')}
        description=""
        color="yellow"
      ></PageHeader>
      <div>
        <Event
          title={t('events:demoDay.header')}
          date="25.11.2021"
          link="https://www.meetup.com/devhaus-leipzig-meetup-group/events/279316224/"
        ></Event>

        <Event
          title={t('events:camp5Start.header')}
          date="13.01.2022"
        ></Event>

        <Event
          title={t('events:camp5FirstHackathon.header')}
          date="16.03.2022"
          link="https://www.meetup.com/devhaus-leipzig-meetup-group/events/284198992/"
        ></Event>

        <Event
          title={t('events:hackolaus.header')}
          link="https://hackolaus.netlify.app/"
          date="08.04.2022 - 10.04.2022"
        ></Event>
      </div>
    </div>
  );
}
