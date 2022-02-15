import React from "react";
import PageHeader from "components/PageHeader";
import Picture from "components/Picture";
import { useTranslation } from 'react-i18next';

import "./Stories.scss";
import classRoom from "images/stories/classroom.png";
import camp1 from "images/stories/camp1.png";
import codemotion from "images/stories/codemotion.png";
import hypezig from "images/stories/hypezig.png";
import smartinfrastructurehub from "images/stories/smart-infrastructure-hub.png";
import futureRetailHackathon from "images/stories/future-retail-hackathon.png";
import startupSafari from "images/stories/startup-safari.png";

function Story({ title, image, category, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" key={title}>
      <div className="story">
        <div className="image">
          <div className="image-container">
            <Picture src={image} alt={title} width={224} height={224}></Picture>
          </div>
        </div>
        <div className="information">
          <div className="category button-text text-1">{category}</div>
          <h3>{title}</h3>
        </div>
      </div>
    </a>
  );
}

function GetStories() { 
  const { t } = useTranslation()

  return ([
    {
      title: t('stories:aWildRide'),
      image: classRoom,
      category: t('stories:categories.article'),
      link:
        "https://leipglo.com/2020/09/23/a-wild-ride-code-camp-leipzig-turns-one-year-old/",
    },

    {
      title: t('stories:smartInfrastructure'),
      image: smartinfrastructurehub,
      category: t('stories:categories.article'),
      link: "https://www.smartinfrastructurehub.com/vng-restart",
    },
    {
      title: t('stories:startupSafari'),
      image: startupSafari,
      category: t('stories:categories.panel'),
      link: "https://www.youtube.com/watch?v=H5qbkufaJ2I",
    },
    {
      title: t('stories:hypezig'),
      image: hypezig,
      category: t('stories:categories.article'),
      link:
        "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fit-standorte-wie-kann-leipzig-hypezig-bleiben-1907-142461.html%3Ffbclid%3DIwAR2MdlTuNNy5iZQ9NBzm-zR3_0CQD87Uk08hWo_lFGgVLtMmaa5crwtWR3A&referer=https%3A%2F%2Fl.facebook.com%2F",
    },
    {
      title: t('stories:tales'),
      image: camp1,
      category: t('stories:categories.storySeries'),
      link: "https://medium.com/series/code-camp-leipzig-the-camp-5cba9f08f2f5",
    },
    {
      title: t('stories:codemotion'),
      image: codemotion,
      category: t('stories:categories.interview'),
      link: "https://www.youtube.com/watch?v=guhX4AH0IGw",
    },
    {
      title: t('stories:retailHackathon'),
      image: futureRetailHackathon,
      category: t('stories:categories.hackathon'),
      link:
        "https://www.lvz.de/Nachrichten/Wirtschaft/Wirtschaftszeitung/Retail-Hackathon-Leipzig-Shopping-Ideen-fuer-die-Zukunft",
    },
  ])
}

export default function Stories() {
  return (
    <div className="stories navbar-padding content">
      <PageHeader title="Stories" color="red"></PageHeader>
      <div className="card-list">
        {GetStories().map((story) => Story(story))}
        </div>
    </div>
  );
}
