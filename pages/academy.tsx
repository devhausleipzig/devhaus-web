import React from "react";
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "react-html-parser";
import PageHeader from "../components/PageHeader";
import Picture from "../components/Picture";
import { useRouter } from "next/router";
import { CenteredHeading, Heading } from "../components/Headings";
import Page from "../layout/page";
import Head from "next/head";

const franzImage = "../images/profiles/franz.png";
const valImage = "../images/profiles/val.png";
const danImage = "../images/profiles/dan.png";
const svenImage = "../images/profiles/sven.png";

const actaportLogo = "../images/logos/actaport.png";
const check24Logo = "../images/logos/check24-logo.png";
const compl3teLogo = "../images/logos/compl3te-logo.png";
const devhausLogo = "../images/devhaus-logo.svg";
const ecommeleonLogo = "../images/logos/ecommeleon-logo.png";
const edoxLogo = "../images/logos/edox-logo.png";
const idivLogo = "../images/logos/idiv.png";
const prismaLogo = "../images/logos/prisma-logo.png";
const sciendisLogo = "../images/logos/sciendis.png";
const spreadshirtLogo = "../images/logos/spreadshirt-logo.png";
const eexLogo = "../images/logos/eex.png";
const micoboLogo = "../images/logos/micobo.png";
const infaiLogo = "../images/logos/infai.jpg";
const dotsourceLogo = "../images/logos/dotsource.png";
const fillipLogo = "../images/logos/fillip.png";
const finatixLogo = "../images/logos/finatix.png";
const thinkportLogo = "../images/logos/thinkport.png";
const wtlLogo = "../images/logos/wtl.png";

// these must be written in a way that is natural language agnostic
const camps = [
  {
    season: "Summer/Fall Camp",
    start: "14/07/2022",
    end: "19/12/2022",
  },
  {
    season: "Fall/Winter Camp",
    start: "20/10/2022",
    end: "27/03/2023",
  },
];
const currentCampStart = "07-14-2022";
const currentCampEnd = "12-19-2022";
const campPrice = "€15.110 + VAT";
const financialContact = "info@devhausleipzig.de";

const pic1 = "../images/academy/dan-classroom.jpg";
const titleImage = "../images/academy/academy.jpg";
const pic2 = "../images/academy/gabe-val-prisma.jpg";
const pic3 = "../images/academy/val-christina.jpg";
const pic4 = "../images/academy/class-1.jpg";

const logos = [
  {
    logo: actaportLogo,
    name: "actaport",
  },
  {
    logo: check24Logo,
    name: "check24",
  },
  {
    logo: compl3teLogo,
    name: "compl3te",
  },
  {
    logo: ecommeleonLogo,
    name: "ecommeleon",
  },
  {
    logo: edoxLogo,
    name: "e-dox",
  },
  {
    logo: idivLogo,
    name: "idiv",
  },
  {
    logo: prismaLogo,
    name: "Prisma",
  },
  {
    logo: eexLogo,
    name: "eex",
  },
  {
    logo: micoboLogo,
    name: "micobo",
  },
  {
    logo: sciendisLogo,
    name: "sciendis",
  },
  {
    logo: spreadshirtLogo,
    name: "spreadshirt",
  },
  {
    logo: infaiLogo,
    name: "InfAI",
  },
  {
    logo: devhausLogo,
    name: "Devhaus",
  },
  {
    logo: dotsourceLogo,
    name: "DotSource",
  },
  {
    logo: fillipLogo,
    name: "Fillip",
  },
  {
    logo: finatixLogo,
    name: "Finatix",
  },
  {
    logo: thinkportLogo,
    name: "Thinkport",
  },
  {
    logo: wtlLogo,
    name: "WTL",
  },
];

export default function Academy() {
  const { t } = useTranslation();
  const router = useRouter();

  const specs = [
    t("academy:block2.courseLength"),
    t("academy:block2.classDays"),
    t("academy:block2.classTimes"),
    t("academy:block2.courseLanguage"),
    t("academy:block2.classHeadCount"),
    t("academy:block2.classFormat"),
  ];

  const skills = [
    t("academy:block2.keyFeature1"),
    t("academy:block2.keyFeature2"),
    t("academy:block2.keyFeature3"),
    t("academy:block2.keyFeature4"),
    t("academy:block2.keyFeature5"),
    t("academy:block2.keyFeature6"),
    t("academy:block2.keyFeature7"),
  ];

  const tools = [
    t("academy:block2.tool1"),
    t("academy:block2.tool2"),
    t("academy:block2.tool3"),
    t("academy:block2.tool4"),
    t("academy:block2.tool5"),
    t("academy:block2.tool6"),
    t("academy:block2.tool7"),
    t("academy:block2.tool8"),
    t("academy:block2.tool9"),
    t("academy:block2.tool10"),
  ];

  return (
    <Page>
      <Head>
        <title>Academy — Devhaus Leipzig</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1; maximum-scale=1"
        />
        <meta
          name="author"
          content="Devhaus Leizpig — A learning community for tech professionals"
        />
        <meta
          name="description"
          content="The Devhaus Academy is more than just a classroom; it’s an ongoing support system, the sole purpose of which is to help you become the best programmer and designer you can be."
        />
        <meta
          name="keywords"
          content="leipzig learning community camp bootcamp learn class classroom code coding programming development software skills digital"
        />
      </Head>
      <div>
        <PageHeader
          title={t("academy:block1.title")}
          description={t("academy:block1.description")}
          // image={titleImage}
          width={1536}
          height={1024}
          alt={t("academy:block1.picAltText")}
          color="blue"
        ></PageHeader>
        <div className="flex flex-col gap-8 lg:flex-row">
          <img
            src={titleImage}
            alt="Title Image"
            className="order-1 flex-1 object-cover"
          />
        </div>
        {/* Heading End */}
        <section className="mt-24">
          <CenteredHeading
            heading={t("academy:block2.header3")}
            subHeading={t("academy:block2.header2")}
          />
          <div className="mb-32 text-center">
            <div className="mb-8 flex flex-wrap justify-center divide-x text-lg font-medium uppercase leading-normal">
              {specs.map((spec) => (
                <span className="px-4 tracking-widest">{spec}</span>
              ))}
            </div>
            <div className="text-2 mb-2 text-lg">
              {ReactHtmlParser(
                `${t("academy:block2.courseDates")}`
                  .replace("#", `<strong>${currentCampStart}</strong>`)
                  .replace("@", `<strong>${currentCampEnd}</strong>`)
              )}
            </div>
            <div>
              <span
                className="flex justify-center text-lg"
                style={{ marginTop: "0.5rem" }}
              >
                {t("academy:block2.applicationType")}
              </span>
              <a
                href="https://devhausleipzig.typeform.com/to/pZOQK1pV"
                target="_blank"
                rel="noreferrer"
              >
                <button className="mt-6 rounded-sm bg-green py-2 px-4 text-xl uppercase tracking-widest text-offWhite">
                  {t("academy:block2.applyLink")}
                </button>
              </a>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 "> */}
          <div className="intro mx-auto mb-28 max-w-3xl space-y-6 text-justify text-lg">
            <h2 className="text-xl uppercase tracking-widest">
              About the Camp
            </h2>
            <div className="space-y-4 text-xl font-light leading-relaxed">
              <p>{t("academy:block2.paragraph1")}</p>
              <p>{t("academy:block2.paragraph2")}</p>
              <p>{t("academy:block2.paragraph3")}</p>
            </div>
          </div>
          <section className="outcomes mb-20">
            <h2 className="mb-6 text-center font-serif text-4xl font-light">
              {t("academy:block6.header")}
            </h2>
            <div className="flex flex-wrap items-center justify-center">
              {logos.map(({ logo, name }) => {
                return (
                  <div key={name} className="max-w-[24vmin] p-[5vmin]">
                    <img
                      className="max-h-[10vmin] object-contain"
                      src={logo}
                      alt={name}
                    ></img>
                  </div>
                );
              })}
            </div>
          </section>
          <div className="mx-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="skills mx-auto max-w-3xl space-y-6">
              <h2 className="text-xl uppercase tracking-widest">
                {t("academy:block2.keyFeatures")}
              </h2>
              <ul className="list-disc">
                {skills.map((skill, index) => (
                  <li>
                    <h3 className="text-xl font-light">{skill}</h3>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tools mx-auto max-w-3xl space-y-6">
              <h2 className="text-xl uppercase tracking-widest">
                {t("academy:block2.toolsTaught")}
              </h2>
              <ul className="list-disc">
                {tools.map((skill, index) => (
                  <li>
                    <h3 className="text-xl font-light">{skill}</h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <section className="financing mx-auto max-w-5xl font-light">
        <h2 className="mb-12 font-serif text-4xl">
          {t("academy:block7.header")}
        </h2>
        <div className="space-y-8 text-2xl">
          <div className="price">
            {ReactHtmlParser(
              `${t("academy:block7.part1")}`.replace(
                "#",
                `<strong>${campPrice}</strong>`
              )
            )}
          </div>
          <div className="jobcenter">
            {ReactHtmlParser(
              `${t("academy:block7.part2")}`
                .replace(
                  "#",
                  `<strong><a href="https://www.zaw-leipzig.de/weiterbildung/foerderung/bildungsgutschein/">Bildungsgutschein</a></strong>`
                )
                .replace("@", `<strong>${financialContact}</strong>`)
            )}
          </div>
          <p>
            {ReactHtmlParser(
              `${t("academy:block7.part3")}`.replace(
                "#",
                `<strong><a href="https://docs.google.com/document/d/1B9st0ma0hqu7rswsGI8QHE742f3ZV2L9_nL-zlgCv70">Scholarship</a></strong>`
              )
            )}
          </p>
          <div className="flex flex-col items-start">
            <button
              onClick={() => router.push("/faq")}
              className="mt-6 inline-block border-b-2 border-blue pb-1 uppercase"
            >
              {t("academy:block7.faqLink")}
            </button>
            <a
              className="inline-block"
              href="https://calendly.com/devhaus-leipzig/devhaus-1-on-1?month=2021-02"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-6 border-b-2 border-blue pb-1 uppercase">
                {t("academy:block7.callLink")}
              </button>
            </a>
            <a
              className="inline-block"
              href="https://www.coursereport.com/schools/devhaus-leipzig#reviews"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-6 border-b-2 border-blue pb-1 uppercase">
                {t("academy:block7.courseReportLink")}
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="instructors">
        <h2 className="mb-12 font-serif text-4xl font-light">
          {t("academy:block4.header")}
        </h2>
        <div className="mb-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          <InstructorItem
            imgSrc={franzImage}
            name="Franz"
            description="JavaScript & Python Backend Dev"
          />
          <InstructorItem
            imgSrc={valImage}
            name="Valeria"
            description="Frontend Dev"
          />
          <InstructorItem
            imgSrc={danImage}
            name="Dan"
            description="Senior Frontend Dev"
          />
          <InstructorItem
            imgSrc={svenImage}
            name="Sven"
            description="Senior Backend Dev & DevOps Engineer"
          />
        </div>
      </section>
      {/* Approach Section */}
      {/* <section>
        <h2 className="mb-12 font-serif text-4xl font-light">
          {t("academy:block3.header")}
        </h2>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          <Approach
            heading={t("academy:block3.sectionHeader1")}
            body={t("academy:block3.section1")}
          />
          <Approach
            heading={t("academy:block3.sectionHeader2")}
            body={t("academy:block3.section2")}
          />
          <Approach
            heading={t("academy:block3.sectionHeader3")}
            body={t("academy:block3.section3")}
            list={[
              t("academy:block3.section3bullet1"),
              t("academy:block3.section3bullet2"),
              t("academy:block3.section3bullet3"),
            ]}
          />
          <Approach
            heading={t("academy:block3.sectionHeader4")}
            body={t("academy:block3.section4")}
          />
          <Approach
            heading={t("academy:block3.sectionHeader5")}
            body={t("academy:block3.section5")}
          />
          <Approach
            heading={t("academy:block3.sectionHeader6")}
            body={t("academy:block3.section6")}
          />
        </div>
      </section> */}
      <section className="mx-auto max-w-3xl">
        <h2 className="mb-12 font-serif text-4xl font-light">
          {t("academy:block5.header")}
        </h2>
        <div className="grid grid-cols-[3rem,1fr] gap-x-4 gap-y-2 lg:gap-x-8">
          <PathItem
            mark="1-2"
            heading={t("academy:block5.sectionHeader1")}
            body={[
              t("academy:block5.section1Part1"),
              t("academy:block5.section1Part2"),
            ]}
          />
          <PathItem
            mark="3-4"
            heading={t("academy:block5.sectionHeader2")}
            body={[t("academy:block5.section2")]}
          />
          <PathItem
            mark="5-6"
            heading={t("academy:block5.sectionHeader3")}
            body={[t("academy:block5.section3")]}
          />
          <PathItem
            mark="7-8"
            heading={t("academy:block5.sectionHeader4")}
            body={[t("academy:block5.section4")]}
          />
          <PathItem
            mark="9"
            heading={t("academy:block5.sectionHeader5")}
            body={[t("academy:block5.section5")]}
          />
          <PathItem
            mark="10-15"
            heading={t("academy:block5.sectionHeader6")}
            body={[t("academy:block5.section6")]}
          />
          <PathItem
            mark="16-17"
            heading={t("academy:block5.sectionHeader7")}
            body={[t("academy:block5.section7")]}
          />
          <PathItem
            mark="18-19"
            heading={t("academy:block5.sectionHeader8")}
            body={[t("academy:block5.section8")]}
          />
          <PathItem
            mark="18-23"
            heading={t("academy:block5.sectionHeader9")}
            body={[t("academy:block5.section9")]}
          />
          <PathItem
            mark={t("academy:block5.sectionHeader10")}
            heading={t("academy:block5.section10")}
            body={[]}
          />
        </div>
      </section>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Picture
          src={pic1}
          alt={t("academy:block4.picAlt1")}
          width={752}
          height={500}
        ></Picture>
        <Picture
          src={pic2}
          alt={t("academy:block4.picAlt2")}
          width={752}
          height={500}
        ></Picture>
        <Picture
          src={pic3}
          alt={t("academy:block4.picAlt3")}
          width={752}
          height={500}
        ></Picture>
        <Picture
          src={pic4}
          alt={t("academy:block4.picAlt4")}
          width={752}
          height={500}
        ></Picture>
      </div>
      <section className="application mx-auto max-w-3xl">
        <h2 className="mb-12 font-serif text-4xl font-light">
          {t("academy:block8.header")}
        </h2>
        <h3 className="track-wider text-2 mb-2 text-2xl uppercase">
          {t("academy:block8.sectionHeader1")}
        </h3>
        <p className="mb-8 text-xl">{t("academy:block8.section1")}</p>
        <h3 className="track-wider text-2 mb-2 text-2xl uppercase">
          {t("academy:block8.sectionHeader2")}
        </h3>
        <p className="mb-8 text-xl">{t("academy:block8.section2")}</p>
        <h3 className="track-wider text-2 mb-2 text-2xl uppercase">
          {t("academy:block8.sectionHeader3")}
        </h3>
        <p className="mb-8 text-xl">{t("academy:block8.section3Part1")}</p>
        <p className="mb-8 text-xl">{t("academy:block8.section3Part2")}</p>
        <a
          href="https://devhausleipzig.typeform.com/to/pZOQK1pV"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex justify-center">
            <button className="border-b-2 border-blue pb-1 text-2xl uppercase">
              {t("academy:block8.applyLink")}
            </button>
          </div>
        </a>
      </section>
    </Page>
  );
}

type ApproachProps = {
  heading: string;
  body: string;
  list?: string[];
};

function Approach({ heading, body, list }: ApproachProps) {
  return (
    <div className="border-t border-gray-700 pt-4 font-light tracking-wide">
      <h3 className="mb-2 font-serif text-3xl">{heading}</h3>
      <p className="text-justify text-lg">{body}</p>
      {list && (
        <ul className="mt-4 pl-6 text-justify text-lg">
          {list &&
            list.map((item) => (
              <li key={item} className="list-outside list-disc">
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

type InstructorItemProps = {
  imgSrc: string;
  name: string;
  description: string;
};

function InstructorItem({ imgSrc, name, description }: InstructorItemProps) {
  return (
    <div className="text-center">
      <div className="mb-4">
        <Picture src={imgSrc} alt={name} width={348} height={348}></Picture>
      </div>
      <h3 className="font-serif text-2xl font-light">{name}</h3>
      <p className="font-light">{description}</p>
    </div>
  );
}

type PathItemProps = {
  mark: string;
  heading: string;
  body: string[];
};

function PathItem({ mark, heading, body }: PathItemProps) {
  return (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-900 text-xs">
        {mark}
      </div>
      <h3 className="self-center font-serif text-2xl font-light">{heading}</h3>
      <div className="flex items-center justify-center">
        <div className="h-full w-[1px] bg-gray-700 opacity-50"></div>
      </div>
      <div className="text-lg">
        {body.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </>
  );
}
