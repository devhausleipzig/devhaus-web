import React from "react";
import PageHeader from "components/PageHeader";
import "./Studio.scss";
import Picture from "components/Picture";
import { useTranslation } from 'react-i18next';

import fillipImage from "images/studio/fillip.png";
import lizatilmannImage from "images/studio/lizatilmann.png";
import devhausRebrandingImage from "images/studio/devhaus-rebranding.png";
import learningPlattformImage from "images/studio/learning-platform.png";
import pokedexImage from "images/studio/pokedex.png";
import skitmeImage from "images/studio/skitme.png";
import curryOnImage from "images/studio/curry-on.png";
import communicImage from "images/studio/communic.png";
import devhausNetworkImage from "images/studio/devhaus-network.png";
import hackerpubImage from "images/studio/hackerpub.png";
import weAreFamilyImage from "images/studio/we-are-family.png";
import plantSwapImage from "images/studio/plant-swap.png";
import klocatorImage from "images/studio/klocator.png";

function Project({ image, title, link, width, height }) {
  const content = (
    <div className="project">
      <div className="image-container">
        <Picture src={image} alt={title} width={width} height={height} />
      </div>
      <h4 className="">{title}</h4>
    </div>
  );
  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return content;
}

function OngoingProjects() {
  const { t } = useTranslation()
  
  return ([  
    {
      image: fillipImage,
      title: t('studio:ongoingProjects.fillip'),
      link: "https://fillip.ai",
      imageWidth: 600,
      imageHeight: 519,
    },
    {
      image: learningPlattformImage,
      title: t('studio:ongoingProjects.learningPlatform'),
      imageWidth: 600,
      imageHeight: 623,
    },
    {
      image: devhausRebrandingImage,
      title: t('studio:ongoingProjects.devhausRebrand'),
      imageWidth: 600,
      imageHeight: 588,
    },
  ])
}


function PastProjects()  {
  const {t} = useTranslation()

  return ([
    {
      image: klocatorImage,
      title: t('studio:pastProjects.klocator'),
      imageWidth: 600,
      imageHeight: 614,
    },
    {
      image: weAreFamilyImage,
      title: t('studio:pastProjects.weAreFamily'),
      imageWidth: 600,
      imageHeight: 611,
    },
    {
      image: devhausNetworkImage,
      title: t('studio:pastProjects.devhausNetwork'),
      imageWidth: 600,
      imageHeight: 529,
    },
    {
      image: plantSwapImage,
      title: t('studio:pastProjects.plantSwap'),
      imageWidth: 600,
      imageHeight: 729,
    },
    {
      image: pokedexImage,
      title: t('studio:pastProjects.pokedex'),
      imageWidth: 600,
      imageHeight: 722,
    },
    {
      image: lizatilmannImage,
      title: t('studio:pastProjects.hairdresser'),
      imageWidth: 600,
      imageHeight: 600,
    },
    {
      image: skitmeImage,
      title: t('studio:pastProjects.skitme'),
      imageWidth: 600,
      imageHeight: 506,
    },
    {
      image: curryOnImage,
      title: t('studio:pastProjects.curryOn'),
      imageWidth: 600,
      imageHeight: 598,
    },
    {
      image: hackerpubImage,
      title: t('studio:pastProjects.hackerPub'),
      imageWidth: 600,
      imageHeight: 677,
    },
    {
      image: communicImage,
      title: t('studio:pastProjects.communic'),
      imageWidth: 600,
      imageHeight: 496,
    },
  ])
}

export default function Work() {
  const {t} = useTranslation()

  return (
    <div className="studio navbar-padding content">
      <PageHeader
        title={t('studio:header')}
        description={t('studio:subheader')}
        color="green"
      ></PageHeader>
      <section className="projects">
        <h4 className="secondary-title button-text">{t('studio:ongoingProjects.header')}</h4>
        <div className="grid">
          {OngoingProjects().map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              link={project.link}
              width={project.imageWidth}
              height={project.imageHeight}
            ></Project>
          ))}
        </div>
      </section>
      <section className="projects">
        <h4 className="secondary-title button-text">{t('studio:pastProjects.header')}</h4>
        <div className="grid">
          {PastProjects().map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              link={project.link}
              width={project.imageWidth}
              height={project.imageHeight}
            ></Project>
          ))}
        </div>
      </section>
    </div>
  );
}
