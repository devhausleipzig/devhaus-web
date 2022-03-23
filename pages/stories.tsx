import React from "react";
import PageHeader from "../components/PageHeader";
import Picture from "../components/Picture";
import { useTranslation } from "react-i18next";
import Page from "../layout/page";
import Head from "next/head";

const classRoom = "/images/stories/classroom.png";
const camp1 = "/images/stories/camp1.png";
const codemotion = "/images/stories/codemotion.png";
const hypezig = "/images/stories/hypezig.png";
const smartinfrastructurehub = "/images/stories/smart-infrastructure-hub.png";
const futureRetailHackathon = "/images/stories/future-retail-hackathon.png";
const startupSafari = "/images/stories/startup-safari.png";

function Story({ title, image, category, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" key={title}>
      <div className="grid grid-cols-1 gap-x-8 md:grid-cols-[14rem,1fr]">
        <div>
          <Picture src={image} alt={title} width={224} height={224}></Picture>
        </div>
        <div className="information">
          <div className="text-lg uppercase tracking-widest">{category}</div>
          <h3 className="font-serif text-2xl font-light">{title}</h3>
        </div>
      </div>
    </a>
  );
}

export default function Stories() {
  const { t } = useTranslation();

  const stories = [
    {
      title: t("stories:aWildRide"),
      image: classRoom,
      category: t("stories:categories.article"),
      link: "https://leipglo.com/2020/09/23/a-wild-ride-code-camp-leipzig-turns-one-year-old/",
    },

    {
      title: t("stories:smartInfrastructure"),
      image: smartinfrastructurehub,
      category: t("stories:categories.article"),
      link: "https://www.smartinfrastructurehub.com/vng-restart",
    },
    {
      title: t("stories:startupSafari"),
      image: startupSafari,
      category: t("stories:categories.panel"),
      link: "https://www.youtube.com/watch?v=H5qbkufaJ2I",
    },
    {
      title: t("stories:hypezig"),
      image: hypezig,
      category: t("stories:categories.article"),
      link: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fit-standorte-wie-kann-leipzig-hypezig-bleiben-1907-142461.html%3Ffbclid%3DIwAR2MdlTuNNy5iZQ9NBzm-zR3_0CQD87Uk08hWo_lFGgVLtMmaa5crwtWR3A&referer=https%3A%2F%2Fl.facebook.com%2F",
    },
    {
      title: t("stories:tales"),
      image: camp1,
      category: t("stories:categories.storySeries"),
      link: "https://medium.com/series/code-camp-leipzig-the-camp-5cba9f08f2f5",
    },
    {
      title: t("stories:codemotion"),
      image: codemotion,
      category: t("stories:categories.interview"),
      link: "https://www.youtube.com/watch?v=guhX4AH0IGw",
    },
    {
      title: t("stories:retailHackathon"),
      image: futureRetailHackathon,
      category: t("stories:categories.hackathon"),
      link: "https://www.lvz.de/Nachrichten/Wirtschaft/Wirtschaftszeitung/Retail-Hackathon-Leipzig-Shopping-Ideen-fuer-die-Zukunft",
    },
  ];

  return (
    <Page>
      <Head>
        <title>Stories — Devhaus Leipzig</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width; initial-scale=1; maximum-scale=1"/>
        <meta name="author" content="Devhaus Leizpig — A learning community for tech professionals"/>
      </Head>
      <PageHeader title="Stories" color="red"></PageHeader>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
        {stories.map((story) => Story(story))}
      </div>
    </Page>
  );
}
