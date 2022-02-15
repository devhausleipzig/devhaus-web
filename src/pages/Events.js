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
  const { t } = useTranslation()

  return (
    <div className="events navbar-padding content">
      <PageHeader
        title={t('events:header')}
        description=""
        color="yellow"
      ></PageHeader>
      <div>
        <Event title={t('events:summerBreak.header')} date="01.07.2021 - 01.08.2021"></Event>

        <Event
          title={t('events:careerMeetup.header')}
          date="28.10.2021"
          link="https://www.meetup.com/devhaus-leipzig-meetup-group/events/281565528/"
        ></Event>

        <Event
          title={t('events:camp5Apply.header')}
          date="10.11.2021"
        ></Event>

        <Event
          title={t('events:hackolaus.header')}
          link="https://hackolaus.netlify.app/"
          date="19.11.2021 - 21.11.2021"
        ></Event>

        <Event
          title={t('events:demoDay.header')}
          date="25.11.2021"
          link="https://www.meetup.com/devhaus-leipzig-meetup-group/events/279316224/"
        ></Event>

        <Event
          title={t('events:camp5Start.header')}
          date="13.01.2022"
        ></Event>
      </div>
    </div>
  );
}
