import React from "react";
import PageHeader from "../components/PageHeader";
import Picture from "../components/Picture";
import { useTranslation } from "react-i18next";
import Page from "../layout/page";
import Head from "next/head";

const fillipImage = "../images/studio/fillip.png";
const lizatilmannImage = "../images/studio/lizatilmann.png";
const devhausRebrandingImage = "../images/studio/devhaus-rebranding.png";
const learningPlattformImage = "../images/studio/learning-platform.png";
const pokedexImage = "../images/studio/pokedex.png";
const skitmeImage = "../images/studio/skitme.png";
const curryOnImage = "../images/studio/curry-on.png";
const communicImage = "../images/studio/communic.png";
const devhausNetworkImage = "../images/studio/devhaus-network.png";
const hackerpubImage = "../images/studio/hackerpub.png";
const weAreFamilyImage = "../images/studio/we-are-family.png";
const plantSwapImage = "../images/studio/plant-swap.png";
const klocatorImage = "../images/studio/klocator.png";

interface Props {
  image: string;
  title: string;
  link: string;
  width: number;
  height: number;
}

function Project({ image, title, link, width, height }: Props) {
  const content = (
    <div>
      <div className="mb-2">
        <Picture src={image} alt={title} width={width} height={height} />
      </div>
      <h4 className="font-serif text-xl font-light">{title}</h4>
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

type Project = {
  image: string;
  title: string;
  link?: string;
  imageWidth: number;
  imageHeight: number;
};

export default function Work() {
  const { t } = useTranslation();

  const ongoingProjects: Project[] = [
    {
      image: fillipImage,
      title: t("studio:ongoingProjects.fillip"),
      link: "https://fillip.ai",
      imageWidth: 600,
      imageHeight: 519,
    },
    {
      image: learningPlattformImage,
      title: t("studio:ongoingProjects.learningPlatform"),
      imageWidth: 600,
      imageHeight: 623,
    },
    {
      image: devhausRebrandingImage,
      title: t("studio:ongoingProjects.devhausRebrand"),
      imageWidth: 600,
      imageHeight: 588,
    },
  ];

  const pastProjects: Project[] = [
    {
      image: klocatorImage,
      title: t("studio:pastProjects.klocator"),
      imageWidth: 600,
      imageHeight: 614,
    },
    {
      image: weAreFamilyImage,
      title: t("studio:pastProjects.weAreFamily"),
      imageWidth: 600,
      imageHeight: 611,
    },
    {
      image: devhausNetworkImage,
      title: t("studio:pastProjects.devhausNetwork"),
      imageWidth: 600,
      imageHeight: 529,
    },
    {
      image: plantSwapImage,
      title: t("studio:pastProjects.plantSwap"),
      imageWidth: 600,
      imageHeight: 729,
    },
    {
      image: pokedexImage,
      title: t("studio:pastProjects.pokedex"),
      imageWidth: 600,
      imageHeight: 722,
    },
    {
      image: lizatilmannImage,
      title: t("studio:pastProjects.hairdresser"),
      imageWidth: 600,
      imageHeight: 600,
    },
    {
      image: skitmeImage,
      title: t("studio:pastProjects.skitme"),
      imageWidth: 600,
      imageHeight: 506,
    },
    {
      image: curryOnImage,
      title: t("studio:pastProjects.curryOn"),
      imageWidth: 600,
      imageHeight: 598,
    },
    {
      image: hackerpubImage,
      title: t("studio:pastProjects.hackerPub"),
      imageWidth: 600,
      imageHeight: 677,
    },
    {
      image: communicImage,
      title: t("studio:pastProjects.communic"),
      imageWidth: 600,
      imageHeight: 496,
    },
  ];

  return (
    <Page>
      <Head>
        <title>Studio - Devhaus Leipzig</title>
      </Head>
      <PageHeader
        title={t("studio:header")}
        description={t("studio:subheader")}
        color="green"
      ></PageHeader>
      <section className="projects">
        <h2 className="mb-12 text-3xl font-light">
          {t("studio:ongoingProjects.header")}
        </h2>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {ongoingProjects.map((project, index) => (
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
        <h4 className="mb-12 text-3xl font-light">
          {t("studio:pastProjects.header")}
        </h4>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {pastProjects.map((project, index) => (
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
    </Page>
  );
}
