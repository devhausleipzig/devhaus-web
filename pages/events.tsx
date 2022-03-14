import React from "react";
import PageHeader from "../components/PageHeader";
// import "./Events.scss";
import { useTranslation } from "react-i18next";
import Page from "../layout/page";
import Head from "next/head";

interface EventProps {
  title: string;
  date: string;
  time?: string;
  location?: string;
  link?: string;
}

function Event({ title, date, time, location, link }: EventProps) {
  return (
    <div className="event">
      <div className="meta">
        <div className="mb-2 text-lg uppercase tracking-widest">{date}</div>
      </div>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <h3 className="font-serif text-3xl font-light">{title}</h3>
        </a>
      ) : (
        <h3>{title}</h3>
      )}
    </div>
  );
}

export default function Events() {
  const { t } = useTranslation();

  return (
    <Page>
      <Head>
        <title>Events - Devhaus Leipzig</title>
      </Head>
      <PageHeader
        title={t("events:header")}
        description=""
        color="yellow"
      ></PageHeader>
      <div className="space-y-16">
        <Event
          title={t("events:demoDay.header")}
          date="25.11.2021"
          link="https://www.meetup.com/devhaus-leipzig-meetup-group/events/279316224/"
        ></Event>

        <Event title={t("events:camp5Start.header")} date="13.01.2022"></Event>

        <Event
          title={t("events:camp5FirstHackathon.header")}
          date="16.03.2022"
          link="https://www.meetup.com/devhaus-leipzig-meetup-group/events/284198992/"
        ></Event>

        <Event
          title={t("events:hackolaus.header")}
          link="https://hackolaus.netlify.app/"
          date="08.04.2022 - 10.04.2022"
        ></Event>
      </div>
    </Page>
  );
}
